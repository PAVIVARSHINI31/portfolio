import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-10"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Mail className="text-[#D4AF37] mr-3" size={34} />
          </motion.div>
          <h2 className="text-5xl font-extrabold text-white">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-14"
        >
          I'm currently looking for opportunities. Feel free to reach out!
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <motion.a
            href="mailto:pavivarshini11@gmail.com"
            whileHover={{ 
              scale: 1.05,
              y: -10
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-[2px] bg-gradient-to-br from-[#D4AF37] to-[#FFD700]"
          >
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="text-[#D4AF37] mx-auto mb-4" size={32} />
              </motion.div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm">pavivarshini11@gmail.com</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/pavivarshini-ravi-089151292"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              y: -10
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-[2px] bg-gradient-to-br from-[#D4AF37] to-[#FFD700]"
          >
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Linkedin className="text-[#D4AF37] mx-auto mb-4" size={32} />
              </motion.div>
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/PAVIVARSHINI31"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              y: -10
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-[2px] bg-gradient-to-br from-[#D4AF37] to-[#FFD700]"
          >
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Github className="text-[#D4AF37] mx-auto mb-4" size={32} />
              </motion.div>
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Check my work</p>
            </div>
          </motion.a>
        </div>

       
      </div>
    </section>
  )
}

export default Contact

