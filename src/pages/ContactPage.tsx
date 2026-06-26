import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.h1
          className="text-7xl font-bold text-cream mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get In Touch<span className="text-coral">.</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-coral font-bold uppercase tracking-widest mb-2">Location</h3>
              <p className="text-cream text-opacity-80">Centro, Cartagena, Colombia</p>
            </div>
            <div>
              <h3 className="text-coral font-bold uppercase tracking-widest mb-2">Email</h3>
              <p className="text-cream text-opacity-80">hello@hilocartagena.com</p>
            </div>
            <div>
              <h3 className="text-coral font-bold uppercase tracking-widest mb-2">Hours</h3>
              <p className="text-cream text-opacity-80">Mon - Fri: 10 AM - 7 PM<br />Sat: 10 AM - 6 PM<br />Sun: 12 PM - 5 PM</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full px-6 py-4 bg-cream bg-opacity-10 text-cream placeholder-cream placeholder-opacity-50 border border-cream border-opacity-20 focus:border-coral outline-none transition"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              rows={6}
              className="w-full px-6 py-4 bg-cream bg-opacity-10 text-cream placeholder-cream placeholder-opacity-50 border border-cream border-opacity-20 focus:border-coral outline-none transition resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-4 bg-coral text-dark font-bold hover:shadow-lg transition duration-300"
            >
              Send Message
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-coral font-bold text-center"
              >
                ✓ Message received. We'll be in touch soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}