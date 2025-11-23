"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, User, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Web3Forms integration
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, 
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Contact Form Submission - Modern Auto"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully."
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-6 md:pt-8 pb-16 md:pb-24 bg-linear-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              📧 Contact Us
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#0B1120] to-[#0A5FFF] bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help you find your perfect vehicle
          </p>
        </motion.div>

        {/* Contact Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden h-full">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="group">
                  <label htmlFor="name" className="text-sm font-semibold text-[#0B1120] mb-2 flex items-center gap-2">
                    <User size={16} className="text-[#0A5FFF]" />
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF]/50 focus:border-[#0A5FFF] focus:bg-white transition-all outline-none group-hover:border-gray-300"
                      placeholder="John Doe"
                    />
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0A5FFF] transition-colors" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="text-sm font-semibold text-[#0B1120] mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-[#0A5FFF]" />
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF]/50 focus:border-[#0A5FFF] focus:bg-white transition-all outline-none group-hover:border-gray-300"
                      placeholder="john@example.com"
                    />
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0A5FFF] transition-colors" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#0B1120] mb-2 flex items-center gap-2">
                    <Phone size={16} className="text-[#0A5FFF]" />
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF]/50 focus:border-[#0A5FFF] focus:bg-white transition-all outline-none group-hover:border-gray-300"
                      placeholder="+1 (555) 123-4567"
                    />
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0A5FFF] transition-colors" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="text-sm font-semibold text-[#0B1120] mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-[#0A5FFF]" />
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5FFF]/50 focus:border-[#0A5FFF] focus:bg-white transition-all outline-none resize-none group-hover:border-gray-300"
                      placeholder="Tell us how we can help you..."
                    />
                    <MessageSquare size={18} className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#0A5FFF] transition-colors" />
                  </div>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`p-4 rounded-xl flex items-center gap-3 border-2 ${
                      status.type === "success"
                        ? "bg-linear-to-r from-green-50 to-emerald-50 text-green-800 border-green-200"
                        : "bg-linear-to-r from-red-50 to-rose-50 text-red-800 border-red-200"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle size={24} className="shrink-0" />
                    ) : (
                      <AlertCircle size={24} className="shrink-0" />
                    )}
                    <p className="font-medium">{status.message}</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-[#0A5FFF] to-[#0849C7] text-white py-4 rounded-xl font-semibold text-base hover:from-[#084BD6] hover:to-[#0637A0] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl disabled:hover:scale-100 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Google Maps Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden h-full flex flex-col">
              {/* Map Header */}
              <div className="p-5 bg-linear-to-r from-[#0A5FFF] to-[#0849C7] text-white">
                <h3 className="text-xl font-bold mb-1">Visit Our Location</h3>
                <p className="text-sm text-blue-100">1604 SW 29th Street, Oklahoma City, OK 73119</p>
              </div>
              
              {/* Map Container */}
              <div className="relative flex-1 min-h-[350px] lg:min-h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.144281485706!2d-97.54874192580026!3d35.434912843468354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21141e3dac6cf%3A0x82ebeb44e3105600!2s1604%20SW%2029th%20St%2C%20Oklahoma%20City%2C%20OK%2073119!5e1!3m2!1sen!2sus!4v1763894475199!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Modern Auto Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}