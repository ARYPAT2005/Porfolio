import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { FileText, Folder, Footprints, Home, Mail, User, Wrench } from "lucide-react"
import { ModeToggle } from "../components/ui/mode-toggle"
import { profile } from "../data/resume"

const TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "experience", label: "Experience", icon: Footprints },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
]

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  // While a nav click is smooth-scrolling, keep the clicked tab highlighted instead of
  // flickering through every section the page passes on the way.
  const lockedTab = useRef<string | null>(null)
  const unlockTimer = useRef(0)

  useEffect(() => {
    const updateActiveTab = () => {
      const probe = window.scrollY + window.innerHeight / 3
      let current = TABS[0].id
      for (const tab of TABS) {
        const section = document.getElementById(tab.id)
        if (section && section.offsetTop <= probe) current = tab.id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      setActiveTab(atBottom ? TABS[TABS.length - 1].id : current)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      if (lockedTab.current) {
        // Release the lock once scrolling has been idle for a moment
        window.clearTimeout(unlockTimer.current)
        unlockTimer.current = window.setTimeout(() => {
          lockedTab.current = null
          updateActiveTab()
        }, 150)
        return
      }
      updateActiveTab()
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.clearTimeout(unlockTimer.current)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4">
      <nav
        aria-label="Primary"
        className={`flex items-center gap-0.5 rounded-full border border-line p-1.5 backdrop-blur-md transition-all duration-500 sm:gap-1 ${
          scrolled ? "bg-card/85 shadow-[0_10px_30px_-12px_var(--shadow)]" : "bg-card/55"
        }`}
      >
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id
          return (
            <a
              key={id}
              href={`#${id}`}
              title={label}
              aria-current={isActive ? "true" : undefined}
              onClick={() => {
                lockedTab.current = id
                setActiveTab(id)
              }}
              className={`relative flex items-center gap-2 rounded-full px-2.5 py-2 text-sm font-medium transition-colors sm:px-3 ${
                isActive ? "text-roof-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-roof"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className="relative size-4" />
              <span className="relative hidden lg:inline">{label}</span>
              <span className="sr-only lg:hidden">{label}</span>
            </a>
          )
        })}
        <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          className="relative flex items-center gap-2 rounded-full px-2.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:px-3"
        >
          <FileText className="size-4" />
          <span className="hidden lg:inline">Resume</span>
          <span className="sr-only lg:hidden">Resume</span>
        </a>
        <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
        <ModeToggle />
      </nav>
    </header>
  )
}
