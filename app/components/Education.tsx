'use client';

import React, { useState, useRef } from 'react';
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

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const education = [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "International Institute of Information Technology, Hyderabad",
      period: "Jul 2023 - Jul 2027",
      location: "Hyderabad, India",
      gpa: "8.16/10",
      description: "Currently pursuing B.Tech at IIIT Hyderabad with a focus on software development, Machine Learning and AI.",
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
        // "Achieved exceptional CGPA of 9.64/10",
        // "Strong foundation in STEM subjects",
        // "Prepared for advanced engineering studies"
      ]
    },


  ];

  return (
    <section id="education" className="py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-6" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white-primary mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          {/* Horizontal Scroll Education Container */}
          <div className="relative group">
            {/* Custom scrollbar hiding and container styling */}
            <motion.div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar items-stretch"
              variants={itemVariants}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="dialog-box rounded-xl transition-all duration-300 p-6 flex-shrink-0 w-full lg:w-[calc(50%-12px)] snap-start flex flex-col border border-white/5"
                  // whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.2)' }}
                  // transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-xl font-semibold text-white-primary">
                        {edu.degree}
                      </h4>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                        {edu.gpa}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white-muted mb-2">
                      <div className="flex items-center">
                        <GraduationCap size={16} className="mr-1 text-blue-500" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white-muted">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1 text-blue-500" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-blue-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    {edu.description}
                  </p>
                  
                  {/* Achievements */}
                  {edu.achievements.length > 0 && (
                    <div className="mt-auto border-t border-white/5 pt-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-blue-500" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start italic">
                            <span className="mr-2 text-blue-500">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Dots Indicator - Only visible if > 2 items on Desktop or > 1 on Mobile */}
            {education.length > 2 && (
              <div className="flex justify-center gap-2 mt-4">
                {education.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i ? 'bg-blue-600 w-6' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
};