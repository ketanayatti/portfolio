'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { SOCIAL } from '@/lib/constants'
import { Code2, Briefcase, Mail } from 'lucide-react'

const PROFILES = [
  { name: 'GitHub', url: SOCIAL.github, icon: Code2, description: 'Code & projects' },
  { name: 'LinkedIn', url: SOCIAL.linkedin, icon: Briefcase, description: 'Professional' },
  { name: 'Email', url: `mailto:${SOCIAL.email}`, icon: Mail, description: 'Get in touch' },
]

export default function Connect() {
  return (
    <section id="connect" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-32 px-6 md:px-16 w-full">
        <div className="section-number">08</div>

        {/* Background gradient blob */}
        <div className="gradient-blob" style={{ background: 'var(--accent)', left: '20%', top: '30%' }} />
        <div className="gradient-blob" style={{ background: 'var(--accent)', right: '20%', bottom: '30%', animationDelay: '-6s' }} />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto w-full"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="mono block mb-4">06 / connect</span>
            <h2 className="heading-xl mb-4">Let&apos;s Connect</h2>
            <p className="body-lg max-w-lg mx-auto">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PROFILES.map((profile) => {
              const Icon = profile.icon
              const isEmail = profile.name === 'Email'
              return (
                <motion.a
                  key={profile.name}
                  href={profile.url}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="glass-card p-4 flex flex-col items-center gap-3 text-center group"
                  whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                  data-cursor="link"
                >
                  <Icon size={24} style={{ color: 'var(--text-muted)' }} className="group-hover:text-[--accent] transition-colors" />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{profile.name}</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{profile.description}</span>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
