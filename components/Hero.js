"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="Modern luxury car"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Enhanced Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(10,95,255,0.15),transparent_50%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#0A5FFF] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#00CFC4] rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-[#00CFC4] drop-shadow-[0_0_8px_rgba(0,207,196,0.6)]" size={24} />
            </motion.div>
            <span className="text-[#00CFC4] font-semibold tracking-wider uppercase text-xs sm:text-sm backdrop-blur-sm bg-[#00CFC4]/10 px-3 py-1 rounded-full border border-[#00CFC4]/20">
              Premium Car Dealership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Welcome to{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#0A5FFF] via-[#00CFC4] to-[#0A5FFF] bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                Modern Auto
              </span>
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-[#0A5FFF] to-[#00CFC4] rounded-full blur-sm"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl backdrop-blur-sm"
          >
            Discover your dream vehicle from our premium collection of luxury and performance automobiles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row gap-2 sm:gap-4"
          >
            <Link href="/inventory">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(10, 95, 255, 0.6), 0 0 20px rgba(0, 207, 196, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-linear-to-r from-[#0A5FFF] to-[#0066FF] text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl font-semibold text-xs sm:text-lg transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 shadow-[0_0_30px_rgba(10,95,255,0.3)] overflow-hidden whitespace-nowrap border-2 border-transparent"
              >
                <span className="absolute inset-0 bg-linear-to-r from-[#00CFC4] to-[#0A5FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <span className="hidden xs:inline sm:inline">View </span>Inventory
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                  </motion.span>
                </span>
              </motion.button>
            </Link>

            <Link href="/#contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(10, 95, 255, 1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group backdrop-blur-md bg-white/10 border-2 border-white/60 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl font-semibold text-xs sm:text-lg hover:text-[#0A5FFF] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] whitespace-nowrap"
              >
                <span className="relative z-10">Contact<span className="hidden xs:inline sm:inline"> Us</span></span>
              </motion.button>
            </Link>
          </motion.div>


        </div>
      </div>
    </section>
  );
}