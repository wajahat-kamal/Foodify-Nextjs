import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B111E] text-gray-300 py-10 px-6 md:px-20 lg:px-32 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 cursor-pointer select-none mb-2">
            <img src="/logo.svg" alt="Foodify" className="w-8 h-8 object-contain" />
            <h1 className="text-2xl font-bold text-white tracking-tight">FOODIFY</h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bringing you delicious flavors, cozy ambiance, and unforgettable dining experiences.  
            Savor every bite — made with passion at <span className="text-yellow-400">Foodify</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-yellow-400 transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-yellow-400 transition-colors">
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Visit Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 12th Street, Clifton, Karachi</li>
            <li>📞 +92 333 9876543</li>
            <li>✉️ hello@foodify.com</li>
          </ul>

          <div className="mt-4 flex items-center gap-3 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <i className="ri-facebook-circle-fill text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <i className="ri-instagram-fill text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <i className="ri-twitter-x-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-medium">FOODIFY</span> — Taste That Tells a Story.
        </p>
        <p className="mt-2">
          Made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://wajahat-kamal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Wajahat Kamal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
