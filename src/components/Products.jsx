import React, { useState } from 'react';
import './Products.css';
import { motion } from 'framer-motion'; 

import chair1 from '../assets/chair1.png'; 
import chair2 from '../assets/chair2.png'; 
import chair3 from '../assets/chair3.png'; 
import chair4 from '../assets/chair4.png'; 

import bed1 from '../assets/bed1.png'; 
import bed2 from '../assets/bed2.png'; 
import bed3 from '../assets/bed3.png'; 
import bed4 from '../assets/bed4.png'; 

import sofa1 from '../assets/sofa1.png'; 
import sofa2 from '../assets/sofa2.png'; 
import sofa3 from '../assets/sofa3.png'; 
import sofa4 from '../assets/sofa4.png'; 

import lamp1 from '../assets/lamp1.png'; 
import lamp2 from '../assets/lamp2.png'; 
import lamp3 from '../assets/lamp3.png'; 
import lamp4 from '../assets/lamp4.png'; 

const Products = () => {
  const categories = ['Chair', 'Beds', 'Sofa', 'Lamp'];
  const [activeTab, setActiveTab] = useState('Chair');

  const allProducts = {
    Chair: [
      { id: 1, category: 'Chair', name: 'Sakarias Armchair', rating: 5, price: 392, img: chair1 },
      { id: 2, category: 'Chair', name: 'Baltsar Chair', rating: 5, price: 299, img: chair2 },
      { id: 3, category: 'Chair', name: 'Anjay Chair', rating: 5, price: 519, img: chair3 },
      { id: 4, category: 'Chair', name: 'Nyantuy Chair', rating: 5, price: 921, img: chair4 },
    ],
    Beds: [
      { id: 5, category: 'Beds', name: 'King Size Comfort', rating: 5, price: 850, img: bed1 },
      { id: 6, category: 'Beds', name: 'Minimalist Single', rating: 4, price: 420, img: bed2 },
      { id: 7, category: 'Beds', name: 'Luxury Queen', rating: 5, price: 990, img: bed3 },
      { id: 8, category: 'Beds', name: 'Bunk Bed Wood', rating: 4, price: 600, img: bed4 },
    ],
    Sofa: [
      { id: 9, category: 'Sofa', name: 'Modern Sectional', rating: 5, price: 1200, img: sofa1 },
      { id: 10, category: 'Sofa', name: 'Leather 2-Seater', rating: 4, price: 890, img: sofa2 },
      { id: 11, category: 'Sofa', name: 'Cozy Fabric Sofa', rating: 5, price: 750, img: sofa3 },
      { id: 12, category: 'Sofa', name: 'Lounge Recliner', rating: 5, price: 1100, img: sofa4 },
    ],
    Lamp: [
      { id: 13, category: 'Lamp', name: 'Nordic Table Lamp', rating: 5, price: 85, img: lamp1 },
      { id: 14, category: 'Lamp', name: 'Standing Floor Lamp', rating: 4, price: 150, img: lamp2 },
      { id: 15, category: 'Lamp', name: 'Bedside Light', rating: 5, price: 45, img: lamp3 },
      { id: 16, category: 'Lamp', name: 'Desk Reading Lamp', rating: 5, price: 65, img: lamp4 },
    ],
  };

  const handleNext = () => {
    const currentIndex = categories.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % categories.length; 
    setActiveTab(categories[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = categories.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length; 
    setActiveTab(categories[prevIndex]);
  };

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  const currentProducts = allProducts[activeTab];

  return (
    <section className="products-section" id="shop">
      <div className="container">
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Best Selling Product
        </motion.h2>

        <motion.div 
          className="tabs-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="tabs-pill">
            {categories.map((tab) => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="products-carousel">
          <motion.button 
            className="carousel-btn left-btn" 
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>

          <div className="products-grid">
            {currentProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="product-card"
                
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }} 
              >
                <div className="card-image">
                  <motion.img 
                    src={product.img} 
                    alt={product.name} 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="card-content">
                  <span className="card-category">{product.category}</span>
                  <h3 className="card-name">{product.name}</h3>
                  <div className="card-rating">{renderStars(product.rating)}</div>
                  
                  <div className="card-footer">
                    <div className="card-price">
                      <span className="currency">$</span> {product.price}
                    </div>
                    <motion.button 
                      className="add-btn"
                      whileHover={{ scale: 1.1, backgroundColor: "#E58411" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            className="carousel-btn right-btn" 
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>

        <div className="view-all-container">
          <motion.button 
            className="view-all-link" 
            onClick={handleNext}
            style={{border:'none', cursor:'pointer'}}
            whileHover={{ x: 5 }} 
          >
            View All <span>⟶</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Products;