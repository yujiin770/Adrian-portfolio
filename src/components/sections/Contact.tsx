import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Mail, Terminal, MapPin, Globe, Phone, Clock, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useState, useRef } from 'react';

export const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("TRANSMISSION_SUCCESSFUL", {
      description: "Your message has been routed to Adrian's core system. Expect a response within 24 hours.",
      style: { 
        background: '#093C5D', 
        color: '#5DF8D8', 
        border: '1px solid #5DF8D8',
        fontSize: '12px'
      },
      icon: <CheckCircle size={18} color="#5DF8D8" />
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    { 
      icon: <Mail size={22}/>, 
      label: "EMAIL", 
      value: "adrian.angeles@devportfolio.com",
      color: "#3ECF8E",
      action: "mailto:adrian.angeles@devportfolio.com"
    },
    { 
      icon: <MapPin size={22}/>, 
      label: "LOCATION", 
      value: "Manila, Philippines",
      color: "#FF6B6B",
      action: null
    },
    { 
      icon: <Globe size={22}/>, 
      label: "TIMEZONE", 
      value: "GMT+8 (PHT)",
      color: "#4ECDC4",
      action: null
    },
    { 
      icon: <Phone size={22}/>, 
      label: "PHONE", 
      value: "+63 (XXX) XXX-XXXX",
      color: "#FFE66D",
      action: "tel:+63XXXXXXXXXX"
    },
    { 
      icon: <Clock size={22}/>, 
      label: "AVAILABILITY", 
      value: "Mon-Fri: 9AM-6PM PHT",
      color: "#A855F7",
      action: null
    },
    { 
      icon: <MessageSquare size={22}/>, 
      label: "RESPONSE TIME", 
      value: "< 24 hours",
      color: "#F43F5E",
      action: null
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 bg-[--color-brand-dark] px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[--color-brand-teal]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[--color-brand-cyan]/5 rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[30%] w-[300px] h-[300px] bg-[--color-brand-medium]/5 rounded-full blur-[80px]" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[15%] left-[5%] text-[--color-brand-teal] text-6xl font-mono">{'>>>'}</div>
        <div className="absolute bottom-[20%] right-[8%] text-[--color-brand-cyan] text-5xl font-mono">{'<<<'}</div>
        <div className="absolute top-[50%] right-[15%] text-[--color-brand-medium] text-4xl font-mono">{'[CONNECT]'}</div>
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
            <Terminal size={14} className="text-[--color-brand-teal]" />
            <span className="text-[10px] font-mono text-[--color-brand-teal] tracking-[0.2em] uppercase">Connect.establish()</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            Get_In_<span className="text-[--color-brand-teal]">Touch</span>
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
            Ready to bring your ideas to life? I'm just a message away. 
            Let's discuss your next project or collaboration opportunity.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT SIDE - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Status Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[--color-brand-teal]/10 to-[--color-brand-cyan]/10 border border-[--color-brand-teal]/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-[--color-brand-teal] rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-[--color-brand-teal] rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-[10px] font-mono text-[--color-brand-teal] uppercase tracking-wider">System Status: Online</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Currently open for backend opportunities and technical collaborations. 
                Response time: <span className="text-[--color-brand-teal] font-mono font-bold">{"< 24h"}</span>
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="group relative"
                  onClick={() => method.action && window.open(method.action, '_blank')}
                >
                  <div 
                    className="absolute -inset-0.5 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"
                    style={{ background: `linear-gradient(135deg, ${method.color}40, transparent)` }}
                  />
                  <div className="relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[--color-brand-teal]/30 transition-all cursor-pointer">
                    <div 
                      className="p-2 rounded-lg transition-all group-hover:scale-110"
                      style={{ backgroundColor: `${method.color}20`, color: method.color }}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] text-white/40 font-mono uppercase tracking-wider">{method.label}</p>
                      <p className="text-white text-xs font-medium truncate">{method.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-4 text-center">Connect Socially</p>
        
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="relative p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Form Header Decoration */}
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-[--color-brand-teal]" />
                  <span className="text-[10px] font-mono text-[--color-brand-cyan] uppercase tracking-[0.2em]">request_packet.json</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 animate-pulse" />
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider ml-1 flex items-center gap-2">
                      <span className="text-[--color-brand-teal]">$</span> sender_name
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.01]' : ''}`}>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your name"
                        className="w-full bg-[--color-brand-dark]/50 border rounded-xl px-4 py-3 text-white text-sm transition-all placeholder:text-white/10 focus:outline-none"
                        style={{ borderColor: focusedField === 'name' ? '#5DF8D8' : 'rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider ml-1 flex items-center gap-2">
                      <span className="text-[--color-brand-teal]">$</span> sender_email
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="email@example.com"
                        className="w-full bg-[--color-brand-dark]/50 border rounded-xl px-4 py-3 text-white text-sm transition-all placeholder:text-white/10 focus:outline-none"
                        style={{ borderColor: focusedField === 'email' ? '#5DF8D8' : 'rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider ml-1 flex items-center gap-2">
                    <span className="text-[--color-brand-teal]">$</span> subject_line
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'scale-[1.01]' : ''}`}>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="What's this about?"
                      className="w-full bg-[--color-brand-dark]/50 border rounded-xl px-4 py-3 text-white text-sm transition-all placeholder:text-white/10 focus:outline-none"
                      style={{ borderColor: focusedField === 'subject' ? '#5DF8D8' : 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider ml-1 flex items-center gap-2">
                    <span className="text-[--color-brand-teal]">$</span> message_payload
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                    <textarea 
                      required
                      rows={5} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Define your request..."
                      className="w-full bg-[--color-brand-dark]/50 border rounded-xl px-4 py-3 text-white text-sm transition-all placeholder:text-white/10 focus:outline-none resize-none"
                      style={{ borderColor: focusedField === 'message' ? '#5DF8D8' : 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[--color-brand-teal] to-[--color-brand-cyan] text-[--color-brand-dark] font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(93,248,216,0.3)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      Execute Transmission
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {/* Status Bar */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-[--color-brand-teal] animate-pulse' : 'bg-white/20'}`} />
                    <span className="text-[7px] sm:text-[8px] font-mono text-white/40 italic">
                      PORT_8080_LISTENING
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[7px] sm:text-[8px] font-mono text-white/40">
                      {Object.values(formData).filter(v => v).length}/4 fields completed
                    </span>
                    <span className="text-[7px] sm:text-[8px] font-mono text-white/40 uppercase tracking-tighter italic">
                      Encrypted via TLS 1.3
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[--color-brand-teal]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[--color-brand-cyan]/10 rounded-full blur-3xl pointer-events-none" />
            </form>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-[8px] font-mono text-white/30">
            <span className="text-[--color-brand-teal]">$</span> All messages are routed through secure channels. 
            Your data is protected and never shared.
          </p>
        </motion.div>
      </div>
    </section>
  );
};