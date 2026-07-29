import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(true) // default ON for premium look

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-black text-white transition-all duration-500 relative overflow-x-hidden">

        {/* ✨ Global Background Glow */}
        <div className="fixed inset-0 -z-10 opacity-20 blur-3xl">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D4AF37] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFD700] rounded-full"></div>
        </div>

        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="bg-black border-t border-[#D4AF37]/20 py-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 <span className="text-[#D4AF37] font-semibold">PAVIVARSHINI</span>. 
           
          </p>
        </footer>

      </div>
    </div>
  )
}

export default App