import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-cream py-20">
      <motion.div
        className="max-w-2xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-dark mb-6">
          Stay<span className="text-coral">.</span>
        </h2>
        <p className="text-lg text-dark text-opacity-70 mb-10">
          Get exclusive access to new collections and Caribbean stories.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="flex-1 px-6 py-4 bg-dark text-cream placeholder-cream placeholder-opacity-50 outline-none focus:ring-2 focus:ring-coral transition"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-coral text-dark font-bold hover:shadow-lg transition duration-300"
          >
            Join
          </button>
        </form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-coral font-bold"
          >
            ✓ Welcome to Hilo family
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}