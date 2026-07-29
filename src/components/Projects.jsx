import { FolderOpen, ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      title: 'Shago Food Delivery App',
      description: 'A Swiggy-like food delivery web app with modern UI, menu browsing, and cart functionality.',
      tech: ['React', 'TailwindCSS', 'Redux', 'Vite'],
      demo: 'https://pavivarshini31.github.io/shago-fooddelivery'
    },
    {
      title: 'Netflix Clone',
      description: 'A Netflix-inspired streaming UI with authentication and dynamic movie data using APIs.',
      tech: ['React', 'Firebase', 'API', 'CSS'],
      demo: '#'
    },
    {
      title: 'Weather App',
      description: 'A weather dashboard that shows real-time weather using Open-Meteo API with location search.',
      tech: ['JavaScript', 'API', 'CSS'],
      demo: 'https://pavivarshini31.github.io/weather-app/'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, private messaging, and group chat features.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-black relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-14"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FolderOpen className="text-[#D4AF37] mr-4" size={34} />
          </motion.div>
          <h2 className="text-5xl font-extrabold text-white">
            My <span className="text-[#D4AF37]">Projects</span>
          </h2>
        </motion.div>

        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                y: -10
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37]"
            >
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">
                
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                 <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black transition cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                
                <div className="flex">
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.demo}
                    target="_blank"
                    className="flex items-center text-gray-400 hover:text-[#FFD700] transition"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
