'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Zap } from 'lucide-react';

export const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, scalable code following industry best practices."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding innovative solutions."
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and frameworks to stay current."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Hello! I'm Roshan Lal Kalluri
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm an undergraduate student at IIIT Hyderabad pursuing B.Tech in Electronics 
                  and Communication Engineering. I'm passionate about software development, 
                  machine learning, and data processing with a strong foundation in both 
                  theoretical concepts and practical implementation.
                </p>
                <p>
                  Currently, I'm gaining industry experience as a Software Engineering Intern at Uber, 
                  where I work on optimizing large-scale data pipelines and developing anti-pattern 
                  detection tools. My journey spans from low-level processor architecture to 
                  high-level machine learning applications.
                </p>
                <p>
                  I enjoy tackling complex problems, from building full-stack applications to 
                  designing custom processors in Verilog. I'm always eager to learn new 
                  technologies and contribute to innovative projects.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8.16</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div className="space-y-6" variants={itemVariants}>
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};