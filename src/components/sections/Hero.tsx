import { motion, useMotionValue, useTransform, useScroll, useSpring } from 'framer-motion';
import { Terminal, ArrowRight, Activity, Zap, Shield, Code2, ChevronDown, Cpu, Database } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Parallax values
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  const terminalLines = [
    ">_ system.check_status()",
    ">_ Status: ACTIVE // Adrian_Angeles.sys",
    ">_ backend_engineer.ready = true",
    ">_ $ waiting for connections..."
  ];

  // Typing animation
  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      const currentLine = terminalLines[lineIndex];
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setTypedText(prev => prev + currentLine[charIndex]);
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedText(prev => prev + '\n');
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Floating icons
  const floatingIcons = [
    { Icon: Cpu, x: '5%', y: '15%', delay: 0, size: 32 },
    { Icon: Database, x: '90%', y: '20%', delay: 1, size: 36 },
    { Icon: Shield, x: '85%', y: '75%', delay: 2, size: 28 },
    { Icon: Zap, x: '8%', y: '80%', delay: 1.5, size: 30 },
    { Icon: Code2, x: '12%', y: '45%', delay: 0.5, size: 34 },
    { Icon: Activity, x: '88%', y: '50%', delay: 2.5, size: 32 },
  ];

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[--color-brand-dark] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background orbs with parallax */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[--color-brand-teal]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[--color-brand-cyan]/5 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-[--color-brand-medium]/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </motion.div>

      {/* Grid pattern with parallax */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          backgroundImage: `linear-gradient(to right, #5DF8D8 1px, transparent 1px),
                            linear-gradient(to bottom, #5DF8D8 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
      />

      {/* Floating tech icons with animation */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay, duration: 0.8 }}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: idx * 0.5, ease: "easeInOut" }}
          >
            <Icon size={size} strokeWidth={1.5} className="text-[--color-brand-teal]/25" />
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* LEFT COLUMN - MAIN CONTENT with scroll animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ opacity: parallaxOpacity }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[--color-brand-teal] animate-pulse" />
              <span className="text-[8px] sm:text-[10px] font-mono text-[--color-brand-teal] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold whitespace-nowrap">
                SYSTEM ONLINE // READY
              </span>
            </motion.div>

            {/* Main Heading - ADRIAN ANGELES fully visible - NO GRADIENT */}
            <motion.div
              style={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="space-y-1 sm:space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter">
                <span className="text-white">ADRIAN</span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative inline-block mt-1 sm:mt-2"
                >
                  <span className="text-[--color-brand-teal]">
                    ANGELES
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute -bottom-2 sm:-bottom-3 left-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-[--color-brand-teal] to-transparent"
                  />
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-[--color-brand-medium] max-w-md leading-relaxed"
            >
              Architecting robust backend systems,{' '}
              <span className="text-[--color-brand-cyan] font-medium">high-performance APIs</span>,
              {' '}and fault-tolerant server logic.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[--color-brand-teal] text-[--color-brand-dark] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-xl flex items-center gap-2 overflow-hidden text-[10px] sm:text-xs md:text-sm"
              >
                <span className="relative z-10">Initiate Contact</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 sm:px-7 py-2.5 sm:py-3.5 border-2 border-[--color-brand-teal]/40 text-[--color-brand-teal] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-xl flex items-center gap-2 hover:bg-[--color-brand-teal]/10 transition-all text-[10px] sm:text-xs md:text-sm"
              >
                <Code2 size={14} className="sm:w-4 sm:h-4" />
                <span>View Projects</span>
              </motion.a>
            </motion.div>

            {/* Interactive Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7 }}
              className="mt-8 sm:mt-10 group"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[--color-brand-teal]/20 to-[--color-brand-cyan]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-1.5 sm:gap-2 pb-2 mb-2 border-b border-white/10">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500/70" />
                    <span className="text-[8px] sm:text-[9px] text-[--color-brand-medium] ml-2">adrian@portfolio:~</span>
                  </div>

                  {/* Typing Content */}
                  <div className="space-y-0.5 sm:space-y-1 min-h-[80px] sm:min-h-[100px]">
                    {terminalLines.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                        {idx === lineIndex && idx === terminalLines.length - 1 ? (
                          <>
                            <span className="text-[--color-brand-teal] select-none text-[10px] sm:text-xs">{'>'}</span>
                            <span className="text-white/60 text-[10px] sm:text-xs break-all">
                              {typedText.split('\n').pop()}
                              {showCursor && <span className="w-1 h-3 sm:w-1.5 sm:h-3.5 bg-[--color-brand-teal] inline-block ml-0.5 animate-pulse" />}
                            </span>
                          </>
                        ) : idx < lineIndex ? (
                          <>
                            <span className="text-[--color-brand-teal] select-none text-[10px] sm:text-xs">{'>'}</span>
                            <span className="text-white/40 text-[10px] sm:text-xs break-all">{line}</span>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {/* Input Line */}
                  <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-white/5 flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[--color-brand-teal] text-[8px] sm:text-[10px]">$</span>
                    <span className="text-white/40 text-[8px] sm:text-[10px] italic">await system.interaction()</span>
                    <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-[--color-brand-teal]/50 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - IMAGE with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              y: parallaxY,
              scale: imageScale,
              opacity: imageOpacity
            }}
            className="lg:col-span-5"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&h=1200"
                    alt="Adrian Angeles - Backend Developer"
                    className="w-full h-full object-cover object-center grayscale-[30%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  />

                  {/* Animated Scan Lines */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[--color-brand-teal] to-transparent"
                    />
                    <motion.div
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
                      className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[--color-brand-cyan] to-transparent"
                    />
                  </div>

                  {/* Corner Decor */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 border-[--color-brand-teal]/50 rounded-tl-lg sm:rounded-tl-xl" />
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 border-[--color-brand-teal]/50 rounded-br-lg sm:rounded-br-xl" />

                  {/* Floating Badges */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6 }}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-1.5 sm:gap-2"
                  >
                    <div className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-[--color-brand-teal]/30 text-[--color-brand-teal] text-[8px] sm:text-[9px] font-mono font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                      <Zap size={8} className="fill-[--color-brand-teal] sm:w-2.5 sm:h-2.5" />
                      BACKEND_READY
                    </div>
                    <div className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-[--color-brand-cyan]/30 text-[--color-brand-cyan] text-[8px] sm:text-[9px] font-mono flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                      <Shield size={8} className="sm:w-2.5 sm:h-2.5" />
                      SECURE_API
                    </div>
                  </motion.div>

                  {/* Bottom Metadata */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-end gap-2">
                    <div className="bg-black/50 backdrop-blur-sm px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg border border-white/10 flex-1">
                      <p className="text-[6px] sm:text-[7px] font-mono text-white/40 uppercase tracking-wider">System Status</p>
                      <p className="text-[7px] sm:text-[9px] font-mono text-[--color-brand-teal] font-bold">_ operational</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg border border-white/10 flex-1">
                      <p className="text-[6px] sm:text-[7px] font-mono text-white/40 uppercase tracking-wider">Uptime</p>
                      <p className="text-[7px] sm:text-[9px] font-mono text-[--color-brand-cyan]">99.97%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-5 sm:-top-6 -right-5 sm:-right-6 w-20 sm:w-24 h-20 sm:h-24 pointer-events-none"
              >
                <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[--color-brand-teal]/20 blur-md" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-5 sm:-bottom-6 -left-5 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none"
              >
                <div className="absolute bottom-0 left-0 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-[--color-brand-cyan]/20 blur-xl" />
              </motion.div>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5"
            >
              {['C++', 'C#', 'Node.js', 'Supabase', 'PostgreSQL'].map((tech, idx) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[8px] sm:text-[9px] font-mono text-white/50 hover:text-[--color-brand-teal] hover:border-[--color-brand-teal]/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer group z-20"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[7px] sm:text-[8px] font-mono text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] group-hover:text-[--color-brand-teal] transition-colors whitespace-nowrap">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={14} className="text-[--color-brand-teal]/60 group-hover:text-[--color-brand-teal] transition-colors sm:w-4 sm:h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};