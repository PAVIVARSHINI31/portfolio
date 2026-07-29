import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles, Zap, Star } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

function Hero() {
  // Typing Effect
  const [text, setText] = useState('')
  const fullText = "Software Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  // Parallax Background
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const bgX = useTransform(smoothX, [-500, 500], [-30, 30])
  const bgY = useTransform(smoothY, [-500, 500], [-30, 30])

  const midX = useTransform(smoothX, [-500, 500], [-50, 50])
  const midY = useTransform(smoothY, [-500, 500], [-50, 50])

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  // 3D Tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), {
    stiffness: 150,
    damping: 20
  })

  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), {
    stiffness: 150,
    damping: 20
  })

  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const resetTilt = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden bg-black"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden opacity-15 blur-sm">
        <motion.div style={{ x: bgX, y: bgY }}>
          <div className="absolute top-20 left-10 text-8xl text-[#D4AF37]">⚛️</div>
          <div className="absolute bottom-40 left-20 text-9xl text-[#D4AF37]">🟦</div>
          <div className="absolute top-1/2 left-10 text-5xl text-[#D4AF37]">🟢</div>
        </motion.div>

        <motion.div style={{ x: midX, y: midY }}>
          <div className="absolute top-40 right-20 text-7xl text-[#D4AF37]">🟨</div>
          <div className="absolute bottom-20 right-40 text-8xl text-[#D4AF37]">🟢</div>
          <div className="absolute top-2/3 right-1/4 text-7xl text-[#D4AF37]">🔷</div>
        </motion.div>
      </div>

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="text-[#D4AF37] mr-3" size={32} />
            </motion.div>
            <motion.span
              className="text-[#D4AF37] font-bold text-xl"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% auto',
                backgroundImage: 'linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {text}<span className="animate-pulse">|</span>
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            Hi, I'm a <br />
            <motion.span
              className="text-[#D4AF37]"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% auto',
                backgroundImage: 'linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Developer
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-400 mb-10"
          >
            Passionate about building beautiful, functional applications ✨
          </motion.p>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex space-x-6 mb-10"
          >
            {[
              { icon: Github, href: "https://github.com/PAVIVARSHINI31" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/pavivarshini-ravi-089151292" },
              { icon: Mail, href: "mailto:pavivarshini11@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="p-4 bg-[#111] rounded-xl text-[#D4AF37] hover:bg-[#1a1a1a] transition border border-[#D4AF37]/20 hover:border-[#D4AF37]"
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-black font-bold rounded-full transition border-2 border-[#D4AF37]"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="mr-2" />
            </motion.div>
            Get In Touch
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000
          }}
          className="flex justify-center relative"
        >
          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full p-3 shadow-2xl z-10"
          >
            <Zap className="text-black" size={24} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-full p-3 shadow-2xl z-10"
          >
            <Star className="text-black" size={24} />
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/40 to-[#FFD700]/40 rounded-3xl blur-3xl"
          />

          <div className="p-[3px] rounded-3xl bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] relative">
            <motion.div
              animate={{
                backgroundPosition: ['0%', '200%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
                backgroundImage: 'linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)',
              }}
              className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
            <img
             <img src="/portfolio/profile.jpg" />
              alt="profile"
              className="relative rounded-3xl w-[280px] h-[360px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 mb-2"
        >
          Scroll Down
        </motion.p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
