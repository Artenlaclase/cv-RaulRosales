import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experiences"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Box from "@mui/material/Box"

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </Box>
  )
}

