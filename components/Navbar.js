"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Car, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/inventory" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100/50"
          : "bg-linear-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#0A5FFF] to-transparent opacity-0 transition-opacity duration-500" 
           style={{ opacity: isScrolled ? 1 : 0 }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-[#0A5FFF]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Image
                src="/Logo.png"
                alt="Modern Auto"
                width={90}
                height={40}
                priority
                className="object-contain transition-all duration-300 relative z-10"
              />
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-[#0A5FFF]" />
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`font-medium transition-all duration-300 relative z-10 ${
                      isScrolled
                        ? "text-gray-700 group-hover:text-[#0A5FFF]"
                        : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#0A5FFF] to-[#0EA5E9] group-hover:w-full transition-all duration-300 rounded-full" />
                  
                  {/* Hover background */}
                  <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isScrolled ? "bg-gray-100" : "bg-white/10"
                  }`} />
                </Link>
              </motion.div>
            ))}
            
            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-4"
            >
              <Link href="/inventory">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-linear-to-r from-[#0A5FFF] to-[#0EA5E9] text-white px-6 py-2.5 rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Animated background gradient */}
                  <span className="absolute inset-0 bg-linear-to-r from-[#0EA5E9] to-[#0A5FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
                  
                  <span className="relative flex items-center gap-2">
                    View Inventory
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "bg-gray-100 text-gray-900 hover:bg-gray-200" 
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block px-4 py-3 text-gray-700 hover:text-[#0A5FFF] rounded-xl font-medium transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover background with gradient */}
                    <span className="absolute inset-0 bg-linear-to-r from-[#0A5FFF]/5 to-[#0EA5E9]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    
                    <span className="relative flex items-center justify-between">
                      {link.name}
                      <ChevronRight 
                        size={18} 
                        className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" 
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 px-4"
              >
                <Link href="/inventory" onClick={() => setIsOpen(false)}>
                  <button className="relative w-full group bg-linear-to-r from-[#0A5FFF] to-[#0EA5E9] text-white px-6 py-3.5 rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Animated shine */}
                    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent group-active:translate-x-full transition-transform duration-700" />
                    
                    <span className="relative flex items-center justify-center gap-2">
                      <Car size={20} />
                      View Inventory
                      <Sparkles size={16} className="animate-pulse" />
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}