"use client";

import { motion } from "framer-motion";
import { DollarSign, Wrench, RefreshCw, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Flexible Financing",
    description: "Competitive rates and customized payment plans to fit your budget. Get pre-approved in minutes.",
    color: "#0A5FFF",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Wrench,
    title: "Expert Maintenance",
    description: "Professional service center with certified technicians. Keep your vehicle in perfect condition.",
    color: "#00CFC4",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: RefreshCw,
    title: "Trade-In Program",
    description: "Get the best value for your current vehicle with our competitive trade-in offers.",
    color: "#16F1FF",
    gradient: "from-cyan-400 to-blue-400"
  },
  {
    icon: Sparkles,
    title: "Vehicle Customization",
    description: "Personalize your car with premium accessories, upgrades, and custom detailing services.",
    color: "#ADE2FF",
    gradient: "from-blue-300 to-cyan-300"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative pt-6 md:pt-8 pb-6 md:pb-8 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full text-blue-600 font-semibold text-sm backdrop-blur-sm border border-blue-200/30">
              <Sparkles className="w-4 h-4" />
              Premium Services
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#0B1120] mb-6 leading-tight">
            Our <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Experience premium care and support throughout your journey with comprehensive solutions tailored for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className="relative h-full bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Gradient Overlay on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}08, transparent 70%)`
                    }}
                  />

                  {/* Animated Corner Accent */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full opacity-20"
                    style={{ backgroundColor: service.color }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`
                    }}
                  >
                    <Icon 
                      size={24} 
                      style={{ color: service.color }}
                      className="relative z-10"
                    />
                    
                    {/* Icon Background Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                      style={{ backgroundColor: service.color }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-[#0B1120] mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#4B5563] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: service.color }}
                    >
                      Learn more
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-1 origin-left rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${service.color}, transparent)`
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}