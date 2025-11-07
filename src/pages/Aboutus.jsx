"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  Target, 
  Shield, 
  Clock, 
  CheckCircle,
  Building,
  TrendingUp,
  Handshake,
  Lightbulb,
  ArrowRight,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Star
} from "lucide-react";

// Import images
import aboutHero from "../assets/Images/aboutus/abouthero.jpg"
import teamImage from "../assets/Images/aboutus/faculty.jpg";
import facilityImage from "../assets/Images/aboutus/faculty.jpg";

const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Company data
  const companyStats = [
    { icon: Calendar, value: "15+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Professionals" },
    { icon: Building, value: "1000+", label: "Projects" },
    { icon: Award, value: "50+", label: "Awards" }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Prioritizing safety in every project for team and client well-being",
      color: "#1e40af"
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description: "Delivering exceptional quality that exceeds industry standards",
      color: "#d97706"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Building trust through transparent communication and ethics",
      color: "#059669"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technology and creative solutions",
      color: "#7c3aed"
    }
  ];

  const teamMembers = [
    {
      name: "John Anderson",
      position: "CEO & Founder",
      experience: "20+ years"
    },
    {
      name: "Sarah Mitchell",
      position: "COO",
      experience: "18+ years"
    },
    {
      name: "Michael Chen",
      position: "Technical Director",
      experience: "15+ years"
    },
    {
      name: "Emily Rodriguez",
      position: "HR Director",
      experience: "12+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              About <span className="text-blue-600">Startup</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Leading industrial construction with innovation, precision, and unwavering commitment to excellence for over 15 years.
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2009, ConstructPro began with a vision to revolutionize industrial construction. 
                What started as a small team with big dreams has grown into an industry leader trusted by 
                clients worldwide.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our journey is built on a foundation of excellence, innovation, and an unwavering commitment 
                to delivering exceptional results. Every project reflects our dedication to quality and 
                client satisfaction.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">Quality Focused</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">Growth Mindset</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <img
                src={facilityImage}
                alt="Our Facility"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}10` }}
                >
                  <value.icon className="h-6 w-6" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Leadership <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced professionals driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-slate-100 rounded-xl p-8 mb-4">
                  <Users className="h-12 w-12 text-slate-400 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-slate-600">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-16 bg-white border-t border-gray-200">
  <div className="max-w-3xl mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
      Start Your Project
    </h2>
    <p className="text-gray-600 mb-6">
      Let's discuss your industrial project requirements.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        <Phone className="h-4 w-4 mr-2 inline" />
        Contact Us
      </button>
      <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-gray-400 transition-colors">
        <Mail className="h-4 w-4 mr-2 inline" />
        Get Quote
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutPage;