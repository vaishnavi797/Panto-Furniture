import React from 'react';
import './Experiences.css';
import { motion } from 'framer-motion'; 

import experienceImg from '../assets/experience.png'; 

const Experiences = () => {
  return (
    <section className="experiences-section">
      <div className="container experiences-container">
        
        <motion.div 
          className="experiences-image-wrapper"
          initial={{ opacity: 0, x: -100 }}      
          whileInView={{ opacity: 1, x: 0 }}     
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}             
        >
          <div className="bg-blob blob-top"></div>
          <div className="bg-blob blob-bottom"></div>
          <img 
            src={experienceImg} 
            alt="We Provide The Best Experience" 
            className="main-experience-img" 
          />
        </motion.div>

        <motion.div 
          className="experiences-content"
          initial={{ opacity: 0, x: 100 }}       
          whileInView={{ opacity: 1, x: 0 }}     
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <span className="exp-subtitle">EXPERIENCES</span>
          <h2 className="exp-title">We Provide You The <br /> Best Experience</h2>
          <p className="exp-description">
            You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.
          </p>
          <a href="#" className="exp-link">
            More Info <span className="arrow">⟶</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experiences;