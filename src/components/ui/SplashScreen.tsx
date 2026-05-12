// src/components/ui/SplashScreen.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const bootLogs = [
  "CONNECTING TO DATABASE...",
  "LOADING BACKEND CORE...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "ADRIAN_ANGELES_V4.0.0 INITIALIZED",
];

export const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < bootLogs.length) {
      const timeout = setTimeout(() => setIndex(index + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(finishLoading, 1000);
    }
  }, [index, finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ scale: 2, opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[--color-brand-dark] font-mono p-4"
    >
      <div className="w-full max-w-md">
        {/* Terminal Header */}
        <div className="flex gap-2 mb-4 border-b border-[--color-brand-medium] pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-[10px] text-[--color-brand-medium] ml-2">system_init.sh</span>
        </div>

        {/* Boot Logs */}
        <div className="space-y-2">
          {bootLogs.slice(0, index).map((log, i) => (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              key={i}
              className={`text-sm ${i === bootLogs.length - 1 ? 'text-[--color-brand-teal] font-bold' : 'text-[--color-brand-cyan]'}`}
            >
              <span className="mr-2 text-[--color-brand-medium]">{">"}</span>
              {log}
            </motion.p>
          ))}
          {index < bootLogs.length && (
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-[--color-brand-teal] inline-block"
            />
          )}
        </div>
      </div>

      {/* Background Tech Pulse */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute inset-0 bg-radial-gradient from-[--color-brand-cyan] to-transparent -z-10"
      />
    </motion.div>
  );
};