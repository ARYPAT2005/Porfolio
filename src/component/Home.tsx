import { motion } from "framer-motion"
import { FileText, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Celestial, Cloud, DriftingClouds, Fireflies, Landscape, Leaves, Stars } from "./Scenery"
import { profile } from "../data/resume"

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export const Home = () => {
  return (
    <section className="sky relative flex min-h-[100svh] flex-col overflow-hidden">
      <Stars />
      <Celestial className="absolute right-[7%] top-[13%] size-16 sm:size-24" />
      <DriftingClouds />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pb-[clamp(190px,26vw,360px)] pt-28 md:grid-cols-[1.25fr_0.75fr] md:pt-32">
        <div className="text-center md:text-left">
          <motion.p {...rise(0.1)} className="text-sm font-medium uppercase tracking-[0.22em] text-roof">
            {profile.role}
          </motion.p>
          <motion.h1
            {...rise(0.2)}
            className="text-sky-shadow mt-2 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p {...rise(0.3)} className="mt-4 text-lg font-medium text-ink sm:text-xl">
            {profile.tagline}
          </motion.p>
          <motion.p {...rise(0.4)} className="mx-auto mt-4 max-w-xl leading-relaxed text-ink/80 md:mx-0">
            {profile.intro}
          </motion.p>

          <motion.div {...rise(0.5)} className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-roof px-6 py-3 font-medium text-roof-ink shadow-[0_4px_0_0_rgb(0_0_0/0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_rgb(0_0_0/0.18)] active:translate-y-0.5 active:shadow-none"
            >
              <FileText className="size-4" />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card/80 px-6 py-3 font-medium text-ink shadow-[0_4px_0_0_rgb(0_0_0/0.08)] backdrop-blur transition hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <Mail className="size-4" />
              Say hello
            </a>
            <div className="flex items-center gap-1 pl-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2.5 text-ink/80 transition hover:-translate-y-0.5 hover:bg-card/60 hover:text-ink"
              >
                <FaGithub className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2.5 text-ink/80 transition hover:-translate-y-0.5 hover:bg-card/60 hover:text-ink"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none hidden md:block"
          aria-hidden="true"
        >
          <Cloud variant="tower" className="bob w-full max-w-md opacity-95" />
        </motion.div>
      </div>

      <Leaves />
      <Fireflies className="inset-x-0 bottom-0 h-1/2" />
      <Landscape className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(220px,30vw,420px)] w-full" />
    </section>
  )
}
