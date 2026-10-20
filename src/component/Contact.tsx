import { FileText, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { profile } from "../data/resume"
import { Fireflies, FooterHills } from "./Scenery"
import { Reveal, SectionHeading } from "./Storybook"

export const Contact = () => {
  const links = [
    { name: "GitHub", icon: FaGithub, url: profile.github },
    { name: "LinkedIn", icon: FaLinkedin, url: profile.linkedin },
    { name: "Resume", icon: FileText, url: profile.resumeUrl },
  ]

  return (
    <section className="relative overflow-hidden pt-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Chapter 05 · Until next time" title="Contact" />

        <Reveal className="paper relative mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12">
          <span className="tape absolute -top-3 left-1/2 h-6 w-28 -translate-x-1/2 rotate-2" />
          <svg viewBox="0 0 64 44" className="mx-auto w-16 text-roof" aria-hidden="true">
            <rect x="2" y="2" width="60" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M4 6 L32 26 L60 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="32" cy="27" r="5" fill="currentColor" />
          </svg>
          <h3 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">Contact Me</h3>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
            Feel free to reach out about internships, projects, or anything else.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-roof px-7 py-3 font-medium text-roof-ink shadow-[0_4px_0_0_rgb(0_0_0/0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_rgb(0_0_0/0.18)] active:translate-y-0.5 active:shadow-none"
          >
            <Mail className="size-4" />
            {profile.email}
          </a>

          <div className="mt-8 flex justify-center gap-3">
            {links.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-line bg-paper-2 text-ink transition group-hover:-translate-y-1 group-hover:border-sprout group-hover:text-sprout">
                  <Icon className="size-5" />
                </span>
                <span className="font-hand text-sm text-ink-soft">{name}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative mt-20">
        <Fireflies count={14} className="inset-x-0 -top-10 h-40" />
        <FooterHills className="block h-28 w-full sm:h-40" />
        <footer className="bg-forest px-5 pb-8 pt-2 text-center text-sm text-[#f2ebd7]/80">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </section>
  )
}
