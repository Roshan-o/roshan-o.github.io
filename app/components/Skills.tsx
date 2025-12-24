'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Globe, Wrench } from 'lucide-react';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      icon: Globe,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 88 },
        { name: "C++", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Verilog", level: 80 }
      ]
    },
    {
      icon: Server,
      title: "Frameworks & Technologies",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-Learn", level: 85 },
        { name: "Flask", level: 80 },
        { name: "MongoDB Atlas", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "VSCode", level: 95 },
        { name: "Linux", level: 80 },
        { name: "Arduino", level: 75 },
        { name: "SQLGlot", level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: "Specialized Skills",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Data Processing", level: 85 },
        { name: "Digital Systems", level: 80 },
        { name: "Pipeline Optimization", level: 75 },
        { name: "MATLAB", level: 70 }
      ]
    }
  ];

  const technologies = [
    "Python", "JavaScript", "C", "C++", "HTML/CSS", "Verilog", "MATLAB",
    "React.js", "Express.js", "Flask", "PyTorch", "Scikit-Learn", "MongoDB Atlas",
    "SQLGlot", "GitHub", "VSCode", "Linux", "Arduino", "Canva"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 ">
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
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Learning</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8.16</div>
                <div className="text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};