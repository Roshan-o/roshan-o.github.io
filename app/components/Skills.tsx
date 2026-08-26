'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin, Code2, Cpu, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      icon: Code2,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'GoLang', 'SQL', 'HTML/CSS', 'Matlab', 'Verilog'],
    },
    {
      category: 'Technologies & Frameworks',
      icon: Cpu,
      skills: ['PyTorch', 'Scikit-learn', 'React.js', 'FastAPI', 'Express.js', 'PostgreSQL', 'MongoDB Atlas', 'SQLGlot', 'pytest', 'Codecov', 'Grafana'],
    },
    {
      category: 'Developer Tools',
      icon: Wrench,
      skills: ['VSCode', 'Cursor', 'Claude Code', 'Git / GitHub', 'Postman', 'Linux / Bash', 'ModelSim', 'NGSpice', 'MAGIC VLSI'],
    },
  ];

  const educationList = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      school: 'International Institute of Information Technology, Hyderabad (IIIT-H)',
      period: 'Jul 2023 — May 2027',
      location: 'Hyderabad, India',
      gpa: '8.21 / 10.0',
      highlights: [
        'Awarded Merit List recognition for academic excellence — IIIT Hyderabad, Year 1 & 2',
        'Placed among the Top 5 Teams in Megathon 2025, a competitive hackathon',
        'Contributed as a Design Team Member at the Entrepreneurship Cell, IIIT Hyderabad',
      ],
    },
    {
      degree: 'Pre-University Course (PUC / Intermediate)',
      school: 'Rajiv Gandhi University of Knowledge and Technologies',
      period: 'Jun 2021 — Jul 2023',
      location: 'India',
      gpa: '9.64 / 10.0',
      highlights: [
        'Graduated with exceptional 9.64/10 CGPA',
        'Strong academic foundation in Mathematics, Physics, Chemistry, and Computer Science',
      ],
    },
  ];

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills and Education">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Skills & Education</h2>
      </div>

      <div className="space-y-10">
        {/* Technical Skills Categories */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">
            Technical Skills
          </h3>
          <div className="grid gap-4">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-4 rounded-lg border border-slate-800/80 bg-slate-900/60 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <group.icon className="w-4 h-4 text-teal-400" />
                  <h4 className="text-sm font-semibold text-slate-200">{group.category}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-300 border border-teal-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">
            Education
          </h3>
          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/60 hover:border-slate-700 transition-colors space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-medium text-slate-200 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>{edu.degree}</span>
                  </h4>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                    CGPA: {edu.gpa}
                  </span>
                </div>

                <div className="text-sm text-teal-400/90 font-medium">
                  {edu.school}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800/80">
                  {edu.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold mt-0.5">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};