import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ExternalLink, 
  Zap, 
  Star, 
  GitFork,
  Eye,
  Server,
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Infinite Carousel Component
const InfiniteTechCarousel = () => {
  const technologies = [
    { name: 'C++', color: '#00599C' },
    { name: 'C#', color: '#239120' },
    { name: 'Node.js', color: '#339933' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Redis', color: '#FF4438' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Python', color: '#3776AB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Supabase', color: '#3ECF8E' },
    { name: '.NET 8', color: '#5C2D91' },
  ];

  // Triple the array for seamless looping
  const tripledTech = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient fade effects on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[--color-brand-dark] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[--color-brand-dark] to-transparent z-10 pointer-events-none" />
      
      {/* Infinite Scrolling Container */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex gap-4 w-max"
      >
        {tripledTech.map((tech, idx) => (
          <motion.div
            key={`${tech.name}-${idx}`}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border hover:shadow-lg transition-all duration-300 cursor-default"
            style={{
              borderColor: `${tech.color}40`,
              boxShadow: `0 0 10px ${tech.color}20`
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: tech.color }}
            />
            <span 
              className="text-xs font-mono font-medium"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "VIRTUAL_CORE_API",
      category: "BACKEND ARCHITECTURE",
      categoryColor: "#3ECF8E",
      desc: "A high-performance REST API built for scalable microservices with advanced authentication, rate limiting, and real-time monitoring.",
      longDesc: "Engineered a production-grade REST API handling 10k+ concurrent requests with sub-50ms response times. Implements JWT authentication, Redis caching, and comprehensive logging.",
      tags: ["C#", ".NET 8", "Supabase", "PostgreSQL", "Redis"],
      tagColors: ["#239120", "#5C2D91", "#3ECF8E", "#4169E1", "#FF4438"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000",
      stats: { stars: 128, forks: 34, views: 1024 },
      features: ["JWT Auth", "Rate Limiting", "Swagger Docs", "Docker Support"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SYSTEM_OPTIMIZER",
      category: "LOW-LEVEL UTILITY",
      categoryColor: "#00599C",
      desc: "Memory management tool written in C++ to optimize background task processing and reduce latency by 40%.",
      longDesc: "Developed a multithreaded memory optimizer that reduced application memory footprint by 40% and improved execution speed by 25%. Includes real-time monitoring dashboard.",
      tags: ["C++", "Systems", "Optimization", "Multithreading"],
      tagColors: ["#00599C", "#945db6", "#E44D26", "#339933"],
      image: "https://images.unsplash.com/photo-1518433278981-1675f2a0bfdf?q=80&w=1000",
      stats: { stars: 89, forks: 23, views: 756 },
      features: ["Memory Pooling", "Thread Safety", "Real-time Metrics", "CLI Interface"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "REALTIME_CHAT_ENGINE",
      category: "WEBSOCKET SERVICE",
      categoryColor: "#F7DF1E",
      desc: "Scalable WebSocket-based chat service supporting 5k+ concurrent connections with message persistence.",
      longDesc: "Built a real-time chat engine using Node.js and Socket.io with message queuing, user presence tracking, and end-to-end encryption.",
      tags: ["Node.js", "Socket.io", "Redis", "MongoDB", "JWT"],
      tagColors: ["#339933", "#FF4438", "#FF4438", "#47A248", "#5C2D91"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000",
      stats: { stars: 215, forks: 56, views: 2456 },
      features: ["Real-time Sync", "Message History", "User Presence", "Encryption"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 sm:py-32 bg-[--color-brand-dark] px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-[--color-brand-teal]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-8%] w-[600px] h-[600px] bg-[--color-brand-cyan]/5 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[30%] w-[300px] h-[300px] bg-[--color-brand-medium]/5 rounded-full blur-[80px]" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[15%] right-[10%] text-[--color-brand-teal] text-7xl font-mono">{'</>'}</div>
        <div className="absolute bottom-[20%] left-[5%] text-[--color-brand-cyan] text-6xl font-mono">{'{ }'}</div>
        <div className="absolute top-[60%] right-[20%] text-[--color-brand-medium] text-5xl font-mono">{'()'}</div>
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
            <Rocket size={14} className="text-[--color-brand-teal]" />
            <span className="text-[10px] font-mono text-[--color-brand-teal] tracking-[0.2em] uppercase">Build_History.log</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            Featured_<span className="text-[--color-brand-teal]">Projects</span>
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
            Exploring innovative solutions through code. Each project represents a unique challenge
            and a commitment to excellence in backend engineering.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group`}
            >
              {/* Project Image Container */}
              <motion.div 
                className="w-full lg:w-1/2 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[20%] brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <motion.div
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[--color-brand-teal] to-transparent"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[--color-brand-dark] via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[--color-brand-teal]/60 rounded-tl-xl" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[--color-brand-teal]/60 rounded-br-xl" />

                    <div className="absolute top-4 right-4">
                      <div 
                        className="px-3 py-1.5 rounded-lg backdrop-blur-md text-[10px] font-mono font-bold flex items-center gap-1.5"
                        style={{ 
                          backgroundColor: `${project.categoryColor}20`,
                          color: project.categoryColor,
                          border: `1px solid ${project.categoryColor}40`
                        }}
                      >
                        <Zap size={10} />
                        {project.category}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 flex gap-3">
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <Star size={10} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-[9px] font-mono text-white">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <GitFork size={10} className="text-[--color-brand-cyan]" />
                        <span className="text-[9px] font-mono text-white">{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <Eye size={10} className="text-[--color-brand-teal]" />
                        <span className="text-[9px] font-mono text-white">{project.stats.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 40px ${project.categoryColor}20`,
                    background: `radial-gradient(circle at 30% 40%, ${project.categoryColor}10, transparent 70%)`
                  }}
                />
              </motion.div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2">
                    <div 
                      className="w-8 h-0.5 rounded-full"
                      style={{ backgroundColor: project.categoryColor }}
                    />
                    <span 
                      className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase"
                      style={{ color: project.categoryColor }}
                    >
                      {project.category}
                    </span>
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tighter group-hover:text-[--color-brand-teal] transition-colors"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="text-[--color-brand-medium] text-base leading-relaxed"
                >
                  {project.longDesc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-2 py-2"
                >
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-[--color-brand-teal]" />
                      <span className="text-xs text-white/60 font-mono">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 rounded-lg text-[9px] font-mono font-medium transition-all duration-300 cursor-default"
                      style={{
                        backgroundColor: `${project.tagColors[idx]}20`,
                        color: project.tagColors[idx],
                        border: `1px solid ${project.tagColors[idx]}40`
                      }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4 pt-4"
                >
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-6 py-3 bg-[--color-brand-teal] text-[--color-brand-dark] font-black uppercase tracking-[0.15em] rounded-xl flex items-center gap-2 overflow-hidden text-xs"
                  >
                    <span className="relative z-10">Live Demo</span>
                    <ExternalLink size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border-2 border-[--color-brand-teal]/40 text-[--color-brand-teal] font-black uppercase tracking-[0.15em] rounded-xl flex items-center gap-2 hover:bg-[--color-brand-teal]/10 transition-all text-xs"
                  >
                    <span>Source Code</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[--color-brand-teal]/20 to-[--color-brand-cyan]/20 border border-[--color-brand-teal]/30 text-white font-bold uppercase tracking-wider text-sm group"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* INFINITE SCROLLING TECH CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.9 }}
          className="mt-20"
        >
          {/* Carousel Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Server size={14} className="text-[--color-brand-teal]" />
            <span className="text-[10px] font-mono text-[--color-brand-teal] tracking-[0.2em] uppercase">
              Technologies In My Arsenal
            </span>
            <Server size={14} className="text-[--color-brand-teal]" />
          </div>
          
          {/* The Infinite Carousel */}
          <InfiniteTechCarousel />
          
          {/* Pause hint */}
          <div className="text-center mt-4">
            <span className="text-[8px] font-mono text-white/30 animate-pulse">
              ∞ infinite scroll • 12+ technologies mastered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};