import React from 'react';
import './Materials.css';
import { motion } from 'framer-motion'; 

import mat1 from '../assets/material1.png'; 
import mat2 from '../assets/material2.png'; 
import mat3 from '../assets/material3.png'; 

const Materials = () => {
  return (
    <section className="materials-section">
      <div className="container materials-container">
        
        <motion.div 
          className="materials-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="mat-subtitle">MATERIALS</span>
          <h2 className="mat-title">Very Serious <br /> Materials For Making Furniture</h2>
          <p className="mat-description">
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price.
          </p>
          <a href="#" className="mat-link">
            More Info <span className="arrow">⟶</span>
          </a>
        </motion.div>

        <div className="materials-images">
            <div className="mat-bg-shape"></div>
            <div className="mat-col-small">
                <motion.img 
                  src={mat1} alt="Chair" className="mat-img small-img" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  viewport={{ once: true }}
                />
                
                <motion.img 
                  src={mat2} alt="Sofa" className="mat-img small-img" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }} 
                  viewport={{ once: true }}
                />
            </div>

            <div className="mat-col-large">
                <motion.img 
                  src={mat3} alt="Table" className="mat-img big-img" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }} 
                  viewport={{ once: true }}
                />
            </div>

        </div>

      </div>
    </section>
  );
};

export default Materials;