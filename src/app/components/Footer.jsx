import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-300 text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img className="w-30 mb-4" src="/Logo.png" alt="Logo" />
          <p className="text-sm leading-relaxed">
            Order delicious meals from the comfort of your home with Foodie Haven. 
            Enjoy convenient online ordering and on-time home food delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/who-are-we" className="hover:text-[#E7154F]">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#E7154F]">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-[#E7154F]">Terms Of Service</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-[#E7154F]">Contact Us</Link></li>
 
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect with Us</h3>
          <p className="text-sm">hello@mothermeals.in</p>
          <p className="text-sm">+91 90304 99393</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300   py-4 text-center text-sm">
        <p>© 2025 Mother Meals | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
