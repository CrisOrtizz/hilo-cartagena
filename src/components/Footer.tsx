export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-coral-500 mb-4">
              Hilo Cartagena
            </h3>
            <p className="text-gray-400">
              Authentic Caribbean fashion crafted with passion in Cartagena, Colombia.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-coral-500">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-coral-500">Shop</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-coral-500">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-coral-500">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-coral-500">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-coral-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-coral-500 transition duration-300"
              >
                📷
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-coral-500 transition duration-300"
              >
                👥
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-coral-500 transition duration-300"
              >
                🐦
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-coral-500 transition duration-300"
              >
                🎵
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-gray-400">
              © 2026 Hilo Cartagena. All rights reserved.
            </p>
            <div className="flex justify-start md:justify-end gap-6">
              <a href="#" className="text-gray-400 hover:text-coral-500 text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-500 text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}