import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';

const projects = [
  {
    title: "VIRTUAL_CORE_API",
    category: "BACKEND ARCHITECTURE",
    desc: "A high-performance REST API built for scalable microservices using C# and Supabase.",
    tags: ["C#", "Supabase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000",
  },
  {
    title: "SYSTEM_OPTIMIZER",
    category: "LOW-LEVEL UTILITY",
    desc: "Memory management tool written in C++ to optimize background task processing.",
    tags: ["C++", "Systems", "Optimization"],
    image: "https://images.unsplash.com/photo-1518433278981-1675f2a0bfdf?q=80&w=1000",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[--color-brand-dark] px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
            Build_<span className="text-[--color-brand-teal]">History</span>
          </h2>
          <div className="flex items-center gap-3 mt-4">
             <div className="h-px w-12 bg-[--color-brand-teal]" />
             <p className="text-[--color-brand-cyan] font-mono text-xs uppercase tracking-widest">
               // Loading Finished_Projects...
             </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto space-y-40">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
          >
            {/* PROJECT IMAGE */}
            <div className="w-full lg:w-1/2 group relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 aspect-video shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                
                {/* Scanline Animation */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-full h-[2px] bg-[--color-brand-teal] absolute top-0 animate-[scan_3s_linear_infinite]" />
                </div>

                <div className="absolute top-6 left-6 p-2 bg-[--color-brand-dark]/80 backdrop-blur rounded-lg border border-[--color-brand-teal]/30 text-[--color-brand-teal] flex items-center gap-2">
                   <Zap size={14} className="animate-pulse" />
                   <span className="text-[10px] font-mono font-bold">STABLE_VERSION</span>
                </div>
              </div>
              {/* Back Decor */}
              <div className="absolute -inset-4 border border-[--color-brand-cyan]/5 rounded-[40px] -z-10 group-hover:border-[--color-brand-teal]/20 transition-colors" />
            </div>

            {/* PROJECT INFO */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-[--color-brand-teal] font-mono text-xs font-bold tracking-[0.3em] uppercase block">
                {project.category}
              </span>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-none uppercase">
                {project.title}
              </h3>
              <p className="text-lg text-[--color-brand-medium] leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[--color-brand-cyan] text-xs font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-8 flex gap-8">
                <a href="#" className="flex items-center gap-2 text-white hover:text-[--color-brand-teal] transition-colors font-bold text-xs uppercase tracking-widest">
                  <ExternalLink size={20} /> LIVE_SYSTEM
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};