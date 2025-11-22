"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import CarCard from "@/components/CarCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { getAllCars } from "@/lib/data";
import Image from "next/image";

export default function InventoryPage() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filters, setFilters] = useState({
    brand: "",
    type: "",
    minYear: "",
    maxYear: "",
    minPrice: "",
    maxPrice: ""
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Fetch cars from API or data.js
  // Support both synchronous and async `getAllCars()` implementations.
  useEffect(() => {
    let mounted = true;

    async function loadCars() {
      setLoading(true);
      try {
        // `Promise.resolve` will await a Promise or immediately resolve a non-promise value
        const demoData = await Promise.resolve(getAllCars());
        if (!mounted) return;
        setCars(demoData || []);
        setFilteredCars(demoData || []);
      } catch (err) {
        console.error("[InventoryPage] error loading cars:", err);
        if (mounted) {
          setCars([]);
          setFilteredCars([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadCars();

    return () => {
      mounted = false;
    };
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...cars];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Brand filter
    if (filters.brand) {
      const fb = String(filters.brand).toLowerCase();
      result = result.filter((car) => String(car.brand || "").toLowerCase() === fb);
    }

    // Type filter
    if (filters.type) {
      const ft = String(filters.type).toLowerCase();
      result = result.filter((car) => String(car.type || "").toLowerCase() === ft);
    }

    // Year filters
    if (filters.minYear) {
      result = result.filter((car) => car.year >= parseInt(filters.minYear));
    }
    if (filters.maxYear) {
      result = result.filter((car) => car.year <= parseInt(filters.maxYear));
    }

    // Price filters
    if (filters.minPrice) {
      result = result.filter((car) => car.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((car) => car.price <= parseInt(filters.maxPrice));
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "year-new":
        result.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        result.sort((a, b) => a.year - b.year);
        break;
      case "brand":
        result.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      default:
        break;
    }

    setFilteredCars(result);
  }, [cars, searchQuery, filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      brand: "",
      type: "",
      minYear: "",
      maxYear: "",
      minPrice: "",
      maxPrice: ""
    });
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-12 bg-linear-to-b from-[#E6EBF0]/40 via-white to-[#E6EBF0]/20">
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with image background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative overflow-hidden rounded-2xl h-78 md:h-70"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Image3.jpeg"
                alt="Luxury cars"
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Dot pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6TTAgMTZjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptMTggMGMwLTEuMS45LTIgMi0yczIgLjkgMiAyLS45IDItMiAyLTItLjktMi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 w-fit"
              >
                <span className="text-white/90 text-sm font-medium">
                  {cars.length} Premium Vehicles Available
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Our Inventory
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                Browse our extensive collection of premium vehicles
              </p>
            </div>
          </motion.div>

          {/* Search and Sort Bar - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 mb-8 flex flex-col md:flex-row gap-4"
          >
            {/* Search with enhanced styling */}
            <div className="flex-1 relative group">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#0A5FFF] transition-colors"
                size={20}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand, model, or type..."
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF]/20 focus:border-[#0A5FFF] outline-none transition-all bg-white/50 hover:bg-white"
              />
            </div>

            {/* Sort with gradient border */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF]/20 focus:border-[#0A5FFF] outline-none transition-all min-w-[200px] bg-white/50 hover:bg-white appearance-none cursor-pointer"
              >
                <option value="featured">✨ Featured</option>
                <option value="price-low">💰 Price: Low to High</option>
                <option value="price-high">💎 Price: High to Low</option>
                <option value="year-new">🆕 Year: Newest First</option>
                <option value="year-old">📅 Year: Oldest First</option>
                <option value="brand">🔤 Brand: A-Z</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Mobile Filter Toggle - Enhanced */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden bg-linear-to-r from-[#0A5FFF] to-[#084BD6] text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <SlidersHorizontal size={20} />
              Filters
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <Filters
                filters={filters}
                setFilters={setFilters}
                onClear={clearFilters}
              />
            </div>

            {/* Mobile Filters - Enhanced */}
            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <motion.div
                    initial={{ x: -320 }}
                    animate={{ x: 0 }}
                    exit={{ x: -320 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white w-80 h-full p-6 overflow-y-auto shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-[#0B1120]">Filters</h3>
                      <button
                        onClick={() => setShowMobileFilters(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <Filters
                      filters={filters}
                      setFilters={setFilters}
                      onClear={clearFilters}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Car Grid with enhanced loading and empty states */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="bg-white rounded-2xl shadow-lg h-96 overflow-hidden group"
                    >
                      <div className="h-64 bg-linear-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="h-6 bg-linear-to-r from-gray-200 to-gray-100 rounded-lg w-3/4 animate-pulse" />
                        <div className="h-4 bg-linear-to-r from-gray-200 to-gray-100 rounded-lg w-1/2 animate-pulse" />
                        <div className="h-8 bg-linear-to-r from-gray-200 to-gray-100 rounded-lg w-1/3 animate-pulse" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : filteredCars.length > 0 ? (
                <>
                  {/* Results count */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 flex items-center justify-between flex-wrap gap-4"
                  >
                    <p className="text-[#4B5563] font-medium">
                      Showing <span className="text-[#0A5FFF] font-bold">{filteredCars.length}</span> {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}
                    </p>
                    {(searchQuery || Object.values(filters).some(f => f)) && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-[#0A5FFF] hover:text-[#084BD6] font-semibold transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Clear all filters
                      </button>
                    )}
                  </motion.div>
                  
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredCars.map((car, index) => (
                        <motion.div
                          key={car.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <CarCard car={car} index={index} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 bg-white rounded-2xl shadow-lg"
                >
                  <div className="mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                      <Search className="text-gray-400" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1120] mb-2">
                      No vehicles found
                    </h3>
                    <p className="text-[#4B5563] mb-6 max-w-md mx-auto">
                      We couldn't find any vehicles matching your search criteria. Try adjusting your filters or search terms.
                    </p>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="bg-linear-to-r from-[#0A5FFF] to-[#084BD6] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}