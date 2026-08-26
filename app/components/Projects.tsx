'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Github } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  // First project expanded by default
  const [expandedId, setExpandedId] = useState<string | null>('docpilot');

  const categories = ['All', 'Full Stack', 'Machine Learning', 'Hardware'];

  const projects: ProjectItem[] = [
    {
      id: 'docpilot',
      title: 'DocPilot — Document Intelligence Platform',
      category: 'Full Stack',
      date: 'Jan 2026',
      description:
        'A comprehensive document intelligence platform supporting automated document ingestion, semantic parsing, retrieval-augmented Q&A, context budgeting, AI-assisted editing, and cross-document synthesis.',
      features: [
        'Developed end-to-end document intelligence pipelines with RAG-based search, dynamic context allocation, and AI synthesis.',
        'Designed and implemented a robust pytest-based test suite covering core backend workflows, schema validation, and edge cases using mocked services and in-memory fixtures.',
        'Integrated GitHub Actions CI and Codecov to automate test coverage tracking and continuous quality assurance on every push.',
      ],
      technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Pytest', 'Codecov', 'GitHub Actions', 'RAG'],
      githubUrl: 'https://github.com/Roshan-o',
    },
    {
      id: 'churn-predictor',
      title: 'Churn Probability Predictor',
      category: 'Machine Learning',
      date: 'Oct 2025',
      description:
        'Built an end-to-end Flask-based data analysis and machine learning platform enabling users to upload CSV datasets and obtain automated customer churn predictions with transparent explainability.',
      features: [
        'Implemented high-performance XGBoost and Multilayer Perceptron (MLP) neural network models for predictive churn scoring.',
        'Integrated SHAP (SHapley Additive exPlanations) to provide feature importance analysis, interpretable model insights, and actionable retention recommendations.',
        'Automated CSV data preprocessing, cleaning, normalization, and visualization pipelines.',
      ],
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'MLP', 'SHAP', 'Flask', 'Pandas'],
      githubUrl: 'https://github.com/Roshan-o/churn-probabilty-predictor',
    },
    {
      id: 'buy-sell-platform',
      title: 'Buy Sell E-commerce Platform',
      category: 'Full Stack',
      date: 'Jan 2025',
      description:
        'Designed and developed a secure full-stack e-commerce marketplace with complete CRUD operations for user registration, account management, product inventory, and profile updates.',
      features: [
        'Enhanced platform security by hashing user credentials with bcrypt.js and implementing JWT-based session management for persistent, secure authentication.',
        'Engineered responsive catalog browsing with category filtering, search, and dynamic MongoDB Atlas data querying.',
        'Designed modular REST APIs using Express.js and Node.js for low-latency client-server interactions.',
      ],
      technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB Atlas', 'bcrypt.js', 'JWT', 'REST APIs'],
      githubUrl: 'https://github.com/Roshan-o/buy-sell',
    },
    {
      id: 'voice-assistant',
      title: 'V6 Voice Assistant',
      category: 'Machine Learning',
      date: '2024',
      description:
        'Designed and implemented an intelligent voice-controlled assistant capable of interpreting natural language audio commands and automating desktop workflows.',
      features: [
        'Speech recognition pipeline with noise cancellation and voice intent parsing.',
        'Automated email sending, network/IP querying, and application execution.',
        'System-level automation bindings via Python OS libraries.',
      ],
      technologies: ['Python', 'Speech Recognition', 'NLP', 'PyAudio', 'OS Automation'],
      githubUrl: 'https://github.com/Roshan-o/V6-assistant',
    },
    {
      id: 'processor-architecture',
      title: 'Pipelined Processor Architecture',
      category: 'Hardware',
      date: '2023',
      description:
        'Designed and implemented sequential and pipelined RISC processor architectures in Verilog with hazard detection and forwarding units for enhanced instruction throughput.',
      features: [
        'Engineered custom processor ALU supporting full arithmetic, branch, and logical operations.',
        'Resolved data hazards (load-use, double data hazards) through forwarding and hazard detection units.',
        'Simulated and verified timing diagrams with waveform analysis on FPGA development boards.',
      ],
      technologies: ['Verilog', 'Digital Design', 'FPGA', 'Hardware Architecture', 'ModelSim'],
      githubUrl: 'https://github.com/Roshan-o/Processor-architecture',
    },
    {
      id: 'cla-adder',
      title: '4-Bit Carry Lookahead Adder (CLA)',
      category: 'Hardware',
      date: '2023',
      description:
        'Designed and simulated high-speed 4-bit adder architectures using NGSpice for circuit simulation and MAGIC for VLSI silicon layout verification.',
      features: [
        'Propagate and Generate logic synthesis minimizing gate propagation delay.',
        'Transistor-level spice simulations verifying sub-nanosecond signal transition times.',
        'DRC and LVS clean VLSI physical layout in MAGIC with FPGA implementation.',
      ],
      technologies: ['NGSpice', 'MAGIC VLSI', 'Digital Systems', 'FPGA', 'Silicon Layout'],
      githubUrl: 'https://github.com/Roshan-o',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Projects</h2>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-teal-400 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Expandable Brittany Chiang List */}
      <ul className="group/list space-y-4">
        {filteredProjects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <li
              key={project.id}
              className="transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div
                className={`relative rounded-lg transition-all duration-200 ${
                  isExpanded
                    ? 'bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg p-5 sm:p-6 border border-slate-700/40'
                    : 'bg-slate-800/20 hover:bg-slate-800/40 p-4 sm:p-5 border border-slate-800/80 hover:border-slate-700/60'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group/btn"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <h3 className="font-medium text-slate-200 text-sm sm:text-base group-hover/btn:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 hidden sm:inline-block font-mono">
                      {project.date}
                    </span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center border border-slate-700 bg-slate-800/80 text-slate-400 group-hover/btn:text-teal-300 group-hover/btn:border-teal-400/40 transition-colors">
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </button>

                {/* Pure Brittany Chiang Expanded Interior */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-slate-700/40 grid sm:grid-cols-8 sm:gap-6">
                        {/* Brittany Chiang Left Metadata Column */}
                        <header className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 font-mono">
                          <div>{project.date}</div>
                          <div className="text-teal-400/90 text-xs mt-1 font-sans">{project.category}</div>
                        </header>

                        {/* Brittany Chiang Right Content Column */}
                        <div className="sm:col-span-6">
                          <h4 className="font-medium leading-snug text-slate-200 mb-2">
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm sm:text-base"
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <span>
                                {project.title}
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                              </span>
                            </a>
                          </h4>

                          <p className="text-sm text-slate-400 leading-normal mb-3">
                            {project.description}
                          </p>

                          <ul className="space-y-1.5 text-sm text-slate-400 mb-4">
                            {project.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-teal-400 font-bold text-xs mt-1">▹</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Action Links */}
                          <div className="flex items-center gap-4 mb-4 text-xs font-medium">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1 text-slate-300 hover:text-teal-300 transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>GitHub Repository</span>
                            </a>
                          </div>

                          {/* Signature Brittany Chiang Tech Stack Pills */}
                          <ul className="flex flex-wrap" aria-label="Technologies used">
                            {project.technologies.map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};