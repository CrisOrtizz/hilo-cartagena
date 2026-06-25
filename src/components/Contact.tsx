import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a server
    console.log('Email:', email, 'Message:', message);
    setSubmitted(true);
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Visit us or reach out with any questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">📍 Visit Us</h3>
              <p className="text-lg text-gray-700">
                Centro, Cartagena, Colombia<br />
                Walled City, Historic District
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">📞 Contact</h3>
              <p className="text-lg text-gray-700">
                Phone: +57 300 123 4567<br />
                Email: info@hilocartagena.com
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🕐 Hours</h3>
              <p className="text-lg text-gray-700">
                Monday - Friday: 10 AM - 7 PM<br />
                Saturday: 10 AM - 6 PM<br />
                Sunday: 12 PM - 5 PM
              </p>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/573001234567?text=Hi%20Hilo%20Cartagena"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <label className="block text-gray-900 font-bold mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-coral-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-900 font-bold mb-2">
                  Message
                </label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-coral-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  ✓ Message received! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}