import type { ComponentType, CSSProperties } from "react"
import { FaJava } from "react-icons/fa"
import {
  SiAmazoncognito,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiC,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRust,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si"
import { Bot, BrainCircuit, Cloud, Code2, FileSearch, Sprout, Workflow } from "lucide-react"
import { skillGroups } from "../data/resume"
import { Reveal, SectionHeading } from "./Storybook"

// Brand colors appear on hover; skills without a distinct color stay in ink.
type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>

const SKILL_ICONS: Record<string, { icon: SkillIcon; color?: string }> = {
  Python: { icon: SiPython, color: "#3776AB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#E0B800" },
  Java: { icon: FaJava, color: "#E76F00" },
  C: { icon: SiC, color: "#5C6BC0" },
  Rust: { icon: SiRust, color: "#B7410E" },
  "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
  React: { icon: SiReact, color: "#149ECA" },
  "Next.js": { icon: SiNextdotjs },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress },
  Django: { icon: SiDjango, color: "#2BA977" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Storybook: { icon: SiStorybook, color: "#FF4785" },
  Jest: { icon: SiJest, color: "#C21325" },
  Git: { icon: SiGit, color: "#F05032" },
  "CI/CD": { icon: Workflow, color: "#2088FF" },
  Jira: { icon: SiJira, color: "#0052CC" },
  "RAG Pipelines": { icon: FileSearch, color: "#C4553C" },
  "Multi-Agent Systems": { icon: Bot, color: "#7C5CBF" },
  "Reinforcement Learning": { icon: BrainCircuit, color: "#D9468F" },
  "AWS EC2": { icon: SiAmazonec2, color: "#FF9900" },
  "AWS Lambda": { icon: SiAwslambda, color: "#FF9900" },
  "AWS S3": { icon: SiAmazons3, color: "#569A31" },
  DynamoDB: { icon: SiAmazondynamodb, color: "#4053D6" },
  Cognito: { icon: SiAmazoncognito, color: "#DD344C" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
}

const GROUP_ICONS: Record<string, typeof Code2> = {
  Languages: Code2,
  "AI & Machine Learning": BrainCircuit,
  "Frameworks & Tools": Sprout,
  "Cloud & Databases": Cloud,
}

export const Skills = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="Chapter 04 · Tools in my satchel" title="Skills" />

      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const GroupIcon = GROUP_ICONS[group.label] ?? Code2
          return (
            <Reveal key={group.label} delay={index * 0.1} className="paper rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-sprout/15 text-sprout">
                  <GroupIcon className="size-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">{group.label}</h3>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  const entry = SKILL_ICONS[skill]
                  const Icon = entry?.icon
                  return (
                    <li
                      key={skill}
                      className="group flex items-center gap-2 rounded-full border border-line bg-paper-2 px-3.5 py-2 text-sm font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-sprout/60 hover:bg-card"
                    >
                      {Icon && (
                        <Icon
                          className="size-4 text-ink-soft transition-colors duration-300 group-hover:text-[var(--brand)]"
                          style={{ "--brand": entry.color ?? "var(--ink)" } as CSSProperties}
                        />
                      )}
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
