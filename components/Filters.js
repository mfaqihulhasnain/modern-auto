"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Check } from "lucide-react";
import { useState } from "react";

export default function Filters({ filters, setFilters, onClear }) {
  const [isOpen, setIsOpen] = useState(true);

  const carBrands = [
    "All Brands",
    "Tesla",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Range Rover",
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet"
  ];

  const carTypes = [
    "All Types",
    "Sedan",
    "SUV",
    "Hatchback",
    "Pickup",
    "Sports",
    "Coupe",
    "Convertible"
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl sticky top-24 overflow-hidden border border-gray-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h3 className="text-2xl font-bold text-[#0B1120]">Filters</h3>
          <p className="text-xs text-gray-500 mt-1">Refine your search</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={22} className="text-gray-600" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="max-h-[calc(100vh-250px)] overflow-y-auto px-6 py-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
              {/* Brand Filter */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1120] mb-3">
                  Brand
                  {filters.brand && (
                    <span className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </span>
                  )}
                </label>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF] focus:border-[#0A5FFF] outline-none transition-all duration-300 bg-white hover:border-gray-300 cursor-pointer shadow-sm"
                >
                  {carBrands.map((brand) => (
                    <option key={brand} value={brand === "All Brands" ? "" : brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1120] mb-3">
                  Type
                  {filters.type && (
                    <span className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </span>
                  )}
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF] focus:border-[#0A5FFF] outline-none transition-all duration-300 bg-white hover:border-gray-300 cursor-pointer shadow-sm"
                >
                  {carTypes.map((type) => (
                    <option key={type} value={type === "All Types" ? "" : type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Range */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1120] mb-3">
                  Year Range
                  {(filters.minYear || filters.maxYear) && (
                    <span className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </span>
                  )}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      From
                    </label>
                    <select
                      value={filters.minYear}
                      onChange={(e) => handleFilterChange("minYear", e.target.value)}
                      className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF] focus:border-[#0A5FFF] outline-none transition-all duration-300 bg-white hover:border-gray-300 cursor-pointer text-sm shadow-sm"
                    >
                      <option value="">Any</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      To
                    </label>
                    <select
                      value={filters.maxYear}
                      onChange={(e) => handleFilterChange("maxYear", e.target.value)}
                      className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF] focus:border-[#0A5FFF] outline-none transition-all duration-300 bg-white hover:border-gray-300 cursor-pointer text-sm shadow-sm"
                    >
                      <option value="">Any</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1120] mb-3">
                  Price Range
                  {(filters.minPrice || filters.maxPrice) && (
                    <span className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </span>
                  )}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Minimum
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                      <input
                        type="number"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                        placeholder="0"
                        className="w-full pl-7 pr-3 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF] focus:border-[#0A5FFF] outline-none transition-all duration-300 bg-white hover:border-gray-300 text-sm shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Maximum
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                      <input
                        type="number"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                        placeholder="0"
                        className="w-full pl-7 pr-3 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF] focus:border-[#0A5FFF] outline-none transition-all duration-300 bg-white hover:border-gray-300 text-sm shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clear Filters Button - Fixed at bottom */}
            <div className="p-6 pt-4 bg-gray-50 border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClear}
                className="w-full bg-red-500 text-white py-3.5 rounded-xl font-bold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <X size={18} />
                Clear All Filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}