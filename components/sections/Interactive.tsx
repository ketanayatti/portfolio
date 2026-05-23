'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import {
  JOURNEY,
  PERSONAL,
  PHILOSOPHY,
  SOCIAL,
  SKILLS_GROUPED,
} from '@/lib/constants'

type NodeId = 'profile' | 'principles' | 'timeline' | 'contact' | 'hiring'

interface NodeDefinition {
  id: NodeId
  label: string
  x: number
  y: number
}

interface EdgeDefinition {
  from: NodeId
  to: NodeId
}

interface TimelineEntry {
  range: string
  role: string
  org: string
  impact: string
}

interface MetricsState {
  uptimeSeconds: number
  availability: number
  build: 'Passing' | 'Degraded' | 'Attention'
  latencyMs: number
}

const VIEWBOX = { width: 800, height: 420 }
const NODE_SIZE = { width: 176, height: 54 }
const CENTER_X = (VIEWBOX.width - NODE_SIZE.width) / 2

const NODES: NodeDefinition[] = [
  { id: 'profile', label: 'PROFILE', x: CENTER_X, y: 40 },
  { id: 'principles', label: 'PRINCIPLES', x: 90, y: 160 },
  { id: 'timeline', label: 'TIMELINE', x: VIEWBOX.width - NODE_SIZE.width - 90, y: 160 },
  { id: 'contact', label: 'CONTACT', x: 90, y: 300 },
  { id: 'hiring', label: 'HIRING HUB', x: VIEWBOX.width - NODE_SIZE.width - 90, y: 300 },
]

const EDGES: EdgeDefinition[] = [
  { from: 'profile', to: 'principles' },
  { from: 'profile', to: 'timeline' },
  { from: 'principles', to: 'contact' },
  { from: 'principles', to: 'hiring' },
  { from: 'timeline', to: 'hiring' },
]

const NODE_ORDER = NODES.map((node) => node.id)

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

const formatUptime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const pad = (value: number) => value.toString().padStart(2, '0')
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const stripEmoji = (value: string) => value.replace(/[^\x20-\x7E]/g, '').trim()

const normalizeSentence = (value: string) => {
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.endsWith('.') ? trimmed : `${trimmed}.`
}

const buildTimelineEntries = (): TimelineEntry[] => {
  if (!JOURNEY[0]) return []

  const descriptionSentences = JOURNEY[0].description
    .split('. ')
    .map((sentence) => sentence.trim())
    .filter(Boolean)

  const frontendSentence = normalizeSentence(descriptionSentences[0] ?? '')
  const devopsSentence = normalizeSentence(descriptionSentences[1] ?? '')

  const entries: TimelineEntry[] = []

  entries.push({
    range: JOURNEY[0].year,
    role: 'Frontend Developer Intern -> DevOps Engineer Intern',
    org: JOURNEY[0].org,
    impact: `${frontendSentence} ${devopsSentence}`.trim(),
  })

  return entries
}

const shorten = (value: string, max = 120) => {
  const trimmed = value.trim()
  if (trimmed.length <= max) return trimmed
  return `${trimmed.slice(0, max - 3).trim()}...`
}

const PRINCIPLES = PHILOSOPHY.map((item) => ({
  number: item.number,
  statement: stripEmoji(item.statement),
  detail: shorten(stripEmoji(normalizeSentence(item.detail)), 100),
}))

const TIMELINE_ENTRIES = buildTimelineEntries()
const combineUnique = (items: string[]) => Array.from(new Set(items))
const PROFILE_ONE_LINER = normalizeSentence(PERSONAL.bio.split('\n\n')[0])
const PROFILE_FOCUS_LINE =
  'I emphasize infrastructure, automation, and reliability, building strong skills through experience.'
const PROFILE_OPEN_LINE = 'Building knowledge and upskilling through real delivery experience.'
const PROFILE_SKILLS = combineUnique([
  ...SKILLS_GROUPED.devops.skills,
  ...SKILLS_GROUPED.application.skills,
]).slice(0, 12)
const PROFILE_AREAS = combineUnique([
  'Deployment Automation',
  'Infrastructure Reliability',
  'CI/CD Pipelines',
  'Zero-Downtime Deployment',
  ...SKILLS_GROUPED.application.skills,
]).slice(0, 10)
const INTERNSHIP = JOURNEY[0]
const CONTACT_LINE = 'Ping me once. I answer before most pipelines finish.'
const CONTACT_SUBLINE = 'No forms. Just direct channels.'
const HIRING_ONE_LINER =
  'System-focused, reliability-first DevOps engineer who understands systems deeply, automates delivery, and guards uptime.'
