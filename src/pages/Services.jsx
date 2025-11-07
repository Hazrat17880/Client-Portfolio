"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail,
  Hammer,
  Zap,
  Flame,
  Shield as SecurityShield,
  Droplets,
  Users as ManpowerUsers,
  Search,
  Award,
  Building2,
  Target,
  ChevronRight,
  Filter,
  X
} from "lucide-react";

// Import service images
import service1 from "../assets/Images/services1.jpg";
import service4 from "../assets/Images/services4.jpg";
import service11 from "../assets/Images/service11.jpg";
import service9 from "../assets/Images/services9.jpg";
import service5 from "../assets/Images/services5.jpg";
import service6 from "../assets/Images/services6.jpg";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredService, setHoveredService] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Service data with professional color scheme
  const servicesData = [
    {
      id: "civil-construction",
      title: "Civil Construction",
      description: "Complete construction solutions for industrial facilities, warehouses, and large-scale infrastructure projects with precision engineering.",
      image: service1,
      icon: Hammer,
      color: "#1e40af",
      gradient: "from-blue-900 to-blue-700",
      category: "construction",
      features: ["Structural Engineering", "Project Management", "Quality Control", "Safety Compliance"],
      stats: ["200+ Projects", "50+ Engineers", "100% Safety"]
    },
    {
      id: "welding",
      title: "Welding Services",
      description: "Certified welding solutions using advanced techniques for structural steel, pipelines, and custom fabrication projects.",
      image: service4,
      icon: Zap,
      color: "#dc2626",
      gradient: "from-red-900 to-red-700",
      category: "technical",
      features: ["TIG/MIG Welding", "Quality Testing", "Certified Welders", "Precision Work"],
      stats: ["5000+ Projects", "ASME Certified", "30+ Welders"]
    },
    {
      id: "firefighting",
      title: "Firefighting Systems",
      description: "Comprehensive fire protection systems design, installation, and maintenance for industrial safety compliance.",
      image: service11,
      icon: Flame,
      color: "#ea580c",
      gradient: "from-orange-900 to-orange-700",
      category: "safety",
      features: ["System Design", "NFPA Compliance", "24/7 Support", "Maintenance"],
      stats: ["300+ Systems", "NFPA Compliant", "24/7 Support"]
    },
    {
      id: "security-electrical",
      title: "Security & Electrical",
      description: "Integrated security and electrical solutions including surveillance, access control, and power distribution systems.",
      image: service9,
      icon: SecurityShield,
      color: "#059669",
      gradient: "from-green-900 to-green-700",
      category: "technical",
      features: ["CCTV Systems", "Access Control", "Electrical Works", "Smart Solutions"],
      stats: ["400+ Installations", "UL Certified", "Smart Automation"]
    },
    {
      id: "sandblasting-coating",
      title: "Sandblasting & Coating",
      description: "Surface preparation and protective coating services to prevent corrosion and extend equipment lifespan.",
      image: service5,
      icon: Droplets,
      color: "#7c3aed",
      gradient: "from-purple-900 to-purple-700",
      category: "maintenance",
      features: ["Surface Prep", "Corrosion Prevention", "Quality Inspection", "5+ Year Warranty"],
      stats: ["1000+ Projects", "ISO Standards", "5+ Year Warranty"]
    },
    {
      id: "manpower-rental",
      title: "Manpower Solutions",
      description: "Skilled workforce solutions providing certified professionals for industrial operations and project requirements.",
      image: service6,
      icon: ManpowerUsers,
      color: "#0d9488",
      gradient: "from-teal-900 to-teal-700",
      category: "personnel",
      features: ["Skilled Professionals", "Flexible Staffing", "Quality Assurance", "24/7 Support"],
      stats: ["500+ Professionals", "95% Retention", "24/7 Available"]
    }
  ];

  const categories = [
    { id: "all", label: "All Services", count: servicesData.length },
    { id: "construction", label: "Construction", count: servicesData.filter(s => s.category === "construction").length },
    { id: "technical", label: "Technical", count: servicesData.filter(s => s.category === "technical").length },
    { id: "safety", label: "Safety", count: servicesData.filter(s => s.category === "safety").length },
    { id: "maintenance", label: "Maintenance", count: servicesData.filter(s => s.category === "maintenance").length },
    { id: "personnel", label: "Personnel", count: servicesData.filter(s => s.category === "personnel").length }
  ];

  // Filter services based on search term and active filter
  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || service.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Text animation for title
  const titleText = "Our Services";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br mt-16 from-slate-900 via-blue-900 to-slate-800">
       
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center text-white">
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-4xl lg:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Industrial <span className="text-blue-300">Excellence</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Professional industrial solutions engineered for precision, built for durability, and delivered with uncompromising quality standards.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Title Left and Filters Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8"
          >
            {/* Left Side - Animated Title */}
            <div className="flex-1">
             
              
              {/* Animated Title Text */}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                <span className="flex flex-wrap">
                  {titleText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={titleVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                <span className="text-blue-600 block mt-2">Expert Solutions</span>
              </h2>
              
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Comprehensive industrial services designed to meet the highest standards of quality, safety, and performance.
              </p>
            </div>

            {/* Right Side - Filter Options */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[280px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-300 rounded-xl hover:border-slate-400 transition-colors min-w-[140px]"
                >
                  <Filter className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-700 font-medium">Filter</span>
                  <ChevronRight className={`h-4 w-4 text-slate-500 transition-transform ${showFilters ? 'rotate-90' : ''}`} />
                </motion.button>

                {/* Filter Dropdown Menu */}
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 min-w-[200px]"
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-slate-900">Categories</span>
                        <button
                          onClick={() => setShowFilters(false)}
                          className="p-1 hover:bg-slate-100 rounded"
                        >
                          <X className="h-4 w-4 text-slate-500" />
                        </button>
                      </div>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => {
                              setActiveFilter(category.id);
                              setShowFilters(false);
                            }}
                            className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                              activeFilter === category.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <span className="text-sm font-medium">{category.label}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              activeFilter === category.id
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {category.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Active Filter Display */}
          {activeFilter !== "all" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-sm text-slate-600">Showing:</span>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                <span>{categories.find(c => c.id === activeFilter)?.label}</span>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="hover:bg-blue-100 rounded-full p-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <span className="text-sm text-slate-500">
                ({filteredServices.length} of {servicesData.length} services)
              </span>
            </motion.div>
          )}

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="group"
                >
                  <Link to={`/services/${service.id}`} className="block h-full">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-slate-200">
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                        
                        {/* Service Icon */}
                        <div className="absolute top-6 right-6">
                          <div className={`p-4 bg-white rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-7 w-7" style={{ color: service.color }} />
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="mb-6 space-y-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                              <span className="text-sm text-slate-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="flex justify-between mb-8 pt-6 border-t border-slate-100">
                          {service.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className="text-sm font-bold text-slate-900">{stat}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide group-hover:tracking-wider transition-all duration-300">
                            Explore Service
                          </span>
                          <div className={`w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300`}>
                            <ChevronRight className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">No services found</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                {searchTerm || activeFilter !== "all" 
                  ? "We couldn't find any services matching your criteria. Please try different search terms or filters."
                  : "No services available at the moment."}
              </p>
              {(searchTerm || activeFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("all");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let’s discuss your project and find the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Get Consultation
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ServicesPage;