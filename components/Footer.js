"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-[#0B1120] to-[#050812] text-white pt-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0A5FFF] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#00CFC4] rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-bold mb-6 bg-linear-to-r from-[#0A5FFF] via-[#00CFC4] to-[#0A5FFF] bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
              Modern Auto
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-lg">
              Your trusted partner in finding the perfect vehicle. 
              We offer premium cars, exceptional service, and unbeatable value.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-[#1a2332] border border-gray-700 rounded-lg focus:outline-none focus:border-[#0A5FFF] transition-colors text-white placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-linear-to-r from-[#0A5FFF] to-[#00CFC4] rounded-lg hover:shadow-lg hover:shadow-[#0A5FFF]/50 transition-all duration-300 flex items-center gap-2 font-semibold">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61576750887226&mibextid=wwXIfr&rdid=ssrE9mTJpo19omw9#"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-linear-to-br from-[#1a2332] to-[#0B1120] border border-gray-800 flex items-center justify-center hover:border-[#0A5FFF] hover:shadow-lg hover:shadow-[#0A5FFF]/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group w-12 h-12 rounded-xl bg-linear-to-br from-[#1a2332] to-[#0B1120] border border-gray-800 flex items-center justify-center hover:border-[#0A5FFF] hover:shadow-lg hover:shadow-[#0A5FFF]/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group w-12 h-12 rounded-xl bg-linear-to-br from-[#1a2332] to-[#0B1120] border border-gray-800 flex items-center justify-center hover:border-[#0A5FFF] hover:shadow-lg hover:shadow-[#0A5FFF]/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-[#00CFC4] transition-all duration-300">
                  <span className="w-0 h-0.5 bg-[#00CFC4] group-hover:w-4 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="group flex items-center gap-2 text-gray-400 hover:text-[#00CFC4] transition-all duration-300">
                  <span className="w-0 h-0.5 bg-[#00CFC4] group-hover:w-4 transition-all duration-300"></span>
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/#services" className="group flex items-center gap-2 text-gray-400 hover:text-[#00CFC4] transition-all duration-300">
                  <span className="w-0 h-0.5 bg-[#00CFC4] group-hover:w-4 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="group flex items-center gap-2 text-gray-400 hover:text-[#00CFC4] transition-all duration-300">
                  <span className="w-0 h-0.5 bg-[#00CFC4] group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2 text-gray-400 hover:text-[#00CFC4] transition-all duration-300">
                  <span className="w-0 h-0.5 bg-[#00CFC4] group-hover:w-4 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#1a2332] to-[#0B1120] border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-[#0A5FFF] transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="pt-2">1604 SW 29th Street, Oklahoma City, OK 73119</span>
              </li>
              <li className="group flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#1a2332] to-[#0B1120] border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-[#0A5FFF] transition-colors">
                  <Phone size={18} />
                </div>
                <span>+1 405-922-2212</span>
              </li>
              <li className="group flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#1a2332] to-[#0B1120] border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-[#0A5FFF] transition-colors">
                  <Mail size={18} />
                </div>
                <span>Modernautookc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>&copy; {currentYear} Modern Auto. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-[#00CFC4] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#00CFC4] transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-[#00CFC4] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}