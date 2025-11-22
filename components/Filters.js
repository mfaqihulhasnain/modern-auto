"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
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
      className="bg-white p-6 rounded-xl shadow-lg sticky top-24"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-[#0B1120]">Filters</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
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
            className="space-y-6 overflow-hidden"
          >
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1120] mb-2">
                Brand
              </label>
              <select
                value={filters.brand}
                onChange={(e) => handleFilterChange("brand", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5FFF] focus:border-transparent outline-none transition-all"
              >
                {carBrands.map((brand) => (
                  <option key={brand} value={brand === "All Brands" ? "" : brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1120] mb-2">
                Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5FFF] focus:border-transparent outline-none transition-all"
              >
                {carTypes.map((type) => (
                  <option key={type} value={type === "All Types" ? "" : type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0B1120] mb-2">
                  Min Year
                </label>
                <select
                  value={filters.minYear}
                  onChange={(e) => handleFilterChange("minYear", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5FFF] focus:border-transparent outline-none transition-all"
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
                <label className="block text-sm font-semibold text-[#0B1120] mb-2">
                  Max Year
                </label>
                <select
                  value={filters.maxYear}
                  onChange={(e) => handleFilterChange("maxYear", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5FFF] focus:border-transparent outline-none transition-all"
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

            {/* Price Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0B1120] mb-2">
                  Min Price
                </label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                  placeholder="$"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5FFF] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0B1120] mb-2">
                  Max Price
                </label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                  placeholder="$"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5FFF] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Clear Filters Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClear}
              className="w-full bg-[#E6EBF0] text-[#0B1120] py-2.5 rounded-lg font-semibold hover:bg-[#D4DCE3] transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <X size={18} />
              Clear All Filters
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