const HIRING_WHY = [
  'Bridges application and infrastructure decisions for reliable releases.',
  'Builds CI/CD pipelines with validation gates and rollback safety.',
  'Understands system behavior across frontend, backend, and ops.',
]
const HIRING_CAN_DO = [
  'Ship automation that keeps deployments predictable and safe.',
  'Harden apps with monitoring, alerting, and reliability guardrails.',
  'Improve API delivery and infrastructure performance together.',
]
const HIRING_SKILLS = combineUnique([
  ...SKILLS_GROUPED.devops.skills,
  ...SKILLS_GROUPED.application.skills,
]).slice(0, 12)

const createInitialMetrics = (): MetricsState => ({
  uptimeSeconds: 3600 + Math.floor(Math.random() * 2400),
  availability: 99.92 + Math.random() * 0.06,
  build: 'Passing',
  latencyMs: 55 + Math.floor(Math.random() * 35),
})

const BASE_METRICS: MetricsState = {
  uptimeSeconds: 0,
  availability: 99.95,
  build: 'Passing',
  latencyMs: 68,
}

const DETAIL_META: Record<NodeId, { title: string; subtitle: string }> = {
  profile: { title: 'PROFILE', subtitle: 'Identity anchor node' },
  principles: { title: 'PRINCIPLES', subtitle: 'Engineering pillars' },
  timeline: { title: 'TIMELINE', subtitle: 'Operational history' },
  contact: { title: 'CONTACT', subtitle: 'Primary channels' },
  hiring: { title: 'HIRING HUB', subtitle: 'Recruiter view' },
}

