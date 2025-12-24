'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

export const Hero = () => {
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

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">KRL</span>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          variants={itemVariants}
        >
          Roshan Lal Kalluri
        </motion.h1>

        <motion.h2 
          className="text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6"
          variants={itemVariants}
        >
          Software Engineering Intern & ECE Student
        </motion.h2>

        {/* Location */}
        <motion.div 
          className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6"
          variants={itemVariants}
        >
          <MapPin size={20} className="mr-2" />
          <span>Hyderabad, India</span>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Undergraduate student at IIIT Hyderabad pursuing B.Tech in Electronics and Communication Engineering. 
          Passionate about software development, machine learning, and data processing with hands-on experience 
          in full-stack development and system optimization.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
    </section>
  );
};