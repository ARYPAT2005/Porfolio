import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/ui/theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const isDark =
    theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
  const label = isDark ? "Switch to daytime" : "Switch to nighttime"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="relative flex size-9 cursor-pointer items-center justify-center rounded-full text-ink-soft transition hover:bg-paper-2 hover:text-ink"
    >
      <Sun className="size-[1.1rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.1rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
