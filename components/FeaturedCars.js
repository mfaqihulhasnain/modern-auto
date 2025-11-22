"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CarCard from "./CarCard";
import { getFeaturedCars } from "@/lib/data";

export default function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [headerVisible, setHeaderVisible] = useState(false);

  const filters = ["All", "Electric", "Luxury", "Sports", "SUV"];

  useEffect(() => {
    // Load demo cars directly
    setCars(getFeaturedCars());
    setLoading(false);
    
    // Trigger header animation
    setTimeout(() => setHeaderVisible(true), 100);
  }, []);

  const filteredCars = cars.filter(car => {
    if (activeFilter === "All") return true;
    // Adjust this filter logic based on your actual car data structure
    return car.type?.toLowerCase().includes(activeFilter.toLowerCase()) ||
           car.category?.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="featured" className="pt-12 md:pt-16 pb-6 md:pb-8 bg-linear-to-br from-[#E6EBF0]/40 via-white to-[#E6EBF0]/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, #0B1120 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Premium badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: headerVisible ? 1 : 0, scale: headerVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="px-6 py-2.5 bg-linear-to-r from-blue-600/10 to-purple-600/10 text-blue-700 rounded-full text-sm font-bold tracking-wider uppercase border border-blue-600/20 shadow-lg backdrop-blur-sm">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Premium Collection
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B1120] mb-6 leading-tight"
          >
            Featured{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                Vehicles
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed font-light"
          >
            Explore our handpicked selection of premium vehicles, curated for performance, luxury, and style
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, idx) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setActiveFilter(filter)}
              className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                activeFilter === filter
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-600/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
              }`}
            >
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-50 blur-xl"></div>
              )}
              <span className="relative z-10">{filter}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Loading state */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-size-[200%_100%]"></div>
                <div className="p-6 space-y-4">
                  <div className="h-7 bg-gray-200 rounded-lg w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-lg w-1/2 animate-pulse"></div>
                  <div className="grid grid-cols-3 gap-3 py-4">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="h-10 bg-gray-200 rounded-lg w-1/3 animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded-xl w-2/5 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            {/* Cars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredCars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>

            {/* View all button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link href="/inventory">
                <button className="group relative px-10 py-5 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-[200%_auto] text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-600/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    View All Vehicles
                    <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}