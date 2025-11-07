"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Building2, Factory, Warehouse, Cog, Shield, Zap } from "lucide-react";
import avatar1 from "../../assets/Images/testimonial/c1.jpg";
import avatar2 from "../../assets/Images/testimonial/c2.jpg";
import avatar3 from "../../assets/Images/testimonial/c4.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anjali Sharma",
      role: "Project Manager",
      company: "Zenith Constructions",
      avatar: avatar1,
      content: "Their commitment to precision and safety is unmatched. The civil construction team delivered our new facility on time and with exceptional quality.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      role: "Operations Director",
      company: "Innovate Manufacturing",
      avatar: avatar2,
      content: "We hired their manpower solutions and were incredibly impressed with the skill and professionalism of the team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Fatima Al-Rashid",
      role: "Safety Officer",
      company: "Gulf Petrochemicals",
      avatar: avatar3,
      content: "The firefighting systems they installed are top-of-the-line. Their team's expertise in industrial safety standards gave us complete confidence.",
      rating: 5,
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Plant Manager",
      company: "SteelTech Industries",
      avatar: avatar1,
      content: "Exceptional welding services that exceeded our expectations. The quality and durability are remarkable.",
      rating: 5,
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "Facility Director",
      company: "Global Manufacturing",
      avatar: avatar2,
      content: "Their electrical and security solutions transformed our facility's safety standards. Professional and efficient.",
      rating: 5,
    },
    {
      id: 6,
      name: "Michael Brown",
      role: "Operations Head",
      company: "Heavy Machinery Corp",
      avatar: avatar3,
      content: "The sandblasting and coating work significantly extended our equipment lifespan. Outstanding quality.",
      rating: 5,
    }
  ];

  // Company logo configurations
  const companyLogos = {
    "Zenith Constructions": {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700"
    },
    "Innovate Manufacturing": {
      icon: <Factory className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700"
    },
    "Gulf Petrochemicals": {
      icon: <Cog className="w-6 h-6 text-orange-600" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700"
    },
    "SteelTech Industries": {
      icon: <Warehouse className="w-6 h-6 text-red-600" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700"
    },
    "Global Manufacturing": {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    },
    "Heavy Machinery Corp": {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700"
    }
  };

  // Get company initials for fallback
  const getCompanyInitials = (companyName) => {
    return companyName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [direction, setDirection] = useState(0);
  
  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
          prevIndex >= testimonials.length - itemsPerPage ? 0 : prevIndex + 1
        );
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length, itemsPerPage]);
  
  // Navigation functions
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };
  
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  // Calculate number of dots
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 },
    },
    hover: {
      y: -4,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const sliderVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.4 }
      }
    })
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const endIndex = currentIndex + itemsPerPage;
    if (endIndex <= testimonials.length) {
      return testimonials.slice(currentIndex, endIndex);
    } else {
      // Handle wrap-around case
      return [
        ...testimonials.slice(currentIndex),
        ...testimonials.slice(0, endIndex - testimonials.length)
      ];
    }
  };

  // Star Rating Component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            } transition-colors duration-200`}
          />
        ))}
      </div>
    );
  };

  // Company Logo Component
  const CompanyLogo = ({ company }) => {
    const logoConfig = companyLogos[company] || companyLogos["Zenith Constructions"];
    
    return (
      <div className={`w-12 h-12 rounded-lg border-2 ${logoConfig.borderColor} ${logoConfig.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <div className={logoConfig.textColor}>
          {logoConfig.icon}
        </div>
      </div>
    );
  };

  // Individual Testimonial Card Component
  const TestimonialCard = ({ testimonial }) => {
    const logoConfig = companyLogos[testimonial.company];

    return (
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="relative h-full p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
      >
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 text-blue-50 group-hover:text-blue-100 transition-colors duration-300">
          <Quote size={40} strokeWidth={1.5} />
        </div>

        <div className="relative z-10">
          {/* Rating */}
          <div className="mb-3">
            <StarRating rating={testimonial.rating} />
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
            "{testimonial.content}"
          </blockquote>

          {/* Client Info */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {testimonial.role}
                </p>
                <p className="text-xs text-blue-600 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>

            {/* Company Logo */}
            <CompanyLogo company={testimonial.company} />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 bg-gradient-to-br from-gray-25 to-gray-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          {/* <motion.div
            variants={titleVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
          </motion.div> */}

          <motion.h2
            variants={titleVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Leaders
            </span>
          </motion.h2>
          
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover why leading companies choose us for their industrial construction needs. 
            Quality, reliability, and excellence in every project.
          </motion.p> */}
        </motion.div>

        {/* Testimonials Slider */}
        {/* <div className="relative"> */}
          {/* Navigation Arrows */}
          {/* <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
            disabled={currentIndex >= testimonials.length - itemsPerPage}
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button> */}

          {/* Slider Container */}
          {/* <div className="overflow-hidden px-2">
            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {getCurrentTestimonials().map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div> */}

          {/* Dots Navigation */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex / itemsPerPage)
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        {/* </div> */}

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16"
        >
          {/* <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Trusted by Industry Leaders
            </h3>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {testimonials.map((testimonial, index) => {
              const logoConfig = companyLogos[testimonial.company];
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center justify-center p-4 rounded-lg border-2 ${logoConfig.borderColor} ${logoConfig.bgColor} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
                >
                  <div className={`${logoConfig.textColor} text-center`}>
                    {logoConfig.icon}
                    <p className="text-xs font-medium mt-2">{testimonial.company.split(' ')[0]}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Industry Partners" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;