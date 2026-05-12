import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';

// Components
import { SplashScreen } from './components/ui/SplashScreen';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-[--color-brand-dark] min-h-screen text-white selection:bg-[--color-brand-teal] selection:text-[--color-brand-dark] scroll-smooth">
      <Toaster theme="dark" position="bottom-right" richColors />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" finishLoading={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact /> {/* ADD THIS */}
            <footer className="py-10 border-t border-white/5 text-center">
              <p className="text-[--color-brand-medium] text-[10px] font-mono uppercase tracking-[0.5em]">
                © 2025 Adrian Angeles // All Systems Operational
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;