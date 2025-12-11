import React from 'react';
import './WhyUs.css';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <section className="why-us-section" id="about">
      <div className="container why-us-container">
        
        <div className="why-title-wrapper">
          <motion.h2 
            className="why-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why <br /> Choosing Us
          </motion.h2>
        </div>

        <div className="features-grid">
          {[ 
            { title: "Luxury facilities", text: "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities." },
            { title: "Affordable Price", text: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here." },
            { title: "Many Choices", text: "We provide many unique work space choices so that you can choose the workspace to your liking." }
          ].map((item, index) => (
            <motion.div 
              className="feature-item" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="feature-head">{item.title}</h3>
              <p className="feature-text">{item.text}</p>
              <a href="#" className="more-info-btn">More Info <span className="arrow">⟶</span></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;