import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Award, Clock, Users } from "lucide-react";
import heroImage from "../../assets/Images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex mt-[5rem] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial Construction"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/80 to-cyan-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center text-white max-w-6xl mx-auto">
      

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h1 className="text-3xl sm:text-4xl pt-16 md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Building The Future With{" "}
            <motion.span 
              className="text-blue-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Strength
            </motion.span>{" "}
            &{" "}
            <motion.span 
              className="text-cyan-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Innovation
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Delivering world-class industrial construction solutions that empower
          progress, reliability, and long-term growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <span>Get a Quote</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 px-6 py-3 border border-white/50 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="h-4 w-4" />
            <span>Our Services</span>
          </motion.a>
        </motion.div>

        {/* Stats Section */}
     
      </div>

   

     
    </section>
  );
};

export default HeroSection;