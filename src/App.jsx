import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/Navbar';
import BusinessPortfolio from "./Components/Home/Hero"
import ServicesDetails from './pages/ServicesDetails';
import Home from './pages/Home';
import Footer from './Components/Common/Footer';
import Services from './pages/Services';
import AboutPage from './pages/Aboutus';
import ContactPage from './pages/Contactus';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/services" element={<Services/>} />  
        <Route path="/about-us" element={<AboutPage/>} />  
        <Route path="/contact-us" element={<ContactPage/>} />  
         <Route path="/services/:serviceId" element={<ServicesDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
