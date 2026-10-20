import { GraduationCap, MapPin } from "lucide-react"
import { education, profile } from "../data/resume"
import { Reveal, SectionHeading, Tag } from "./Storybook"

export const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="Chapter 01 · Who I am" title="About" />

      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="paper relative rounded-3xl p-7 sm:p-9">
          <span className="tape absolute -top-3 left-8 h-6 w-24 -rotate-3" />
          <div className="space-y-4 leading-relaxed text-ink-soft">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <p className="font-hand mt-6 text-lg text-roof">~ Aryan</p>
        </Reveal>

        <Reveal delay={0.1} className="paper relative flex overflow-hidden rounded-3xl">
          <div className="flex-1 p-7 sm:p-9">
            <div className="flex items-center gap-2 text-sm font-medium text-roof">
              <GraduationCap className="size-4" />
              <span className="font-hand text-base">Education · one ticket to {education.graduation}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">{education.school}</h3>
            <p className="mt-1 text-ink-soft">{education.degree}</p>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <dt className="font-hand text-ink-soft">GPA</dt>
                <dd className="font-display text-xl font-bold text-ink">{education.gpa}</dd>
              </div>
              <div>
                <dt className="font-hand text-ink-soft">Graduation</dt>
                <dd className="font-display text-xl font-bold text-ink">{education.graduation}</dd>
              </div>
              <div className="col-span-2">
                <dt className="font-hand text-ink-soft">Concentrations</dt>
                <dd className="font-medium text-ink">{education.concentrations.join(" · ")}</dd>
              </div>
              <div className="col-span-2">
                <dt className="font-hand text-ink-soft">Honors</dt>
                <dd className="font-medium text-ink">{education.honors.join(" · ")}</dd>
              </div>
            </dl>

            <p className="font-hand mt-6 text-sm text-ink-soft">Coursework</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <Tag key={course}>{course}</Tag>
              ))}
            </div>
          </div>

          <div className="ticket-stub hidden w-28 shrink-0 flex-col items-center justify-center gap-2 bg-paper-2/60 sm:flex">
            <span className="font-display text-3xl font-extrabold tracking-widest text-ink [writing-mode:vertical-rl]">ATL</span>
            <MapPin className="size-4 text-roof" />
            <span className="font-hand text-xs text-ink-soft">{education.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
