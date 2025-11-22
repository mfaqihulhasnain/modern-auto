"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Eye, Calendar, Gauge, Heart } from "lucide-react";
import { useState } from "react";

export default function CarCard({ car, index = 0 }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0A5FFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Image Container */}
      <div className="relative h-52 md:h-56 overflow-hidden bg-linear-to-br from-[#E6EBF0] to-[#D4DCE3]">
        {car.image ? (
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 bg-white/50 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[#4B5563] text-sm font-medium">No Image Available</span>
            </div>
          </div>
        )}
        
        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all duration-200"
        >
          <Heart
            size={18}
            className={`transition-colors duration-200 ${
              isFavorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
            }`}
          />
        </motion.button>

        {/* Type Badge with Icon */}
        {car.type && (
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 500 }}
              className="bg-linear-to-r from-[#0A5FFF] to-[#084BD6] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-1.5"
            >
              <Gauge size={12} />
              {car.type}
            </motion.div>
          </div>
        )}

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <span className="text-white font-semibold flex items-center gap-2 text-sm">
              <Eye size={16} />
              Quick View
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 relative z-20">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-[#0B1120] mb-2 group-hover:text-[#0A5FFF] transition-colors duration-200">
            {car.brand} {car.model}
          </h3>
          
          {/* Year Badge */}
          <div className="flex items-center gap-2 text-sm text-[#4B5563]">
            <Calendar size={14} className="text-[#0A5FFF]" />
            <span className="font-medium">{car.year}</span>
          </div>
        </div>

        {car.description && (
          <p className="text-sm text-[#4B5563] mb-4 line-clamp-2 leading-relaxed">
            {car.description}
          </p>
        )}

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-4" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#4B5563] mb-1 uppercase tracking-wide font-medium">Starting Price</p>
            <div className="flex items-baseline gap-1">
              <p className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#0A5FFF] to-[#084BD6] bg-clip-text text-transparent">
                ${car.price?.toLocaleString()}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(10, 95, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-r from-[#00CFC4] to-[#00B8AD] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:from-[#00B8AD] hover:to-[#009D94] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Eye size={16} />
            Details
          </motion.button>
        </div>

      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-linear-to-r from-[#0A5FFF] via-[#00CFC4] to-[#0A5FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}