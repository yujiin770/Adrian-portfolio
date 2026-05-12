// src/components/sections/TechStack.tsx
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Globe, Terminal, Layers } from 'lucide-react';

const technologies = [
  { name: 'C++', icon: <Cpu />, level: 'High Performance', category: 'Systems' },
  { name: 'C#', icon: <Code />, level: 'Enterprise Logic', category: 'Applications' },
  { name: 'Visual Basic', icon: <Terminal />, level: 'Legacy Systems', category: 'Classic' },
  { name: 'JavaScript', icon: <Globe />, level: 'Interactive Web', category: 'Web' },
  { name: 'Supabase', icon: <Database />, level: 'Backend as a Service', category: 'Cloud' },
  { name: 'HTML & CSS', icon: <Layers />, level: 'Interface Structure', category: 'Web' },
];

export const TechStack = () => {
  return (
    <section id="stack" className="py-24 bg-[--color-brand-dark] px-6 relative overflow-hidden">
      
      {/* FIXED BACKGROUND TEXT: Moved to right, turned into an outline, lowered opacity */}
      <div className="absolute top-20 -right-20 text-[--color-brand-medium]/10 text-[10rem] font-black select-none pointer-events-none hidden lg:block leading-none uppercase italic opacity-20"
           style={{ WebkitTextStroke: '1px var(--color-brand-medium)', color: 'transparent' }}>
        LIBRARIES
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER SECTION: Added z-10 to ensure it stays on top */}
        <div className="flex flex-col mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
              Tech_<span className="text-[--color-brand-teal]">Capabilities</span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
               <div className="h-px w-12 bg-[--color-brand-teal]" />
               <p className="text-[--color-brand-cyan] font-mono text-xs uppercase tracking-widest">
                 {">"} Analyzing skill_set.dll ... 100% Loaded
               </p>
            </div>
          </motion.div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[--color-brand-teal]/50 transition-all duration-300"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-[--color-brand-teal]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-[--color-brand-dark] text-[--color-brand-teal] border border-[--color-brand-teal]/20 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <span className="text-[--color-brand-medium] text-[10px] font-mono tracking-widest uppercase">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-[--color-brand-medium] mb-8">{tech.level}</p>

                {/* Status Bar */}
                <div className="mt-auto flex items-center gap-4">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-[--color-brand-teal]"
                        />
                    </div>
                    <span className="text-[10px] font-mono text-[--color-brand-teal]">READY</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STATS */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 py-10 border-t border-white/5 relative z-10">
            {[
                { label: 'YEARS OF PROGRAMMING', val: '03+' },
                { label: 'LANGUAGES MASTERED', val: '07+' },
                { label: 'BACKEND FOCUS', val: '100%' }
            ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                    <span className="text-4xl font-black text-white">{stat.val}</span>
                    <span className="text-[10px] text-[--color-brand-teal] font-mono tracking-[0.2em]">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};