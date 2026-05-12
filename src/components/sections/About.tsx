// src/components/sections/About.tsx
import { motion } from 'framer-motion';

const timeline = [
  { year: '2021', title: 'The Start', desc: 'Started Computer Science journey at University.' },
  { year: '2023', title: 'Backend Focus', desc: 'Specialized in Node.js, Python, and SQL databases.' },
  { year: '2024', title: '4th Year', desc: 'Currently engineering complex architectural solutions.' },
  { year: '2025', title: 'Present', desc: 'Open for Backend Developer roles.' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[--color-brand-dark] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter italic uppercase">
            Story_<span className="text-[--color-brand-teal]">Archive</span>
          </h2>
          <div className="h-1 w-20 bg-[--color-brand-cyan]" />
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-px h-full timeline-gradient opacity-30" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[--color-brand-teal]/50 transition-colors group`}>
                    <span className="text-[--color-brand-teal] font-mono text-sm font-bold">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[--color-brand-cyan] transition-colors">{item.title}</h3>
                    <p className="text-[--color-brand-medium] mt-2 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[--color-brand-dark] border-2 border-[--color-brand-teal] rounded-full z-10 shadow-[0_0_10px_rgba(93,248,216,0.5)]" />

                {/* Empty side for layout */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};