import { User, Zap, Target, Code } from 'lucide-react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 blur-3xl"
      >
        <div className="w-[400px] h-[400px] bg-[#D4AF37]/20 rounded-full absolute top-10 left-10"></div>
        <div className="w-[300px] h-[300px] bg-[#FFD700]/20 rounded-full absolute bottom-10 right-10"></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.2, rotate: 360 }}
          >
            <User className="text-[#D4AF37] mr-4" size={34} />
          </motion.div>
          <h2 className="text-5xl font-extrabold text-white tracking-wide">
            About <motion.span
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
            >Me</motion.span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 0 40px rgba(212, 175, 55, 0.3)"
            }}
            className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37]"
          >
            <motion.div
              animate={{
                backgroundPosition: ['0%', '200%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
                backgroundImage: 'linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)',
              }}
              className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="rounded-3xl p-8 bg-[#0a0a0a]/80 backdrop-blur-xl h-full relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center mb-4"
              >
                <Target className="text-black" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                Who I Am
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm an aspiring software developer who loves crafting elegant digital
                experiences. I enjoy solving complex problems and transforming them
                into simple, beautiful, and user-friendly solutions.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">
            {/* Journey */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              whileHover={{ 
                x: 15,
                scale: 1.02,
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)"
              }}
              className="p-6 rounded-2xl bg-[#111]/70 backdrop-blur-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition relative overflow-hidden"
            >
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -right-4 -top-4 w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-xl"
              />
              <div className="flex items-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <Zap className="text-black" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
                    My Journey
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    I am currently building real-world projects and improving my skills
                    in modern web development. I strongly believe in continuous learning
                    and adapting to new technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              whileHover={{ 
                x: 15,
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.2)"
              }}
              className="p-6 rounded-2xl bg-[#111]/70 backdrop-blur-lg border border-[#D4AF37]/20 hover:border-[#FFD700] transition relative overflow-hidden"
            >
              <motion.div
                animate={{
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -left-4 -bottom-4 w-20 h-20 bg-[#FFD700]/10 rounded-full blur-xl"
              />
              <div className="flex items-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <Code className="text-black" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
                    What I Do
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    I build responsive and dynamic web applications using modern tools.
                    I enjoy working on both front-end UI design and back-end logic to
                    create complete, functional products.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
