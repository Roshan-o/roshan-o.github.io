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
        { name: "Python", icon: "🐍", color: "text-yellow-400" },
        { name: "JavaScript", icon: "JS", color: "text-yellow-300" },
        { name: "C", icon: "C", color: "text-blue-400" },
        { name: "C++", icon: "C++", color: "text-blue-500" },
        { name: "HTML/CSS", icon: "🌐", color: "text-orange-500" },
        { name: "Verilog", icon: "V", color: "text-green-400" }
      ]
    },
    {
      icon: Server,
      title: "Frameworks & Technologies",
      skills: [
        { name: "React.js", icon: "⚛️", color: "text-cyan-400" },
        { name: "Express.js", icon: "Ex", color: "text-gray-300" },
        { name: "PyTorch", icon: "🔥", color: "text-red-500" },
        { name: "Scikit-Learn", icon: "📊", color: "text-orange-400" },
        { name: "Flask", icon: "🌶️", color: "text-gray-300" },
        { name: "MongoDB", icon: "🍃", color: "text-green-500" }
      ]
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", icon: "🐙", color: "text-gray-300" },
        { name: "VSCode", icon: "💻", color: "text-blue-500" },
        { name: "Linux", icon: "🐧", color: "text-yellow-400" },
        { name: "Arduino", icon: "🔌", color: "text-cyan-500" },
        { name: "SQLGlot", icon: "🗄️", color: "text-blue-400" }
      ]
    },
    {
      icon: Wrench,
      title: "Specialized Skills",
      skills: [
        { name: "Machine Learning", icon: "🤖", color: "text-orange-500" },
        { name: "Data Processing", icon: "📈", color: "text-blue-400" },
        { name: "Digital Systems", icon: "⚡", color: "text-purple-400" },
        { name: "Pipeline Optimization", icon: "⚙️", color: "text-blue-300" },
        { name: "MATLAB", icon: "📐", color: "text-orange-600" }
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white-primary mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-white-secondary max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="dialog-box rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-blue-900/30 rounded-lg p-3 flex items-center space-x-3 hover:bg-blue-800/40 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`text-xl font-bold ${skill.color}`}>
                        {skill.icon}
                      </span>
                      <span className="text-white-secondary font-medium text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            className="dialog-box rounded-xl shadow-lg p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white-primary mb-6 text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-blue-900/40 text-white-secondary rounded-full text-sm font-medium hover:bg-blue-800/60 hover:text-white-primary transition-colors cursor-default"
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
              <div className="dialog-box rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-white-muted">Years Learning</div>
              </div>
              <div className="dialog-box rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-white-muted">Technologies</div>
              </div>
              <div className="dialog-box rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-white-muted">Projects</div>
              </div>
              <div className="dialog-box rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">8.16</div>
                <div className="text-white-muted">CGPA</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};