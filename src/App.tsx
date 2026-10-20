import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Navbar } from "./component/navbar.tsx"
import { Home } from "./component/Home.tsx"
import { About } from "./component/About.tsx"
import { Projects } from "./component/Projects.tsx"
import { Experience } from "./component/Experience.tsx"
import { Skills } from "./component/Skills.tsx"
import { Contact } from "./component/Contact.tsx"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen w-full overflow-x-clip text-ink">
          <Navbar />
          <main>
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </main>
        </div>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
