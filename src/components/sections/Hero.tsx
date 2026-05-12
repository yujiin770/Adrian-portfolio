import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Activity } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[--color-brand-dark] pt-20 px-6 lg:px-12 overflow-hidden">
      
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0 border-l border-white/10">
        
        {/* COLUMN 1: SYSTEM SIDEBAR (STATUS) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col justify-between py-10 border-r border-white/10 px-4">
          <div className="rotate-180 [writing-mode:vertical-lr] text-[--color-brand-medium] font-mono text-xs tracking-widest uppercase">
            System.Status.Active
          </div>
          <div className="flex flex-col gap-6 items-center text-[--color-brand-teal]">
            <Activity size={18} className="animate-pulse" />
            <div className="h-24 w-px bg-gradient-to-b from-[--color-brand-teal] to-transparent" />
          </div>
        </div>

        {/* COLUMN 2: MAIN CONTENT */}
        <div className="lg:col-span-7 py-10 lg:pl-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[--color-brand-cyan] text-sm tracking-tighter mb-4 block">
              // 04_YEAR_IT_STUDENT
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] mb-8 select-none">
              ADRIAN <br />
              <span className="text-transparent border-t-2 border-b-2 border-[--color-brand-teal] py-2">
                ANGELES
              </span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <p className="text-lg text-[--color-brand-medium] max-w-sm font-medium leading-tight">
                Architecting robust backend systems and high-performance server logic.
              </p>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[--color-brand-teal] flex items-center justify-center text-[--color-brand-dark]">
                  <ArrowRight size={24} />
                </div>
                <span className="text-white font-bold tracking-widest text-sm uppercase group-hover:text-[--color-brand-teal] transition-colors">
                  Enter System
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* TERMINAL FOOTER */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-4 bg-white/5 border border-white/10 rounded-lg max-w-xl flex items-center gap-4"
          >
            <Terminal size={16} className="text-[--color-brand-teal]" />
            <code className="text-xs text-[--color-brand-cyan]/60 font-mono">
              $ npx create-impact@latest --with-backend-expertise
            </code>
          </motion.div>
        </div>

        {/* COLUMN 3: THE IMAGE "SCAN" */}
        <div className="lg:col-span-4 relative group mt-12 lg:mt-0">
          <motion.div 
             initial={{ scaleY: 0 }}
             animate={{ scaleY: 1 }}
             transition={{ duration: 1, ease: "circOut" }}
             className="relative h-[500px] lg:h-full w-full bg-[--color-brand-medium]/10 origin-bottom overflow-hidden border-l border-white/10"
          >
            {/* The Image */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
              alt="Adrian" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            
            {/* Vertical Overlay Scanners */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-[1px] bg-[--color-brand-teal]/50 absolute top-1/4 animate-[scan_4s_linear_infinite]" />
                <div className="w-full h-[1px] bg-[--color-brand-cyan]/30 absolute top-2/4 animate-[scan_6s_linear_infinite]" />
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-4 right-4 text-[--color-brand-teal] font-mono text-[10px] text-right">
                IMG_SOURCE: ADRIAN_PHOTO<br />
                RES: 4000X6000<br />
                LOC: MANILA, PH
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};