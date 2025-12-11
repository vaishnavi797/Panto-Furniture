import React, { useState } from 'react';
import './Header.css';
import heroBg from '../assets/hero-bg.png';
import { motion } from 'framer-motion'; 
import logoImg from '../assets/logo.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 
      }
    }
  };

  return (
    <header className="header-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <nav className="navbar">
        <div className="container nav-container">
          <img src={logoImg} alt="Panto Logo" className="logo-img" />
          <div className="logo1">Panto</div>
          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#furniture" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                Furniture 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </a>
            </li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="cart-icon">
            <span className="bag-icon">👜</span>
            <span className="cart-badge">0</span>
          </div>
        </div>
      </nav>

      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 className="hero-title" variants={fadeUp}>
          Make Your Interior More <br /> Minimalistic & Modern
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={fadeUp}>
          Turn your room with panto into a lot more minimalist <br />
          and modern with ease and speed
        </motion.p>

        <motion.div className="search-bar" variants={fadeUp}>
          <input type="text" placeholder="Search furniture" />
          <button className="search-btn">🔍</button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;