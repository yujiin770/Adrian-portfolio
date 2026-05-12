import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] px-4 md:px-10 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl bg-[--color-brand-dark]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="p-1.5 bg-[--color-brand-teal] rounded-lg text-[--color-brand-dark]">
            <Code2 size={22} />
          </div>
          <span className="tracking-tighter text-white font-black">ADRIAN<span className="text-[--color-brand-cyan]">.SYS</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold text-white/70 hover:text-[--color-brand-teal] transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-xl bg-[--color-brand-teal] text-[--color-brand-dark] font-black text-[10px] tracking-widest hover:scale-105 transition-transform"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[--color-brand-teal]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-[--color-brand-dark] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-sm font-bold text-white/80 tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};