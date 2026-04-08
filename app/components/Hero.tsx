'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Content Side */}
          <motion.div 
            className="text-center justify-center w-fit mx-auto lg:text-left"
            variants={itemVariants}
          >
            {/* Name and Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white-primary mb-4"
              variants={itemVariants}
            >
              Roshan Lal Kalluri
            </motion.h1>

            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl text-blue-400 font-semibold mb-6"
              variants={itemVariants}
            >
              Junior at IIIT Hyderabad
            </motion.h2>

            {/* Location */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start text-white-muted mb-6"
              variants={itemVariants}
            >
              <MapPin size={20} className="mr-2" />
              <span>Hyderabad, India</span>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg text-white-secondary max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Undergraduate student at IIIT Hyderabad pursuing B.Tech in Electronics and Communication Engineering. 
              Passionate about software development, machine learning, and data processing with hands-on experience 
              in full-stack development, system optimization, Machine Learning and AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              variants={itemVariants}
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-glow inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image Side */}
          <motion.div
            className="flex justify-center w-fit mx-auto"
            variants={itemVariants}
          >
            <div 
              className="relative rounded-2xl overflow-hidden group shadow-2xl"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Grayscale Base Image */}
              <img
                src="/Profile4.jpeg"
                alt="Roshan Lal Kalluri"
                className="h-[60vh] w-auto object-cover grayscale shadow-2xl transition-all duration-700"
                style={{ filter: 'grayscale(70%)' }}
              />
              
              {/* Color Image with Ripple Mask */}
              <motion.img
                src="/Profile4.jpeg"
                alt="Roshan Lal Kalluri"
                className="absolute inset-0 h-[60vh] w-auto object-cover z-10 pointer-events-none"
                initial={false}
                animate={{
                  clipPath: isHovering 
                    ? `circle(150% at ${mousePosition.x}% ${mousePosition.y}%)`
                    : `circle(0% at ${mousePosition.x}% ${mousePosition.y}%)`,
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeOut" 
                }}
              />

              {/* Subtle Water Ripple Edge Effect */}
              {isHovering && (
                <motion.div
                  className="pointer-events-none absolute inset-0 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [0, 2],
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{
                    position: 'absolute',
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    width: '200px',
                    height: '200px',
                    marginLeft: '-100px',
                    marginTop: '-100px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(8px)'
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};