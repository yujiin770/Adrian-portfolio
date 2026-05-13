import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Cpu, 
  Globe, 
  Terminal, 
  Layers,
  Server,
  Cloud,
  Shield,
  Zap,
  Box,
  GitBranch,
  Sparkles
} from 'lucide-react';

export const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.2]);

  const technologies = [
    { 
      name: 'C++', 
      icon: <Cpu size={28} />, 
      iconColor: '#00599C',
      bgGradient: 'from-[#00599C]/20 to-[#00599C]/5',
      level: 'High Performance', 
      category: 'Systems',
      description: 'Memory management, multithreading, low-level optimization'
    },
    { 
      name: 'C#', 
      icon: <Code size={28} />, 
      iconColor: '#239120',
      bgGradient: 'from-[#239120]/20 to-[#239120]/5',
      level: 'Enterprise Logic', 
      category: 'Applications',
      description: '.NET Core, ASP.NET, Entity Framework'
    },
    { 
      name: 'Visual Basic', 
      icon: <Terminal size={28} />, 
      iconColor: '#945db6',
      bgGradient: 'from-[#945db6]/20 to-[#945db6]/5',
      level: 'Legacy Systems', 
      category: 'Classic',
      description: 'Desktop applications, automation scripts'
    },
    { 
      name: 'JavaScript', 
      icon: <Globe size={28} />, 
      iconColor: '#F7DF1E',
      bgGradient: 'from-[#F7DF1E]/20 to-[#F7DF1E]/5',
      level: 'Interactive Web', 
      category: 'Web',
      description: 'Node.js, Express, REST APIs'
    },
    { 
      name: 'Supabase', 
      icon: <Database size={28} />, 
      iconColor: '#3ECF8E',
      bgGradient: 'from-[#3ECF8E]/20 to-[#3ECF8E]/5',
      level: 'Backend as a Service', 
      category: 'Cloud',
      description: 'PostgreSQL, real-time subscriptions, auth'
    },
    { 
      name: 'HTML & CSS', 
      icon: <Layers size={28} />, 
      iconColor: '#E44D26',
      bgGradient: 'from-[#E44D26]/20 to-[#E44D26]/5',
      level: 'Interface Structure', 
      category: 'Web',
      description: 'Responsive design, Tailwind, Flexbox/Grid'
    },
    { 
      name: 'Node.js', 
      icon: <Server size={28} />, 
      iconColor: '#339933',
      bgGradient: 'from-[#339933]/20 to-[#339933]/5',
      level: 'Runtime Environment', 
      category: 'Backend',
      description: 'Event-driven architecture, npm packages'
    },
    { 
      name: 'Python', 
      icon: <Box size={28} />, 
      iconColor: '#3776AB',
      bgGradient: 'from-[#3776AB]/20 to-[#3776AB]/5',
      level: 'Versatile Scripting', 
      category: 'Backend',
      description: 'Flask, Django, data processing'
    },
    { 
      name: 'PostgreSQL', 
      icon: <Database size={28} />, 
      iconColor: '#4169E1',
      bgGradient: 'from-[#4169E1]/20 to-[#4169E1]/5',
      level: 'Advanced SQL', 
      category: 'Database',
      description: 'Complex queries, indexing, optimization'
    },
  ];

  const categories = ['All', 'Backend', 'Database', 'Web', 'Systems', 'Cloud'];

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="relative py-24 sm:py-32 bg-[--color-brand-dark] px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[--color-brand-cyan]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-[--color-brand-teal]/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Floating decorative code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[10%] left-[5%] text-[--color-brand-teal] text-6xl font-mono">{'{}'}</div>
        <div className="absolute bottom-[15%] right-[8%] text-[--color-brand-cyan] text-5xl font-mono">{'() =>'}</div>
        <div className="absolute top-[40%] right-[15%] text-[--color-brand-medium] text-4xl font-mono">{'[]'}</div>
        <div className="absolute bottom-[30%] left-[10%] text-[--color-brand-teal] text-3xl font-mono">{'< />'}</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Zap size={14} className="text-[--color-brand-teal]" />
            <span className="text-[10px] font-mono text-[--color-brand-teal] tracking-[0.2em] uppercase">Tech_Stack.sh</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            Tech_<span className="text-[--color-brand-teal]">Capabilities</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-[--color-brand-teal] to-[--color-brand-cyan] mx-auto"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
            className="text-[--color-brand-medium] max-w-2xl mx-auto mt-6 text-sm sm:text-base"
          >
            Equipped with modern technologies and frameworks to build scalable, 
            high-performance backend systems and applications.
          </motion.p>
        </motion.div>

        {/* Tech Grid - 3 columns on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Animated border gradient on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[--color-brand-teal] to-[--color-brand-cyan] rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
              
              <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${tech.bgGradient} bg-white/5 border border-white/10 hover:border-[--color-brand-teal]/40 transition-all duration-300 backdrop-blur-sm`}>
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[8px] font-mono text-white/30 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>

                {/* Icon with color and animation */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="mb-5"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl"
                    style={{ 
                      backgroundColor: `${tech.iconColor}20`,
                      color: tech.iconColor,
                      border: `1px solid ${tech.iconColor}40`
                    }}
                  >
                    {tech.icon}
                  </div>
                </motion.div>

                {/* Tech name with color accent */}
                <h3 
                  className="text-xl font-bold mb-2 transition-colors duration-300"
                  style={{ color: tech.iconColor }}
                >
                  {tech.name}
                </h3>

                {/* Level indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: tech.iconColor }} />
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                    {tech.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[--color-brand-medium] text-sm leading-relaxed mb-4">
                  {tech.description}
                </p>

                {/* Progress bar with custom color */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-mono text-white/40">Proficiency</span>
                    <span className="text-[8px] font-mono" style={{ color: tech.iconColor }}>95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: tech.iconColor }}
                    />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 30px ${tech.iconColor}20`,
                    background: `radial-gradient(circle at 30% 20%, ${tech.iconColor}10, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-6 rounded-3xl bg-gradient-to-r from-[--color-brand-teal]/5 to-[--color-brand-cyan]/5 border border-white/10"
        >
          {[
            { label: 'Languages', value: '8+', icon: <Code size={20} />, color: '#F7DF1E' },
            { label: 'Frameworks', value: '12+', icon: <Box size={20} />, color: '#3ECF8E' },
            { label: 'Databases', value: '5+', icon: <Database size={20} />, color: '#4169E1' },
            { label: 'Years Active', value: '4+', icon: <Sparkles size={20} />, color: '#5DF8D8' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[--color-brand-teal]/30 transition-all"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-xl" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  {stat.icon}
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
              <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <GitBranch size={12} className="text-[--color-brand-teal]" />
            <span className="text-[9px] font-mono text-white/60">const skills = ["C++", "C#", "Node.js", "Python", "SQL"];</span>
            <Shield size={12} className="text-[--color-brand-cyan]" />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};