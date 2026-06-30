import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

// El trazo del hilo (mismas coordenadas que el preview que viste)
const THREAD_D =
  'M 20 80 C 140 20 220 150 340 95 C 450 45 540 165 650 90 C 672 150 600 215 450 214 L 250 214';

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  // Cuando termina la intro (3.7s), avisamos al padre para que nos desmonte.
  // El barrido de salida lo dispara <AnimatePresence> en App.tsx.
  useEffect(() => {
    const timer = setTimeout(onComplete, 3700);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-dark flex items-center justify-center overflow-hidden"
      initial={{ clipPath: 'inset(0 0 0 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <svg viewBox="0 0 680 300" className="absolute w-full max-w-3xl" aria-hidden="true">
        {/* 1. El hilo que se dibuja solo */}
        <motion.path
          d={THREAD_D}
          fill="none"
          stroke="#D85A30"
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: [0.42, 0, 0.58, 1] }}
        />

        {/* 2. La aguja (bolita) que sigue la punta del hilo */}
        <motion.circle
          cx={0}
          cy={0}
          r={6}
          fill="#D85A30"
          stroke="#FAF8F3"
          strokeWidth={2}
          style={{ offsetPath: `path("${THREAD_D}")` }}
          initial={{ offsetDistance: '0%', opacity: 0 }}
          animate={{ offsetDistance: '100%', opacity: 1 }}
          transition={{
            offsetDistance: { duration: 3, ease: [0.42, 0, 0.58, 1] },
            opacity: { duration: 0.3 },
          }}
        />
      </svg>

      {/* 3. El logo aparece cuando el hilo ya casi termina */}
      <motion.div
        className="relative text-center"
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 2.1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-7xl font-bold text-cream">
          Hilo<span className="text-coral">.</span>
        </h1>
        <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.3em] text-cream text-opacity-60">
          Moda caribeña auténtica
        </p>
      </motion.div>
    </motion.div>
  );
}