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

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
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
              Software Engineering Intern & ECE Student
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
              in full-stack development and system optimization.
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
            <div className="relative">
              <motion.img
                src="/Profile2.png"
                alt="Roshan Lal Kalluri"
                className="h-[60vh] justify-center w-auto object-cover shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
              <div 
                className={`pointer-events-none absolute inset-0 transition-opacity duration-200 ${
                  isHovering ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: `radial-gradient(circle 100px at ${mousePosition.x}% ${mousePosition.y}%, 
                    #FFDE597C 0%, 
                    #FFDE590D 40%, 
                    transparent 100%)`,
                  filter: 'blur(20px)'
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};