import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20">
      <section className="bg-dark text-cream py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our<span className="text-coral">.</span>
          </motion.h1>

          <motion.div
            className="space-y-8 text-xl text-cream text-opacity-80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p>
              Hilo Cartagena is more than a clothing brand. It's a celebration of Caribbean heritage, craftsmanship, and culture.
            </p>
            <p>
              Founded in the heart of Cartagena, Colombia, we work directly with local artisans who have perfected their craft over generations.
            </p>
            <p>
              Every piece is handmade with intention. Every thread tells a story.
            </p>
            <p>
              We believe sustainable fashion means respecting both people and planet. That's why we use eco-conscious materials and ethical production practices.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-6xl font-bold text-dark mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            By The Numbers<span className="text-coral">.</span>
          </motion.h2>

          <div className="grid grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Pieces Crafted' },
              { number: '20+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Customers' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <p className="text-5xl font-bold text-coral mb-2">{stat.number}</p>
                <p className="text-dark text-opacity-70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}