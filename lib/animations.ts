import { Variants } from 'framer-motion'

// ─── Premium Easing Functions ──────────────────────────
const easeOutExpo = [0.16, 1, 0.3, 1]
const easeOutCubic = [0.33, 1, 0.68, 1]
const easeOutQuad = [0.25, 0.46, 0.45, 0.94]

// ─── Fast Entrance Animations ──────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.35, ease: easeOutCubic } 
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: easeOutExpo },
  },
}

export const charReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.015,
      duration: 0.3,
      ease: easeOutCubic,
    },
  }),
}

export const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
}

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -8 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
}

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: easeOutCubic },
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.38, ease: [0.36, 1.58, 0.62, 1] },
  },
}

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateY: -80 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

// ─── Micro-Interactions ───────────────────────────────
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.2, ease: 'easeOut' } },
  tap: { scale: 0.96, transition: { duration: 0.1 } },
}

export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { 
    y: -6, 
    transition: { duration: 0.25, ease: easeOutQuad },
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15)'
  },
}

export const buttonHover: Variants = {
  initial: { scale: 1, opacity: 1 },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  tap: { 
    scale: 0.94,
    transition: { duration: 0.08 }
  },
}

export const pulseGlow: Variants = {
  initial: { opacity: 0.8 },
  animate: {
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const shimmer: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: [0, 0.5, 0],
    x: [0, 400, 0],
    transition: { duration: 2, ease: 'linear', repeat: Infinity },
  },
}

// ─── Exit Animations ──────────────────────────────────
export const fadeOut: Variants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: easeOutCubic },
  },
}

export const slideOutLeft: Variants = {
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3, ease: easeOutExpo },
  },
}

export const slideOutRight: Variants = {
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.3, ease: easeOutExpo },
  },
}
