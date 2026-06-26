import { motion } from 'framer-motion';

export default function WhyHilo() {
  const reasons = [
    {
      icon: '✨',
      title: 'Handcrafted Excellence',
      desc: 'Every piece is meticulously handmade by local artisans with 20+ years of experience.'
    },
    {
      icon: '🌍',
      title: 'Authentic Heritage',
      desc: 'Direct from Cartagena. Supporting local craftspeople and Caribbean culture.'
    },
    {
      icon: '♻️',
      title: 'Sustainable Fashion',
      desc: 'Eco-conscious materials and ethical production practices for a better future.'
    }
  ];

  return (
    <section id="why" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-dark mb-6">
            Why Hilo<span className="text-coral">.</span>
          </h2>
          <p className="text-lg text-dark text-opacity-60 max-w-2xl mx-auto">
            We're not just selling clothes. We're preserving Caribbean tradition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-dark mb-4">{reason.title}</h3>
              <p className="text-dark text-opacity-70 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}