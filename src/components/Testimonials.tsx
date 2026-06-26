import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María García',
      role: 'Fashion Designer',
      text: 'The quality and authenticity are unmatched. Hilo represents true Caribbean craftsmanship.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'James Mitchell',
      role: 'Brand Curator',
      text: 'Finally, a brand that celebrates culture while maintaining premium quality. Exceptional.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Sofia Reyes',
      role: 'Influencer',
      text: 'Every piece tells a story. The attention to detail is what makes Hilo truly special.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-cream mb-6">
            Loved by<span className="text-coral">.</span>
          </h2>
          <p className="text-lg text-cream text-opacity-60">What our customers say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-dark border border-cream border-opacity-20 p-8 rounded-lg hover:border-coral transition duration-300"
            >
              <p className="text-cream text-opacity-80 mb-8 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-cream">{testimonial.name}</p>
                  <p className="text-sm text-cream text-opacity-60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}