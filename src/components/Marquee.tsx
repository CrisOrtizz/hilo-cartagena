import { motion } from 'framer-motion';

const PHRASES = ['Hecho a mano', 'Cartagena · Colombia', 'Hilo auténtico', 'Edición limitada'];

export default function Marquee() {
  // Duplicamos las frases: la 2da mitad es idéntica a la 1ra,
  // así el loop nunca "salta" cuando llega a -50%.
  const items = [...PHRASES, ...PHRASES];

  return (
    <section className="bg-dark py-10 overflow-hidden border-y border-cream/10">
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        {items.map((phrase, i) => (
          <span
            key={i}
            className="flex items-center text-4xl md:text-6xl font-bold uppercase tracking-tight text-cream/70"
          >
            <span className="px-10">{phrase}</span>
            <span className="text-coral text-3xl">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}