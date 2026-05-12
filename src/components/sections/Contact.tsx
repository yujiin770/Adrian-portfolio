// src/components/sections/Contact.tsx
import { motion } from 'framer-motion';
import { Send, Mail, Terminal, MapPin, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

export const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("TRANSMISSION_SUCCESSFUL", {
      description: "Your message has been routed to Adrian's core system.",
      style: { background: '#093C5D', color: '#5DF8D8', border: '1px solid #5DF8D8' }
    });
  };

  return (
    <section id="contact" className="py-32 bg-[--color-brand-dark] px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[--color-brand-teal]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: SYSTEM INFO */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter"
              >
                Get_In_<span className="text-[--color-brand-teal]">Touch</span>
              </motion.h2>
              <p className="text-[--color-brand-medium] mt-6 text-lg leading-relaxed max-w-md">
                Currently open for backend opportunities and technical collaborations. 
                System response time: <span className="text-[--color-brand-teal] font-mono">{"< 24h"}</span>
              </p>
            </div>

            {/* Terminal Style Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: <Mail size={20}/>, label: "EMAIL", val: "adrian.angeles@email.com" },
                { icon: <MapPin size={20}/>, label: "LOCATION", val: "Manila, Philippines" },
                { icon: <Globe size={20}/>, label: "TIMEZONE", val: "GMT+8" },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[--color-brand-teal]/30 transition-all">
                  <div className="text-[--color-brand-teal] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-[--color-brand-medium] font-mono uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-bold text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

           
          </div>

          {/* RIGHT SIDE: THE FORM (COMMAND CENTER) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Form Header Decoration */}
              <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-[--color-brand-teal]" />
                  <span className="text-xs font-mono text-[--color-brand-cyan] uppercase tracking-[0.3em]">Request_Packet.json</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-[--color-brand-medium] uppercase ml-2">sender_name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter Name"
                    className="w-full bg-[--color-brand-dark]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[--color-brand-teal] transition-all placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-[--color-brand-medium] uppercase ml-2">sender_email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-[--color-brand-dark]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[--color-brand-teal] transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-mono text-[--color-brand-medium] uppercase ml-2">message_payload</label>
                <textarea 
                  required
                  rows={5} 
                  placeholder="Define your request..."
                  className="w-full bg-[--color-brand-dark]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[--color-brand-teal] transition-all placeholder:text-white/10 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[--color-brand-teal] text-[--color-brand-dark] font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(93,248,216,0.3)] transition-all cursor-pointer"
              >
                Execute Transmission <Send size={18} />
              </motion.button>

              {/* Status Bar at bottom of form */}
              <div className="mt-8 flex items-center justify-between opacity-40">
                 <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-[--color-brand-teal] animate-pulse' : 'bg-white/20'}`} />
                    <span className="text-[8px] font-mono text-white italic">PORT_8080_LISTENING</span>
                 </div>
                 <span className="text-[8px] font-mono text-white uppercase tracking-tighter italic">Encrypted via RSA-2048</span>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};