import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaChevronDown, FaRocket, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import LogoImage from "../../assets/Images/logo.png"

const BusinessPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({ code: 'en', name: 'English', flag: 'us' });
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle language change
  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setIsLangDropdownOpen(false);
    
    // Change page direction for Arabic
    if (lang.code === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  };

  // Handle navigation
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'en', name: 'English', flag: 'us' },
    { code: 'ar', name: 'العربية', flag: 'sa' }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white/90 backdrop-blur-sm shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo with Full Width Custom Image */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="relative h-10 w-32 sm:h-12 sm:w-40 lg:h-14 lg:w-48 rounded-lg overflow-hidden   transition-all duration-300 group-hover:-translate-y-0.5">
                <img 
                  src={LogoImage} 
                  alt="BusinessPro Logo"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-500 group ${
                      activeSection === item.id ? 'text-blue-500' : ''
                    }`}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${
                        activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      } -translate-x-1/2`}
                    ></span>
                  </button>
                </li>
              ))}
              
              {/* Language Switcher */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group overflow-hidden"
                >
                  <img 
                    src={`https://flagcdn.com/w20/${currentLang.flag}.png`} 
                    alt={currentLang.name}
                    className="w-5 h-5 rounded-full border-2 border-white/30"
                  />
                  <span>{currentLang.code.toUpperCase()}</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${
                    isLangDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </button>
                
                {/* Dropdown */}
                <div className={`absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${
                  isLangDropdownOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                    >
                      <FaGlobe className="text-lg" />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1 p-2"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}>
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2 text-gray-700 font-medium transition-colors duration-200 hover:text-blue-500 hover:bg-blue-50 rounded-lg ${
                    activeSection === item.id ? 'text-blue-500 bg-blue-50' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-4 pt-2">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium text-sm shadow-md w-full justify-center"
                >
                  <img 
                    src={`https://flagcdn.com/w20/${currentLang.flag}.png`} 
                    alt={currentLang.name}
                    className="w-5 h-5 rounded-full border-2 border-white/30"
                  />
                  <span>{currentLang.code.toUpperCase()}</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${
                    isLangDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isLangDropdownOpen && (
                  <div className="mt-2 bg-white rounded-xl shadow-lg overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang)}
                        className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                      >
                        <FaGlobe className="text-lg" />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

    


      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BusinessPortfolio;