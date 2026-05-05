'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { TERMINAL_COMMANDS } from '@/lib/constants'

interface TerminalLine {
  type: 'input' | 'output'
  content: string
}

function TerminalEmulator() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to my terminal. Type "help" for available commands.' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isTyping) return

    const cmd = input.trim().toLowerCase()
    setLines((prev) => [...prev, { type: 'input', content: `$ ${input}` }])
    setInput('')

    if (cmd === 'clear') {
      setLines([])
      return
    }

    const response = TERMINAL_COMMANDS[cmd] || `Command not found: ${cmd}. Type "help" for available commands.`

    setIsTyping(true)
    // Simulate typing
    let charIdx = 0
    const typeChar = () => {
      if (charIdx <= response.length) {
        setLines((prev) => {
          const updated = [...prev]
          const lastLine = updated[updated.length - 1]
          if (lastLine?.type === 'output' && charIdx > 0) {
            updated[updated.length - 1] = { type: 'output', content: response.slice(0, charIdx) }
          } else {
            updated.push({ type: 'output', content: response.slice(0, charIdx) })
          }
          return updated
        })
        charIdx++
        setTimeout(typeChar, 5)
      } else {
        setIsTyping(false)
      }
    }
    setTimeout(typeChar, 200)
  }

  return (
    <div
      className="glass-card overflow-hidden w-full max-w-2xl"
      style={{ fontFamily: 'var(--font-geist-mono)' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--bg-border)' }}>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--red)' }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--amber)' }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--green)' }} />
        <span className="ml-3 text-xs" style={{ color: 'var(--text-muted)' }}>terminal</span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="p-4 h-80 overflow-y-auto text-sm leading-relaxed"
        style={{ backgroundColor: 'var(--bg-base)' }}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1" style={{ whiteSpace: 'pre-wrap' }}>
            {line.type === 'input' ? (
              <span style={{ color: 'var(--accent)' }}>{line.content}</span>
            ) : (
              <span style={{ color: 'var(--text-secondary)' }}>{line.content}</span>
            )}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span style={{ color: 'var(--accent)' }}>$ </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm ml-1"
            style={{ color: 'var(--text-primary)', caretColor: 'var(--accent)' }}
            disabled={isTyping}
            autoComplete="off"
            spellCheck={false}
          />
          <span className="cursor-blink" style={{ color: 'var(--accent)' }}>▌</span>
        </form>
      </div>
    </div>
  )
}

export default function Interactive() {
  return (
    <section id="interactive" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-32 px-6 md:px-16 w-full">
        <div className="section-number">07</div>

        <motion.div
          className="max-w-6xl mx-auto w-full flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="mono block mb-4">05 / playground</span>
            <h2 className="heading-xl mb-4">Interactive Terminal</h2>
            <p className="body-lg max-w-lg mx-auto">
              Try typing a command below. Start with <span className="mono" style={{ color: 'var(--accent)' }}>help</span>
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full flex justify-center">
            <TerminalEmulator />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
