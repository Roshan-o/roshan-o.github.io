'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  websiteUrl: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const Experience = () => {
  // Default first item expanded
  const [expandedId, setExpandedId] = useState<string | null>('uber-2026');

  const experiences: ExperienceItem[] = [
    {
      id: 'uber-2026',
      role: 'Software Engineering Intern',
      company: 'Uber',
      period: 'May — Jul 2026',
      location: 'Bangalore, India',
      websiteUrl: 'https://www.uber.com',
      description:
        'Built critical security and SRE infrastructure for account access lifecycle management and automated data synchronization.',
      achievements: [
        'Built synchronous APIs for security/SRE teams to revoke compromised account access, and engineered an automated termination reconciliation system cross-checking Active Directory to revoke access for terminated users.',
        'Added observability (Grafana dashboards, alerting) into the reconciliation system to monitor deactivation attempts, success rates, and per-subsystem breakdowns, detecting ∼11 accounts/day with incomplete deactivation and enabling proactive follow-up before stale access became a security risk.',
        'Built an automated data pipeline replacing manual, multi-day SFDC provisioning updates with real-time dashboard visibility.',
      ],
      technologies: ['Golang', 'APIs', 'Grafana'],
    },
    {
      id: 'uber-2025',
      role: 'UberStar Software Engineering Intern',
      company: 'Uber',
      period: 'May — Jul 2025',
      location: 'Bangalore, India',
      websiteUrl: 'https://www.uber.com',
      description:
        'Engineered automated SQL optimization and anti-pattern detection tools across distributed big data workflows.',
      achievements: [
        'Developed an automated SQL optimization tool using Python and SQLGlot to detect redundant CTE processing across 3,500+ production SQL queries, using LLM-based analysis to identify unused cached columns.',
        'Identified 500 queries with repeated CTE/view processing, enabling optimization of redundant computation and data access, contributing to an estimated $5K in cost savings.',
      ],
      technologies: ['Python', 'SQLGlot', 'LLM Analysis', 'Query Optimization', 'Data Pipelines'],
    },
    {
      id: 'vlabs-2025',
      role: 'Research Assistant',
      company: 'Virtual Labs',
      period: 'Jul — Dec 2025',
      location: 'Remote, India',
      websiteUrl: 'https://www.vlabs.ac.in',
      description:
        'Developed experimental frameworks and automated analytics platforms for educational technology research.',
      achievements: [
        'Developed a reusable Next.js-based experimental template to support multiple user studies, enabling systematic collection and logging of user interaction data.',
        'Customized the open-source Excalidraw tool for MapCode experiments by configuring drawing constraints and implementing telemetry data capture.',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Excalidraw', 'User Analytics', 'Data Collection'],
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Experience</h2>
      </div>

      <ol className="group/list space-y-4">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <li
              key={exp.id}
              className="transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div
                className={`relative rounded-lg transition-all duration-200 ${
                  isExpanded
                    ? 'bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg p-5 sm:p-6 border border-slate-700/40'
                    : 'bg-slate-800/20 hover:bg-slate-800/40 p-4 sm:p-5 border border-slate-800/80 hover:border-slate-700/60'
                }`}
              >
                {/* Collapsible / Expandable Trigger Header */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group/btn"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-slate-200 text-sm sm:text-base group-hover/btn:text-teal-300 transition-colors">
                      {exp.role} · <span className="text-teal-400 font-semibold">{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 hidden sm:inline-block font-mono">
                      {exp.period}
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
                          <div>{exp.period}</div>
                          <div className="text-slate-500/80 text-[11px] mt-1">{exp.location}</div>
                        </header>

                        {/* Brittany Chiang Right Content Column */}
                        <div className="sm:col-span-6">
                          <h4 className="font-medium leading-snug text-slate-200 mb-2">
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm sm:text-base"
                              href={exp.websiteUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <span>
                                {exp.role} · <span className="inline-block">{exp.company}
                                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-0.5" />
                                </span>
                              </span>
                            </a>
                          </h4>

                          <p className="text-sm text-slate-400 leading-normal mb-3">
                            {exp.description}
                          </p>

                          <ul className="space-y-2 text-sm text-slate-400 mb-4">
                            {exp.achievements.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-teal-400 font-bold text-xs mt-1">▹</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Signature Brittany Chiang Tech Stack Pills */}
                          <ul className="flex flex-wrap" aria-label="Technologies used">
                            {exp.technologies.map((tech) => (
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
      </ol>
    </section>
  );
};