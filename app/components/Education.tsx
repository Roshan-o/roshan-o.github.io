'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
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

  const education = [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "International Institute of Information Technology, Hyderabad",
      period: "Jul 2023 - Jul 2027",
      location: "Hyderabad, India",
      gpa: "8.16/10",
      description: "Currently pursuing B.Tech in Electronics and Communication Engineering with a focus on digital systems, signal processing, and software development. Strong academic performance with consistent merit list recognition.",
      coursework: [
        "Data Structures and Algorithms",
        "Digital Image Processing",
        "Processor Architecture",
        "Statistical Methods in AI",
        "Digital Systems & Microcontrollers",
        "Probability and Random Processes"
      ],
      achievements: [
        "Merit list student (Spring 2024, Monsoon 2025)",
        "Top 5 Teams of Megathon (Oct 2025)",
        "Active member of Entrepreneurship Cell"
      ]
    },
    {
      degree: "Pre-University Course",
      institution: "Rajiv Gandhi University of Knowledge and Technologies",
      period: "Jun 2021 - Jul 2023",
      location: "India",
      gpa: "9.64/10",
      description: "Completed pre-university education with outstanding academic performance, laying a strong foundation in mathematics, physics, and computer science.",
      coursework: [
        "Mathematics",
        "Physics",
        "Computer Science",
        "Chemistry",
        "English"
      ],
      achievements: [
        "Achieved exceptional CGPA of 9.64/10",
        "Strong foundation in STEM subjects",
        "Prepared for advanced engineering studies"
      ]
    }
  ];

  const relevantCoursework = [
    "Data Structures and Algorithms",
    "Algorithms and Operating Systems",
    "Digital Image Processing",
    "C Programming",
    "Intro to Processor Architecture",
    "Statistical Methods in AI",
    "Digital Systems & Microcontrollers",
    "Probability and Random Processes",
    "Linear Algebra"
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white-primary mb-8 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" size={28} />
                Education
              </h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="dialog-box rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white-primary mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white-muted mb-2">
                        <div className="flex items-center">
                          <GraduationCap size={16} className="mr-1" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          <span>{edu.location}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">
                          {edu.gpa}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Relevant Coursework:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Achievements:
                      </h5>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Relevant Coursework */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white-primary mb-8 flex items-center">
                <Award className="mr-3 text-blue-600" size={28} />
                Relevant Coursework
              </h3>

              <div className="dialog-box rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relevantCoursework.map((course, index) => (
                    <motion.div
                      key={index}
                      className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        {course}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};