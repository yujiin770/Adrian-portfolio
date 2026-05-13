import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  User,
  Code2,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Database,
  Activity,
  ArrowRight
} from 'lucide-react';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const timeline = [
    {
      year: '2021',
      title: 'The Beginning',
      desc: 'Started Information Technology journey at University of Santo Tomas.',
      icon: <GraduationCap size={18} />,
      details: 'First lines of code written in C++'
    },
    {
      year: '2022',
      title: 'Backend Explorer',
      desc: 'Discovered passion for server-side architecture and database design.',
      icon: <Database size={18} />,
      details: 'Built first REST API with Node.js'
    },
    {
      year: '2023',
      title: 'Backend Focus',
      desc: 'Specialized in C#, .NET, Python, and advanced SQL optimization.',
      icon: <Code2 size={18} />,
      details: 'Completed 15+ backend projects'
    },
    {
      year: '2024',
      title: '4th Year Architect',
      desc: 'Engineering complex microservices and scalable solutions.',
      icon: <Briefcase size={18} />,
      details: 'Internship at leading tech company'
    },
    {
      year: '2025',
      title: 'Present',
      desc: 'Open for Backend Developer roles and technical collaborations.',
      icon: <Sparkles size={18} />,
      details: 'Available for immediate start'
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed', icon: <Code2 size={20} /> },
    { value: '10k+', label: 'Hours of Code', icon: <Award size={20} /> },
    { value: '99.9%', label: 'Uptime Achievement', icon: <Activity size={20} /> },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 bg-[--color-brand-dark] px-4 sm:px-6 overflow-hidden"
    >
      {/* Background decorative elements with parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[--color-brand-teal]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[--color-brand-cyan]/5 rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with scroll animation */}
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
            <User size={14} className="text-[--color-brand-teal]" />
            <span className="text-[10px] font-mono text-[--color-brand-teal] tracking-[0.2em] uppercase">Whoami.exe</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            About_<span className="text-[--color-brand-teal]">Me</span>
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
            Passionate about building robust, scalable, and efficient backend systems.
            Currently pursuing Information Technology while engineering real-world solutions.
          </motion.p>
        </motion.div>

        {/* Stats Grid with 3D cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[--color-brand-teal] to-[--color-brand-cyan] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[--color-brand-teal]/10 flex items-center justify-center text-[--color-brand-teal]"
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-3xl sm:text-4xl font-black text-white mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-[10px] sm:text-xs font-mono text-[--color-brand-medium] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section - WITH VISIBLE LINE */}
        <div className="relative">
          {/* Vertical timeline line - MADE MORE VISIBLE */}
          <div className="absolute left-[15px] sm:left-1/2 transform sm:-translate-x-1/2 w-[3px] h-full">
            {/* Background line (darker) */}
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            {/* Animated gradient line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[--color-brand-teal] via-[--color-brand-cyan] to-[--color-brand-teal] rounded-full shadow-[0_0_10px_rgba(93,248,216,0.5)]"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start sm:items-center justify-between w-full flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } gap-4 sm:gap-8`}
              >
                {/* Content Card */}
                <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[--color-brand-teal]/20 to-[--color-brand-cyan]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[--color-brand-teal]/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[--color-brand-teal]/10 text-[--color-brand-teal]">
                          {item.icon}
                        </div>
                        <span className="text-[--color-brand-teal] font-mono text-sm sm:text-base font-bold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[--color-brand-cyan] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[--color-brand-medium] text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                        <Code2 size={12} className="text-[--color-brand-teal]/50" />
                        <span className="text-[10px] font-mono text-[--color-brand-medium]">
                          {item.details}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node - Connected to the line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="absolute left-[6px] sm:left-1/2 transform sm:-translate-x-1/2 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-[--color-brand-teal] blur-md opacity-50" />
                    {/* Main node circle */}
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 bg-[--color-brand-dark] border-[3px] border-[--color-brand-teal] rounded-full z-10 shadow-[0_0_20px_rgba(93,248,216,0.8)]" />
                    {/* Inner dot */}
                    <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-[--color-brand-teal] to-[--color-brand-cyan] animate-pulse" />
                    {/* Pulsing ring animation */}
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute inset-0 rounded-full border-2 border-[--color-brand-teal]"
                    />
                  </div>
                </motion.div>

                {/* Empty spacer for layout */}
                <div className="hidden sm:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location & Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[--color-brand-teal]/10 to-[--color-brand-cyan]/10 border border-[--color-brand-teal]/20 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[--color-brand-teal]/20 text-[--color-brand-teal]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[--color-brand-teal] uppercase tracking-wider">Current Location</p>
                <p className="text-white font-bold text-lg">Navotas, Philippines</p>
              </div>
            </div>

            <div className="w-px h-12 bg-[--color-brand-teal]/20 hidden sm:block" />

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[--color-brand-teal]/20 text-[--color-brand-teal]">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[--color-brand-teal] uppercase tracking-wider">Availability</p>
                <p className="text-white font-bold text-lg">Open for Opportunities</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[--color-brand-teal] text-[--color-brand-dark] font-black uppercase tracking-wider rounded-xl text-sm flex items-center gap-2"
            >
              Let's Connect
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>

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