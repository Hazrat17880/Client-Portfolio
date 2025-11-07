"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
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
  ChevronRight,
  Quote,
  ArrowUp,
  Home,
  Info,
  Star,
  Calendar,
  Award,
  TrendingUp
} from "lucide-react";

// Import service images
import service1 from "../assets/Images/services1.jpg"
import service4 from "../assets/Images/services4.jpg";
import service11 from "../assets/Images/service11.jpg";
import service9 from "../assets/Images/services9.jpg";
import service5 from "../assets/Images/services5.jpg";
import service6 from "../assets/Images/services6.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Service data matching the main services section with updated color scheme
  const servicesData = {
    "civil-construction": {
      title: "Civil Construction",
      description: "High-quality construction services for factories, warehouses, and large-scale facilities with precise engineering and project management.",
      fullDescription: "We specialize in comprehensive civil construction services for industrial facilities, commercial buildings, and large-scale infrastructure projects. Our team of experienced engineers and construction professionals ensures every project meets the highest standards of quality, safety, and efficiency.",
      image: service1,
      icon: Hammer,
      color: "#d97706", // Darker amber for a more industrial feel
      features: [
        "Structural Design & Engineering",
        "Project Management & Planning",
        "Quality Control & Assurance",
        "Safety Compliance & Protocols",
        "Material Procurement & Management",
        "Timely Project Delivery"
      ],
      process: [
        { step: 1, title: "Consultation & Planning", description: "Initial assessment and project planning" },
        { step: 2, title: "Design & Engineering", description: "Detailed structural design and engineering" },
        { step: 3, title: "Material Procurement", description: "Sourcing high-quality construction materials" },
        { step: 4, title: "Construction Execution", description: "On-site construction with quality control" },
        { step: 5, title: "Quality Inspection", description: "Comprehensive quality checks and testing" },
        { step: 6, title: "Project Handover", description: "Final delivery and client handover" }
      ],
      stats: [
        { icon: Clock, value: "200+", label: "Projects Completed" },
        { icon: Users, value: "50+", label: "Expert Engineers" },
        { icon: Shield, value: "100%", label: "Safety Record" }
      ],
      testimonials: [
        {
          name: "John Smith",
          position: "CEO, Industrial Corp",
          content: "Their construction team delivered our new facility ahead of schedule with exceptional quality. Highly professional and reliable.",
          rating: 5
        },
        {
          name: "Sarah Johnson",
          position: "Project Manager, BuildTech",
          content: "The attention to detail and commitment to safety standards is impressive. They exceeded our expectations at every stage.",
          rating: 5
        }
      ],
      faq: [
        {
          question: "How long does a typical construction project take?",
          answer: "Project timelines vary based on scope and complexity. Small projects may take 3-6 months, while large-scale facilities can take 12-24 months."
        },
        {
          question: "Do you provide post-construction maintenance?",
          answer: "Yes, we offer comprehensive maintenance packages to ensure your facility remains in optimal condition after completion."
        }
      ]
    },
    "welding": {
      title: "Welding Services",
      description: "Professional welding solutions with advanced techniques and certified welders ensuring durable, safe, and reliable joints.",
      fullDescription: "Our certified welding services utilize state-of-the-art equipment and techniques including TIG, MIG, and arc welding. We serve various industries with precision welding for structural steel, pipelines, machinery, and custom fabrication projects.",
      image: service4,
      icon: Zap,
      color: "#475569", // Blue-gray to represent metal/steel instead of red
      features: [
        "TIG/MIG/Arc Welding",
        "Stainless Steel & Aluminum",
        "Structural Steel Welding",
        "Pipeline Welding",
        "Quality Testing & Inspection",
        "Certified Welders"
      ],
      process: [
        { step: 1, title: "Material Assessment", description: "Evaluate materials and welding requirements" },
        { step: 2, title: "Technique Selection", description: "Choose appropriate welding method" },
        { step: 3, title: "Surface Preparation", description: "Clean and prepare surfaces for welding" },
        { step: 4, title: "Precision Welding", description: "Execute welding with precision" },
        { step: 5, title: "Quality Testing", description: "Non-destructive testing and inspection" },
        { step: 6, title: "Finishing & Protection", description: "Surface finishing and corrosion protection" }
      ],
      stats: [
        { icon: Clock, value: "5000+", label: "Welding Projects" },
        { icon: Users, value: "30+", label: "Certified Welders" },
        { icon: Shield, value: "ASME", label: "Certified" }
      ],
      testimonials: [
        {
          name: "Michael Chen",
          position: "Operations Director, SteelWorks",
          content: "The welding quality is exceptional. Their team's expertise and attention to detail have significantly improved our product durability.",
          rating: 5
        },
        {
          name: "Emily Rodriguez",
          position: "Quality Manager, Precision Fabricators",
          content: "We've been working with them for years. Their certified welders consistently deliver flawless results that meet our strict standards.",
          rating: 5
        }
      ],
      faq: [
        {
          question: "What welding certifications do your welders hold?",
          answer: "Our welders are certified with AWS, ASME, and ISO standards, ensuring they meet industry requirements for various welding applications."
        },
        {
          question: "Can you weld specialized materials like titanium or exotic alloys?",
          answer: "Yes, we have experience with a wide range of materials including titanium, nickel alloys, and other exotic metals for specialized applications."
        }
      ]
    },
    "firefighting": {
      title: "Firefighting Systems",
      description: "Comprehensive fire protection systems design, installation, and maintenance to meet industrial safety standards.",
      fullDescription: "We design, install, and maintain complete fire protection systems for industrial facilities, commercial buildings, and residential complexes. Our solutions include fire detection, alarm systems, suppression systems, and emergency response planning.",
      image: service11,
      icon: Flame,
      color: "#1e40af", // Deep blue to represent safety/protection instead of red
      features: [
        "Fire Detection Systems",
        "Alarm & Notification Systems",
        "Fire Suppression Systems",
        "Emergency Lighting",
        "Regular Maintenance",
        "Safety Compliance"
      ],
      process: [
        { step: 1, title: "Risk Assessment", description: "Evaluate fire risks and requirements" },
        { step: 2, title: "System Design", description: "Design customized fire protection system" },
        { step: 3, title: "Equipment Installation", description: "Install fire detection and suppression systems" },
        { step: 4, title: "System Integration", description: "Integrate with building systems" },
        { step: 5, title: "Testing & Commissioning", description: "Comprehensive system testing" },
        { step: 6, title: "Training & Maintenance", description: "Staff training and maintenance plans" }
      ],
      stats: [
        { icon: Clock, value: "300+", label: "Systems Installed" },
        { icon: Users, value: "NFPA", label: "Compliant" },
        { icon: Shield, value: "24/7", label: "Support" }
      ],
      testimonials: [
        {
          name: "Robert Taylor",
          position: "Safety Director, Manufacturing Plus",
          content: "Their firefighting systems have given us peace of mind. The installation was professional and the ongoing support is excellent.",
          rating: 5
        },
        {
          name: "Lisa Anderson",
          position: "Facility Manager, Commercial Properties",
          content: "The fire protection system they designed for our property is comprehensive and meets all regulatory requirements. Highly recommended.",
          rating: 5
        }
      ],
      faq: [
        {
          question: "How often should fire protection systems be inspected?",
          answer: "We recommend quarterly inspections for critical components and annual comprehensive inspections to ensure optimal performance and compliance."
        },
        {
          question: "Do you provide emergency response services?",
          answer: "While we don't provide emergency firefighting services, we ensure your systems are optimized to work seamlessly with local emergency services."
        }
      ]
    },
    "security-electrical": {
      title: "Security & Electrical",
      description: "Integrated security and electrical systems providing smart, efficient, and complete facility management solutions.",
      fullDescription: "We provide integrated security and electrical solutions including CCTV surveillance, access control systems, electrical wiring, power distribution, and smart building automation for enhanced safety and efficiency.",
      image: service9,
      icon: SecurityShield,
      color: "#2563eb", // Slightly darker blue for a more professional look
      features: [
        "CCTV Surveillance Systems",
        "Access Control Solutions",
        "Electrical Wiring & Panels",
        "Power Distribution",
        "Smart Automation",
        "24/7 Monitoring"
      ],
      process: [
        { step: 1, title: "Site Survey", description: "Comprehensive site assessment" },
        { step: 2, title: "System Design", description: "Design integrated security and electrical systems" },
        { step: 3, title: "Installation", description: "Professional installation of all components" },
        { step: 4, title: "Integration", description: "System integration and configuration" },
        { step: 5, title: "Testing", description: "Thorough testing and optimization" },
        { step: 6, title: "Training", description: "Client training and handover" }
      ],
      stats: [
        { icon: Clock, value: "400+", label: "Installations" },
        { icon: Users, value: "Smart", label: "Solutions" },
        { icon: Shield, value: "UL", label: "Certified" }
      ],
      testimonials: [
        {
          name: "David Kim",
          position: "IT Director, Tech Innovations",
          content: "The integrated security and electrical system has transformed our facility operations. Everything works seamlessly together.",
          rating: 5
        },
        {
          name: "Jennifer Martinez",
          position: "Operations Manager, Logistics Hub",
          content: "Their smart automation solutions have improved our efficiency significantly. The installation was smooth and the support is outstanding.",
          rating: 5
        }
      ],
      faq: [
        {
          question: "Can you integrate with existing security systems?",
          answer: "Yes, we specialize in integrating new components with existing systems to create a cohesive security and electrical infrastructure."
        },
        {
          question: "Do you offer remote monitoring services?",
          answer: "We provide 24/7 remote monitoring options for all our security systems, with immediate alerts and response protocols in place."
        }
      ]
    },
    "sandblasting-coating": {
      title: "Sandblasting & Coating",
      description: "Surface preparation and protective coating services to extend equipment lifespan and prevent corrosion in harsh environments.",
      fullDescription: "Our sandblasting and coating services protect industrial equipment, structures, and machinery from corrosion, wear, and environmental damage. We use advanced techniques and high-quality materials for long-lasting protection.",
      image: service5,
      icon: Droplets,
      color: "#64748b", // Gray-blue to represent industrial surfaces instead of purple
      features: [
        "Surface Preparation",
        "Abrasive Blasting",
        "Protective Coatings",
        "Corrosion Prevention",
        "Quality Inspection",
        "Custom Solutions"
      ],
      process: [
        { step: 1, title: "Surface Assessment", description: "Evaluate surface condition and requirements" },
        { step: 2, title: "Preparation", description: "Surface cleaning and preparation" },
        { step: 3, title: "Sandblasting", description: "Abrasive blasting for optimal surface" },
        { step: 4, title: "Coating Application", description: "Apply protective coatings" },
        { step: 5, title: "Curing", description: "Proper curing and drying" },
        { step: 6, title: "Quality Check", description: "Final inspection and testing" }
      ],
      stats: [
        { icon: Clock, value: "1000+", label: "Projects" },
        { icon: Users, value: "ISO", label: "Standards" },
        { icon: Shield, value: "5+", label: "Year Warranty" }
      ],
      testimonials: [
        {
          name: "Thomas Wilson",
          position: "Maintenance Manager, Heavy Industries",
          content: "The sandblasting and coating work has significantly extended the life of our equipment. Excellent quality and service.",
          rating: 5
        },
        {
          name: "Amanda Brown",
          position: "Operations Director, Marine Services",
          content: "Their corrosion protection solutions are outstanding. Our equipment withstands harsh marine conditions much better now.",
          rating: 5
        }
      ],
      faq: [
        {
          question: "How long does the coating protection last?",
          answer: "Depending on the coating system and environmental conditions, our protective coatings typically last 5-10 years before requiring maintenance."
        },
        {
          question: "Do you offer mobile sandblasting services?",
          answer: "Yes, we have mobile sandblasting units that can be brought to your site for on-site surface preparation and coating application."
        }
      ]
    },
    "manpower-rental": {
      title: "Manpower Solutions",
      description: "Reliable manpower solutions providing skilled, certified professionals for industrial operations and project requirements.",
      fullDescription: "We provide skilled manpower solutions for various industrial sectors including construction, manufacturing, maintenance, and operations. Our workforce includes certified professionals, technicians, and skilled laborers ready to meet your project needs.",
      image: service6,
      icon: ManpowerUsers,
      color: "#059669", // Darker green for a more professional look
      features: [
        "Skilled Professionals",
        "Certified Technicians",
        "Flexible Staffing",
        "Quality Assurance",
        "Timely Deployment",
        "Continuous Support"
      ],
      process: [
        { step: 1, title: "Requirement Analysis", description: "Understand client manpower needs" },
        { step: 2, title: "Candidate Selection", description: "Select qualified professionals" },
        { step: 3, title: "Screening & Verification", description: "Background checks and verification" },
        { step: 4, title: "Deployment", description: "Timely deployment of manpower" },
        { step: 5, title: "Performance Monitoring", description: "Continuous performance assessment" },
        { step: 6, title: "Support & Replacement", description: "Ongoing support and replacements" }
      ],
      stats: [
        { icon: Clock, value: "500+", label: "Professionals" },
        { icon: Users, value: "24/7", label: "Availability" },
        { icon: Shield, value: "95%", label: "Client Retention" }
      ],
      testimonials: [
        {
          name: "Richard Garcia",
          position: "HR Director, Manufacturing Solutions",
          content: "Their manpower solutions have been invaluable for our peak production periods. The professionals they provide are skilled and reliable.",
          rating: 5
        },
        {
          name: "Patricia Lee",
          position: "Project Manager, Construction Plus",
          content: "We've used their temporary staffing for multiple projects. The quality of personnel and the support they provide is exceptional.",
          rating: 5
        }
      ],
      faq: [
        {
          question: "How quickly can you deploy manpower?",
          answer: "We can typically deploy qualified personnel within 48-72 hours for standard requests, and even faster for emergency situations."
        },
        {
          question: "Do you provide specialized technical personnel?",
          answer: "Yes, we have a database of specialized technicians and professionals across various industrial sectors with specific certifications and expertise."
        }
      ]
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          {/* <Link to="/services" className="text-blue-600 hover:text-blue-800">
            Back to Services
          </Link> */}
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Sticky Navigation */}
      <motion.nav 
        className="sticky top-0 z-50 bg-white shadow-sm border-b"
        style={{ opacity: Math.min(1, scrollY / 100) }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-6">
              {/* <Link
                to="/services"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Services
              </Link> */}
              
              {/* Breadcrumb Navigation */}
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link to="/services" className="text-gray-500 hover:text-gray-700">
                  Services
                </Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 font-medium">{service.title}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Need help?</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                style={{ backgroundColor: service.color }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax Effect */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${service.color}20 0%, transparent 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-3 rounded-lg mr-4 shadow-lg"
                  style={{ backgroundColor: service.color }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {service.title}
                </h1>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Stats with Animation */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {service.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="mx-auto mb-2 p-2 rounded-full inline-flex"
                      style={{ backgroundColor: `${service.color}20` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="h-6 w-6" style={{ color: service.color }} />
                    </motion.div>
                    <motion.div 
                      className="text-2xl font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center"
                >
                  <Info className="h-5 w-5 mr-2" />
                  Download Brochure
                </motion.button>
              </div>
            </motion.div>

            {/* Image with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div 
                  className="absolute inset-0 rounded-2xl border-2 opacity-20"
                  style={{ borderColor: service.color }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-sm font-medium">Click to view gallery</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {["overview", "features", "process", "testimonials", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                style={{ 
                  borderBottomColor: activeTab === tab ? service.color : "transparent",
                  color: activeTab === tab ? service.color : ""
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    About Our {service.title} Service
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our team of experienced professionals is committed to delivering exceptional results that meet your specific requirements. We use latest technologies and industry best practices to ensure quality, efficiency, and safety in every project we undertake.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: service.color }} />
                      <p className="text-gray-700">Industry-leading expertise with years of experience</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: service.color }} />
                      <p className="text-gray-700">Customized solutions tailored to your specific needs</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: service.color }} />
                      <p className="text-gray-700">Commitment to quality, safety, and timely delivery</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: service.color }} />
                      <p className="text-gray-700">Competitive pricing with transparent cost structures</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div 
                          className="p-3 rounded-lg mr-4"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <Award className="h-6 w-6" style={{ color: service.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Certified Professionals</h4>
                          <p className="text-gray-600 text-sm">Our team consists of certified professionals with extensive experience in the industry.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div 
                          className="p-3 rounded-lg mr-4"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <TrendingUp className="h-6 w-6" style={{ color: service.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                          <p className="text-gray-600 text-sm">We have a proven track record of successfully completing projects for clients across various industries.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div 
                          className="p-3 rounded-lg mr-4"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <Shield className="h-6 w-6" style={{ color: service.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                          <p className="text-gray-600 text-sm">We adhere to strict quality standards and ensure that all our services meet or exceed industry requirements.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our <span style={{ color: service.color }}>Capabilities</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive solutions tailored to meet your specific requirements
                </p>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}20` }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <CheckCircle className="h-6 w-6" style={{ color: service.color }} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Professional implementation with quality assurance and timely delivery.
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our <span style={{ color: service.color }}>Process</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Step-by-step approach ensuring quality and efficiency
                </p>
              </motion.div>

              <div className="relative">
                {/* Process Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <motion.div 
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center mb-4">
                          <motion.div 
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 z-10"
                            style={{ backgroundColor: service.color }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          >
                            {step.step}
                          </motion.div>
                          <div className="hidden lg:block flex-1 h-1 bg-gray-200" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Client <span style={{ color: service.color }}>Testimonials</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  What our clients say about our {service.title} service
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 mr-2" style={{ color: service.color, opacity: 0.5 }} />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked <span style={{ color: service.color }}>Questions</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Common questions about our {service.title} service
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                {service.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm"
                          style={{ backgroundColor: service.color }}
                        >
                          Q
                        </div>
                        {item.question}
                      </h3>
                      <div className="pl-11">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related <span style={{ color: service.color }}>Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our other services that might interest you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(servicesData)
              .filter(s => s.title !== service.title)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedService.image}
                      alt={relatedService.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedService.description}
                    </p>
                    <Link
                      to={`/services/${relatedService.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      style={{ color: relatedService.color }}
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for a free consultation and let's discuss how we can help with your {service.title} needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </motion.button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Certified Professionals</span>
              </div>
            </div>
          </motion.div>
        </div> */}
      </section>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg"
            style={{ backgroundColor: service.color }}
          >
            <ArrowUp className="h-6 w-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDetail;