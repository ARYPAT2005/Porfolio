import { ExternalLink, Github, Play, Trophy } from "lucide-react"
import { projects } from "../data/resume"
import { Cloud } from "./Scenery"
import { LeafBullet, Reveal, SectionHeading, Tag } from "./Storybook"

const TILTS = ["-rotate-[0.8deg]", "rotate-[0.7deg]", "rotate-[0.5deg]", "-rotate-[0.6deg]"]
const TAPES = ["var(--tape)", "color-mix(in srgb, var(--meadow) 55%, transparent)"]

export const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="Chapter 02 · Things I've built" title="Projects" />

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => {
          const links = [
            { href: project.github, label: "Code", icon: Github },
            { href: project.live, label: "Live", icon: ExternalLink },
            { href: project.demo, label: "Demo", icon: Play },
            { href: project.devpost, label: "Devpost", icon: Trophy },
          ].filter((link) => link.href)

          return (
            <Reveal
              key={project.title}
              delay={(index % 2) * 0.1}
              // Center a lone card on the last row
              className={
                index === projects.length - 1 && projects.length % 2 === 1
                  ? "md:col-span-2 md:mx-auto md:w-[calc(50%-1.25rem)]"
                  : undefined
              }
            >
              <article
                className={`paper group relative flex h-full flex-col rounded-[26px] p-4 transition duration-500 hover:-translate-y-1.5 hover:rotate-0 sm:p-5 ${TILTS[index % TILTS.length]}`}
              >
                <span
                  className="tape absolute -top-3 left-1/2 z-10 h-6 w-28 -translate-x-1/2 -rotate-2"
                  style={{ backgroundColor: TAPES[index % TAPES.length] }}
                />
                <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-paper-2">
                  {project.image && !project.logo ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="size-full object-cover object-top saturate-[.85] sepia-[.12] transition duration-700 group-hover:scale-[1.04] group-hover:saturate-100 group-hover:sepia-0"
                    />
                  ) : (
                    <div className="sky relative flex size-full items-center justify-center overflow-hidden transition duration-700 group-hover:scale-[1.04]">
                      <Cloud variant="puff" className="absolute -left-6 top-4 w-2/5 opacity-90" />
                      <Cloud variant="wisp" className="absolute -right-4 bottom-6 w-1/3 opacity-80" />
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} logo`}
                          loading="lazy"
                          className="relative h-3/5 w-auto object-contain drop-shadow-[0_6px_14px_rgb(0_0_0/0.12)]"
                        />
                      ) : (
                        <span className="text-sky-shadow relative font-display text-4xl font-extrabold text-ink">{project.title}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-1 pt-5">
                  <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-1 text-ink-soft">{project.summary}</p>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <LeafBullet />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {links.map(({ href, label, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-roof hover:bg-roof hover:text-roof-ink"
                      >
                        <Icon className="size-4" />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
