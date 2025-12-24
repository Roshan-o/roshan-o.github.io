'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', 'Web Development', 'Machine Learning', 'Hardware'];

  const projects = [
    {
      title: "Churn Probability Predictor",
      category: "Machine Learning",
      description: "Built an end-to-end Flask-based data analysis platform enabling users to upload CSV files and obtain automated customer churn predictions through a web interface.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Flask", "Scikit-Learn", "XGBoost", "MLP", "SHAP"],
      features: [
        "CSV file upload and automated processing",
        "Machine learning models (XGBoost and MLP) for churn prediction",
        "SHAP-based explainability for feature importance analysis",
        "Performance metrics and prediction summaries"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Roshan-o",
      status: "Completed"
    },
    {
      title: "Buy Sell E-commerce Platform",
      category: "Web Development",
      description: "Designed and developed a full-stack e-commerce platform enabling customers to register, manage their accounts, and update personal information.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Express.js", "MongoDB Atlas", "Node.js"],
      features: [
        "User registration and account management",
        "Product listing and management",
        "Secure authentication system",
        "Cloud-based data storage"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Roshan-o",
      status: "Completed"
    },
    {
      title: "Voice Assistant",
      category: "Machine Learning",
      description: "Designed and implemented a voice-controlled assistant capable of interpreting audio commands and executing corresponding tasks.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Speech Recognition", "Natural Language Processing"],
      features: [
        "Voice command recognition and processing",
        "Email sending functionality",
        "IP address retrieval",
        "Web browsing and application launching"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Roshan-o",
      status: "Completed"
    },
    {
      title: "Processor Architecture Design",
      category: "Hardware",
      description: "Designed and implemented pipeline and sequential processor architectures using Verilog, addressing various data hazards for enhanced efficiency.",
      image: "/api/placeholder/400/250",
      technologies: ["Verilog", "Digital Design", "FPGA", "Hardware Architecture"],
      features: [
        "Custom processor with arithmetic operations",
        "Pipeline and sequential processor implementations",
        "Data hazard resolution (load-use, double data hazards)",
        "Support for logical and arithmetic operations"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Roshan-o",
      status: "Completed"
    },
    {
      title: "4Bit CLA Adder",
      category: "Hardware",
      description: "Designed and implemented two 4-bit adder designs using NGSpice for simulation and MAGIC for layout design, with successful FPGA implementation.",
      image: "/api/placeholder/400/250",
      technologies: ["Verilog", "NGSpice", "MAGIC", "FPGA", "Digital Design"],
      features: [
        "Two different 4-bit adder design implementations",
        "Circuit simulation using NGSpice",
        "Layout design using MAGIC tool",
        "Hardware implementation and verification on FPGA chips"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Roshan-o",
      status: "Completed"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white-primary mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-white-secondary max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <div className="flex items-center text-white-muted mr-4">
              <Filter size={20} className="mr-2" />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'dialog-box text-white-secondary hover:bg-blue-800/40 border border-blue-600/30'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="dialog-box rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 h-48">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white-primary">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-blue-900/60 text-blue-200 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-white-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white-primary mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside text-xs text-white-muted space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-900/40 text-white-secondary rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-blue-200 bg-blue-900/50 rounded-lg hover:bg-blue-800/60 transition-colors"
                    >
                      <Eye size={16} className="mr-1" />
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white-secondary bg-gray-800/50 rounded-lg hover:bg-gray-700/60 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <button className="btn-glow inline-flex items-center px-6 py-3 text-white-primary rounded-lg transition-all duration-300">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};