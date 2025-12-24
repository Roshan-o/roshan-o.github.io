'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const Experience = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const experiences = [
      {
          title: "UberStar Software Engineering Intern",
          company: "Uber",
          period: "May 2025 - Jul 2025",
          location: "Bangalore, India",
          type: "Internship",
          opacity: "0.3", 
          description: "Developed data processing optimization tools for large-scale pipelines at one of the world's leading ride-sharing companies. Focused on identifying and resolving inefficiencies in data processing workflows.",
          technologies: ["Python", "Data Processing", "SQLGlot", "Pipeline Optimization", "Performance Analysis"],
          achievements: [
              "Developed a Data Processing Anti-Pattern Detection Tool to identify and resolve inefficiencies in large-scale data pipelines",
              "Optimized projection pushdown by detecting and eliminating unused columns, reducing unnecessary materialization and improving pipeline efficiency",
              "Mitigated repeated CTE processing by identifying Common Table Expressions (CTEs) and views that triggered multiple database fetches, recommending conversion to cached tables to lower execution cost and enhance performance"
            ]
        },
        {
          title: "Research Assistant",
          company: "Virtual Labs",
          period: "Jul 2025 - Dec 2025",
          location: "Remote, India",
          type: "Research",
          opacity: "0.2", 
          description: "Developing experimental frameworks and tools for educational technology research, focusing on user interaction analysis and data collection systems for educational experiments.",
          technologies: ["Next.js", "Excalidraw", "User Analytics", "Data Collection", "React"],
          achievements: [
            "Developed a reusable Next.js-based experimental template to support multiple user studies, enabling systematic collection and logging of user interaction and activity data throughout experiments",
            "Customized the open-source Excalidraw tool for MapCode experiments by restricting available drawing features and implementing mechanisms to capture and store user data after drawing for analysis"
          ]
        },
    ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                } md:w-1/2`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center ${
                  index % 2 === 0 
                    ? 'left-0 md:left-auto md:right-0 transform md:translate-x-4' 
                    : 'left-0 md:left-0 transform md:-translate-x-4'
                }`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Experience Card */}
                <motion.div
                  className="ml-12 md:ml-0 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                  style={{
                    background: `rgba(30, 58, 138, ${exp.opacity})`,
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(59, 130, 246, 0.3)'
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 dark:bg-gray-700 text-gray-800 dark:text-gray-800 rounded-md text-sm border-2 border-blue-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};