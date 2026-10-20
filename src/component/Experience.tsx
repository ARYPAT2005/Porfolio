import { BookOpen, Code2, FlaskConical, MapPin } from "lucide-react"
import { experiences } from "../data/resume"
import { LeafBullet, Reveal, SectionHeading, Tag } from "./Storybook"

const ICONS: Record<string, typeof Code2> = {
  Research: FlaskConical,
  "Part-time": BookOpen,
  Internship: Code2,
}

export const Experience = () => {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading kicker="Chapter 03 · The path so far" title="Experience" />

      <ol className="relative">
        <span
          className="absolute bottom-6 left-[21px] top-6 border-l-2 border-dashed border-sprout/50"
          aria-hidden="true"
        />
        {experiences.map((exp, index) => {
          const Icon = ICONS[exp.type] ?? Code2
          return (
            <li key={`${exp.company}-${exp.title}`} className="relative grid grid-cols-[44px_1fr] gap-4 pb-10 last:pb-0 sm:gap-6">
              <Reveal delay={0.05}>
                <div className="relative z-10 mt-6 flex size-11 items-center justify-center rounded-full border-2 border-sprout bg-card text-sprout shadow-sm">
                  <Icon className="size-5" />
                </div>
              </Reveal>

              <Reveal delay={0.1 + index * 0.02} className="paper rounded-3xl p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{exp.title}</h3>
                    <p className="mt-0.5 font-medium text-roof">{exp.company}</p>
                  </div>
                  <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1 sm:flex-col sm:items-end">
                    <span className="font-hand text-ink">{exp.period}</span>
                    <span className="flex items-center gap-1 text-sm text-ink-soft">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </span>
                    <span className="stamp mt-1 px-2 py-0.5 text-[11px] text-sprout">{exp.type}</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 leading-relaxed text-ink-soft">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <LeafBullet />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
