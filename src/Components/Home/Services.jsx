"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Zap, Shield, Hammer, Droplets, Users } from "lucide-react";
import service1 from "../../assets/Images/services1.jpg";
import service4 from "../../assets/Images/services4.jpg";
import service11 from "../../assets/Images/service11.jpg";
import service9 from "../../assets/Images/services9.jpg";
import service5 from "../../assets/Images/services5.jpg";
import service6 from "../../assets/Images/services6.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Civil Construction",
      description:
        "High-quality construction services for factories, warehouses, and large-scale facilities with precise engineering and project management.",
      image: service1,
      link: "/services/civil-construction",
      animationType: "construction",
      icon: Hammer,
      color: "#f59e0b",
    },
    {
      title: "Welding Services",
      description:
        "Professional welding solutions with advanced techniques and certified welders ensuring durable, safe, and reliable joints.",
      image: service4,
      link: "/services/welding",
      animationType: "sparks",
      icon: Zap,
      color: "#ef4444",
    },
    {
      title: "Firefighting Systems",
      description:
        "Comprehensive fire protection systems design, installation, and maintenance to meet industrial safety standards.",
      image: service11,
      link: "/services/firefighting",
      animationType: "fire",
      icon: Flame,
      color: "#dc2626",
    },
    {
      title: "Security & Electrical",
      description:
        "Integrated security and electrical systems providing smart, efficient, and complete facility management solutions.",
      image: service9,
      link: "/services/security-electrical",
      animationType: "electrical",
      icon: Shield,
      color: "#3b82f6",
    },
    {
      title: "Sandblasting & Coating",
      description:
        "Surface preparation and protective coating services to extend equipment lifespan and prevent corrosion in harsh environments.",
      image: service5,
      link: "/services/sandblasting-coating",
      animationType: "coating",
      icon: Droplets,
      color: "#8b5cf6",
    },
    {
      title: "Manpower Solutions",
      description:
        "Reliable manpower solutions providing skilled, certified professionals for industrial operations and project requirements.",
      image: service6,
      link: "/services/manpower-rental",
      animationType: "manpower",
      icon: Users,
      color: "#10b981",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 14 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const contentVariants = {
    hover: { y: -2, transition: { duration: 0.3 } },
  };

  // Spark Generator for Welding
  const generateSparks = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 0.4 + Math.random() * 0.6,
      size: 2 + Math.random() * 4,
    }));
  };

  // Individual Service Card Component
  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [sparks] = useState(() => generateSparks(15));
    const Icon = service.icon;

    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        custom={index}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Link to={service.link} className="group block h-full">
          <div className="relative h-full overflow-hidden border border-gray-200 bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
            {/* Image Container */}
            <motion.div 
              className="relative h-56 overflow-hidden" 
              variants={imageVariants}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Service Icon Badge */}
              <motion.div
                className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              >
                <Icon className="h-5 w-5" style={{ color: service.color }} />
              </motion.div>

              {/* WELDING SPARKS ANIMATION */}
              {service.animationType === "sparks" && (
                <AnimatePresence>
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {sparks.map((spark) => (
                        <motion.div
                          key={spark.id}
                          className="absolute rounded-full"
                          style={{
                            width: spark.size,
                            height: spark.size,
                            left: `${spark.x}%`,
                            top: `${spark.y}%`,
                            background: `radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, #ef4444 100%)`,
                            boxShadow: "0 0 10px #fbbf24, 0 0 20px #f59e0b",
                          }}
                          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
                            y: [0, Math.random() * 100 + 50],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: spark.duration,
                            delay: spark.delay,
                            repeat: Infinity,
                            repeatDelay: 0.3,
                          }}
                        />
                      ))}
                      {/* Welding Glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-radial from-yellow-400/30 via-orange-500/20 to-transparent"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  )}
                </AnimatePresence>
              )}

              {/* FIRE ANIMATION */}
              {service.animationType === "fire" && isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-0 w-8 h-16 rounded-full"
                      style={{
                        left: `${10 + i * 12}%`,
                        background: "linear-gradient(to top, #ef4444, #f97316, #fbbf24, transparent)",
                        filter: "blur(8px)",
                      }}
                      animate={{
                        y: [-20, -80],
                        opacity: [0.8, 0],
                        scale: [1, 0.5],
                      }}
                      transition={{
                        duration: 1 + Math.random() * 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* ELECTRICAL PULSE ANIMATION */}
              {service.animationType === "electrical" && isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-0.5 bg-blue-400"
                      style={{
                        width: "100%",
                        top: `${20 + i * 15}%`,
                        boxShadow: "0 0 10px #3b82f6, 0 0 20px #60a5fa",
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* COATING SPRAY ANIMATION */}
              {service.animationType === "coating" && isHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: "-10px",
                        boxShadow: "0 0 5px #a78bfa",
                      }}
                      animate={{
                        y: [0, 250],
                        opacity: [1, 0],
                        scale: [1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "linear",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* CONSTRUCTION DUST ANIMATION */}
              {service.animationType === "construction" && isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-amber-200/60 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        bottom: "0",
                        filter: "blur(2px)",
                      }}
                      animate={{
                        y: [0, -200],
                        x: [(Math.random() - 0.5) * 50],
                        opacity: [0.6, 0],
                        scale: [0.5, 1.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* MANPOWER AVATAR PULSE */}
              {service.animationType === "manpower" && isHovered && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 rounded-full border-4 border-emerald-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-24 h-24 rounded-full border-4 border-emerald-500"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              )}
            </motion.div>

            {/* Card Content */}
            <motion.div className="p-6" variants={contentVariants}>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
              
              {/* Call-to-Action */}
              <motion.div
                className="flex items-center text-blue-600 font-semibold text-sm"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                <span className="mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>

            {/* Colored Border on Hover */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                border: `2px solid ${service.color}`,
                opacity: 0,
              }}
              animate={{
                opacity: isHovered ? 0.4 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Delivering world-class industrial and construction services with innovation, 
            precision, and reliability that drive long-term value for every client.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.link} service={service} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-700 text-lg mb-6 font-medium">
            Looking for a custom solution tailored to your business needs?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4  font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;