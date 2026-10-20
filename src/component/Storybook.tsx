import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function LeafDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 20" className={`w-40 text-sprout ${className ?? ""}`} aria-hidden="true">
      <path d="M2 10 H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 6" />
      <path d="M80 2 C 70 8, 71 15, 80 18 C 89 15, 90 8, 80 2 Z" fill="currentColor" />
      <path d="M68 12 C 64 8, 60 8, 58 11 C 61 14, 65 14, 68 12 Z" fill="currentColor" opacity="0.6" />
      <path d="M92 12 C 96 8, 100 8, 102 11 C 99 14, 95 14, 92 12 Z" fill="currentColor" opacity="0.6" />
      <path d="M100 10 H158" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 6" />
    </svg>
  )
}

export function SectionHeading({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="font-hand text-lg text-roof">{kicker}</p>
      <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h2>
      <LeafDivider className="mx-auto mt-4" />
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-ink-soft">{subtitle}</p>}
    </Reveal>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-paper-2 px-3 py-1 text-xs font-medium text-ink-soft">{children}</span>
  )
}

export function LeafBullet() {
  return (
    <svg viewBox="0 0 12 12" className="mt-[0.45em] size-3 shrink-0 text-sprout" aria-hidden="true">
      <path d="M1 11 C 1 5, 5 1, 11 1 C 11 7, 7 11, 1 11 Z" fill="currentColor" />
    </svg>
  )
}