export default function Interactive() {
  const [activeNodeId, setActiveNodeId] = useState<NodeId | null>(null)
  const [focusedNodeId, setFocusedNodeId] = useState<NodeId>('profile')
  const [metrics, setMetrics] = useState<MetricsState>(BASE_METRICS)

  useEffect(() => {
    setMetrics(createInitialMetrics())

    const interval = setInterval(() => {
      setMetrics((prev) => {
        const availabilityDelta = (Math.random() - 0.5) * 0.04
        const latencyDelta = Math.round((Math.random() - 0.5) * 10)
        const nextAvailability = clamp(prev.availability + availabilityDelta, 99.9, 100)
        const nextLatency = clamp(prev.latencyMs + latencyDelta, 40, 120)

        let nextBuild = prev.build
        if (Math.random() < 0.08) {
          if (prev.build === 'Passing') {
            nextBuild = Math.random() < 0.5 ? 'Degraded' : 'Attention'
          } else {
            nextBuild = 'Passing'
          }
        }

        return {
          uptimeSeconds: prev.uptimeSeconds + 1,
          availability: nextAvailability,
          build: nextBuild,
          latencyMs: nextLatency,
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleNodeClick = (nodeId: NodeId) => {
    setFocusedNodeId(nodeId)
    setActiveNodeId((prev) => (prev === nodeId ? null : nodeId))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      setFocusedNodeId((prev) => {
        const index = NODE_ORDER.indexOf(prev)
        return NODE_ORDER[(index + 1) % NODE_ORDER.length]
      })
      return
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      setFocusedNodeId((prev) => {
        const index = NODE_ORDER.indexOf(prev)
        return NODE_ORDER[(index - 1 + NODE_ORDER.length) % NODE_ORDER.length]
      })
      return
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      setActiveNodeId((prev) => (prev === focusedNodeId ? null : focusedNodeId))
    }
  }

  const buildStatusClass =
    metrics.build === 'Passing'
      ? 'runtime-status-good'
      : metrics.build === 'Degraded'
      ? 'runtime-status-warn'
      : 'runtime-status-bad'

  return (
    <section id="interactive" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-32 px-6 md:px-16 w-full runtime-control">
        <div className="section-number">07</div>

        <motion.div
          className="max-w-6xl mx-auto w-full flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="mono block mb-4">07 / runtime</span>
            <h2 className="heading-xl runtime-title mb-4">Runtime Control Center</h2>
            <p className="runtime-subtitle">Infrastructure, Automation, Reliability</p>
          </motion.div>

          <motion.div variants={fadeUp} className="runtime-shell">
            <div className="runtime-status" aria-label="System status">
              <div className="runtime-status-item">
                <span className="runtime-status-label">Uptime</span>
                <span className="runtime-status-value">{formatUptime(metrics.uptimeSeconds)}</span>
              </div>
              <div className="runtime-status-item">
                <span className="runtime-status-label">Node Availability</span>
                <span className="runtime-status-value">{metrics.availability.toFixed(2)}%</span>
              </div>
              <div className="runtime-status-item">
                <span className="runtime-status-label">Build Status</span>
                <span className={`runtime-status-value ${buildStatusClass}`}>{metrics.build}</span>
              </div>
              <div className="runtime-status-item">
                <span className="runtime-status-label">Latency</span>
                <span className="runtime-status-value">{Math.round(metrics.latencyMs)}ms</span>
              </div>
            </div>

            <div className="runtime-main">
              <div
                className="runtime-diagram"
                role="group"
                aria-label="Runtime node topology"
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                <div className="runtime-diagram-content">
                  <svg
                    className="runtime-svg"
                    viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
                    role="img"
                    aria-hidden
                  >
                    <defs>
                      <marker
                        id="arrow-muted"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-muted)" />
                      </marker>
                      <marker
                        id="arrow-active"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                      </marker>
                    </defs>

                    <g className="runtime-edges">
                      {EDGES.map((edge, index) => {
                        const from = NODES.find((node) => node.id === edge.from)
                        const to = NODES.find((node) => node.id === edge.to)
                        if (!from || !to) return null
                        const isActive =
                          activeNodeId !== null &&
                          (edge.from === activeNodeId || edge.to === activeNodeId)
                        const x1 = from.x + NODE_SIZE.width / 2
                        const y1 = from.y + NODE_SIZE.height / 2
                        const x2 = to.x + NODE_SIZE.width / 2
                        const y2 = to.y + NODE_SIZE.height / 2

                        return (
                          <line
                            key={`${edge.from}-${edge.to}-${index}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            className={isActive ? 'control-edge control-edge-active' : 'control-edge'}
                            markerEnd={isActive ? 'url(#arrow-active)' : 'url(#arrow-muted)'}
                          />
                        )
                      })}
                    </g>

                    <g className="runtime-nodes">
                      {NODES.map((node) => {
                        const isActive = activeNodeId === node.id
                        const isFocused = focusedNodeId === node.id
                        return (
                          <g
                            key={node.id}
                            className={`control-node${isActive ? ' is-active' : ''}${isFocused ? ' is-focused' : ''}`}
                            onClick={() => handleNodeClick(node.id)}
                            onMouseEnter={() => setFocusedNodeId(node.id)}
                            role="button"
                            aria-pressed={isActive}
                            tabIndex={-1}
                          >
                            <rect
                              x={node.x}
                              y={node.y}
                              width={NODE_SIZE.width}
                              height={NODE_SIZE.height}
                              rx={8}
                              className="control-node-rect"
                            />
                            <text
                              x={node.x + NODE_SIZE.width / 2}
                              y={node.y + NODE_SIZE.height / 2}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              className="control-node-label"
                            >
                              {node.label}
                            </text>
                          </g>
                        )
                      })}
                    </g>
                  </svg>
                </div>
              </div>

              <div className="runtime-detail" aria-live="polite" data-lenis-prevent>
                <div className="runtime-scroll-hint" aria-hidden="true">Scroll down</div>
                <AnimatePresence mode="wait">
                  {!activeNodeId ? (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="runtime-detail-idle"
                    >
                      <div className="runtime-detail-header">
                        <div className="runtime-detail-title">Select a node</div>
                        <div className="runtime-detail-sub">Choose a block to view details</div>
                      </div>
                      <div className="runtime-detail-scroll" data-lenis-prevent>
                        <div className="runtime-detail-body">
                          <p className="runtime-body">
                            Use the diagram to inspect profile data, engineering principles, timeline, and contact routes.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activeNodeId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="runtime-detail-content"
                    >
                      <div className="runtime-detail-header">
                        <div className="runtime-detail-title">{DETAIL_META[activeNodeId].title}</div>
                        <div className="runtime-detail-sub">{DETAIL_META[activeNodeId].subtitle}</div>
                      </div>

                      <div className="runtime-detail-scroll" data-lenis-prevent>
                      {activeNodeId === 'profile' && (
                        <div className="runtime-detail-body">
                          <div className="runtime-field-grid">
                            <div className="runtime-field">
                              <span className="runtime-label">Name</span>
                              <span className="runtime-value">Ketan Ayatti</span>
                            </div>
                            <div className="runtime-field">
                              <span className="runtime-label">Org + Role</span>
                              <span className="runtime-value">Internship EX-IonIdea DevOps Engineer Intern</span>
                            </div>
                            <div className="runtime-field">
                              <span className="runtime-label">Experience</span>
                              <span className="runtime-value">4 months</span>
                            </div>
                            <div className="runtime-field">
                              <span className="runtime-label">Period</span>
                              <span className="runtime-value">{INTERNSHIP?.year ?? 'Jan 2026 - Apr 2026'}</span>
                            </div>
                          </div>

                          <p className="runtime-body">{PROFILE_ONE_LINER}</p>

                          <div className="runtime-section">
                            <div className="runtime-section-title">Focus</div>
                            <div className="runtime-body runtime-emphasis">{PROFILE_FOCUS_LINE}</div>
                          </div>

                          <div className="runtime-section">
                            <div className="runtime-section-title">Open for Roles</div>
                            <div className="runtime-body">{PROFILE_OPEN_LINE}</div>
                          </div>

                          <div className="runtime-section">
                            <div className="runtime-section-title">Core Skills</div>
                            <div className="runtime-tags">
                              {PROFILE_SKILLS.map((skill) => (
                                <span key={skill} className="runtime-tag">{skill}</span>
                              ))}
                            </div>
                          </div>

                          <div className="runtime-section">
                            <div className="runtime-section-title">Focus Areas</div>
                            <div className="runtime-tags">
                              {PROFILE_AREAS.map((area) => (
                                <span key={area} className="runtime-tag">{area}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeNodeId === 'principles' && (
                        <div className="runtime-detail-body">
                          <div className="runtime-list">
                            {PRINCIPLES.map((item) => (
                              <div key={item.number} className="runtime-list-item">
                                <div className="runtime-list-index">{item.number}</div>
                                <div className="runtime-list-content">
                                  <div className="runtime-list-title">{item.statement}</div>
                                  <div className="runtime-list-desc">{item.detail}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeNodeId === 'timeline' && (
                        <div className="runtime-detail-body">
                          <div className="runtime-timeline">
                            {TIMELINE_ENTRIES.map((entry, index) => (
                              <div key={`${entry.range}-${index}`} className="runtime-timeline-item">
                                <div className="runtime-timeline-range">{entry.range}</div>
                                <div className="runtime-timeline-body">
                                  <div className="runtime-timeline-role">{entry.role}</div>
                                  <div className="runtime-timeline-org">{entry.org}</div>
                                  <div className="runtime-timeline-impact">{entry.impact}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeNodeId === 'contact' && (
                        <div className="runtime-detail-body">
                          <p className="runtime-body runtime-contact-line">{CONTACT_LINE}</p>
                          <p className="runtime-body runtime-contact-sub">{CONTACT_SUBLINE}</p>

                          <div className="runtime-button-row">
                            <a className="runtime-button runtime-button-small" href={`mailto:${SOCIAL.email}`}>
                              Email
                            </a>
                            <a className="runtime-button runtime-button-small" href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
                              GitHub
                            </a>
                            <a className="runtime-button runtime-button-small" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
                              LinkedIn
                            </a>
                          </div>

                          <div className="runtime-availability">
                            <span
                              className={`runtime-status-dot ${PERSONAL.available ? 'is-available' : 'is-unavailable'}`}
                            />
                            <span>{PERSONAL.available ? 'Available' : 'Unavailable'}</span>
                          </div>
                        </div>
                      )}

                      {activeNodeId === 'hiring' && (
                        <div className="runtime-detail-body">
                          <div className="runtime-availability">
                            <span
                              className={`runtime-status-dot ${PERSONAL.available ? 'is-available' : 'is-unavailable'}`}
                            />
                            <span>{PERSONAL.available ? 'Open for opportunity' : 'Not accepting roles'}</span>
                          </div>

                          <p className="runtime-body runtime-hiring-line">{HIRING_ONE_LINER}</p>

                          <div className="runtime-section">
                            <div className="runtime-section-title">Why Hire Me</div>
                            <div className="runtime-bullets">
                              {HIRING_WHY.map((item) => (
                                <div key={item} className="runtime-bullet">{item}</div>
                              ))}
                            </div>
                          </div>

                          <div className="runtime-section">
                            <div className="runtime-section-title">What I Can Do</div>
                            <div className="runtime-bullets">
                              {HIRING_CAN_DO.map((item) => (
                                <div key={item} className="runtime-bullet">{item}</div>
                              ))}
                            </div>
                          </div>

                          <div className="runtime-section">
                            <div className="runtime-section-title">Core Skills</div>
                            <div className="runtime-tags">
                              {HIRING_SKILLS.map((skill) => (
                                <span key={skill} className="runtime-tag">{skill}</span>
                              ))}
                            </div>
                          </div>

                          <div className="runtime-button-row">
                            <a
                              className="runtime-button runtime-button-small"
                              href={SOCIAL.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Project Impact
                            </a>
                          </div>
                        </div>
                      )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
