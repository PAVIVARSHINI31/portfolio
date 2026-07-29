import { Code2, Database, Layout, Server } from 'lucide-react'
import { motion } from 'framer-motion'

function Skills() {
  const skillCategories = [
    {
      icon: <Layout size={28} />,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS']
    },
    {
      icon: <Server size={28} />,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs']
    },
    {
      icon: <Database size={28} />,
      title: 'Database',
      skills: ['MongoDB', 'SQL', 'PostgreSQL']
    },
    {
      icon: <Code2 size={28} />,
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Vite', 'Postman']
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-black relative overflow-hidden">
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
        <div className="w-[400px] h-[400px] bg-[#D4AF37]/20 rounded-full absolute top-20 left-10"></div>
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
            <Code2 className="text-[#D4AF37] mr-4" size={34} />
          </motion.div>
          <h2 className="text-5xl font-extrabold text-white tracking-wide">
            My <span className="text-[#D4AF37]">Skills</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37]"
            >
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-[#D4AF37]/20 hover:border-[#D4AF37] transition">
                {/* Icon */}
                <motion.div 
                  className="text-[#D4AF37] mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black transition cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
