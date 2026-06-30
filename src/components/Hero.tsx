import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // scrollYProgress va de 0 → 1 mientras el Hero pasa por la pantalla.
  // offset define cuándo empieza (start start = top del hero en top del viewport)
  // y cuándo termina (end start = fin del hero llega al top).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Mapeamos ese progreso a estilos: el contenido se desvanece, encoge y sube.
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative h-screen bg-dark overflow-hidden flex items-center justify-center">
      <motion.div style={{ opacity, scale, y }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="text-coral text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Moda caribeña auténtica
        </motion.p>

        <motion.h1
          className="text-7xl md:text-9xl font-bold text-cream mb-8 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Hilo<span className="text-coral">.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-cream/70 mb-12 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Cada prenda lleva el espíritu de Cartagena: hecha a mano, hilo a hilo.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link to="/shop" className="px-10 py-4 bg-coral text-dark font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300">
            Ver colección
          </Link>
          <a href="#products" className="px-10 py-4 border border-cream/40 text-cream font-bold uppercase tracking-widest text-sm hover:bg-cream hover:text-dark transition-colors duration-300">
            Explorar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}