'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "roshanlalkalluri@gmail.com",
      link: "mailto:roshanlalkalluri@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8328525761",
      link: "tel:+918328525761"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India",
      link: "https://maps.google.com/?q=Hyderabad,India"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Roshan-o",
      color: "hover:text-black"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kalluri-roshan-lal",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:roshanlalkalluri@gmail.com",
      color: "hover:text-red-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 ">
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
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-white-secondary max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white-primary mb-8">
                Let's Connect
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.title === 'Location' ? '_blank' : '_self'}
                    rel={item.title === 'Location' ? 'noopener noreferrer' : ''}
                    className="dialog-box flex items-center p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.title}</div>
                      <div className="text-gray-900 dark:text-white font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-black ${social.color}`}
                      whileHover={{ y: -3, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>

            </motion.div>
            
            {/* Availability */}
            <motion.div variants={itemVariants} className="flex flex-col justify-start">
              <h3 className="text-2xl font-semibold text-white-primary mb-8">
                Available for new opportunities
              </h3>
              <motion.div
                className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-green-700 dark:text-green-300 text-sm">
                  I'm currently open to full-time positions, freelance projects, and consulting opportunities.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    );
}