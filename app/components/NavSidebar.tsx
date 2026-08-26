'use client';

import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface NavSidebarProps {
  activeSection: string;
}

export const NavSidebar: React.FC<NavSidebarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills & Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-14 xl:py-16">
      <div>
        {/* Profile Avatar */}
        <div className="mb-5 flex items-center space-x-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              src="/Profile4.jpeg"
              alt="K Roshan Lal"
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-slate-700 shadow-xl"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to work
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            K Roshan Lal
          </a>
        </h1>

        <h2 className="mt-2.5 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Undergrad at IIIT Hyderabad
        </h2>

        <p className="mt-3.5 max-w-sm sm:max-w-md leading-relaxed text-slate-400 text-sm sm:text-base">
          Undergraduate student at IIIT Hyderabad passionate about engineering scalable software systems, robust backend architectures, and intelligent data pipelines.
        </p>

        {/* Navigation List with Expanding Lines */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-6 lg:mt-7 w-max space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    className="group flex items-center py-2.5"
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e.target as any, item.id)}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-slate-200'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? 'text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links Dock */}
      <ul className="ml-1 mt-8 flex items-center space-x-5" aria-label="Social media">
        <li>
          <a
            className="block text-slate-400 hover:text-teal-300 transition-colors duration-200 p-1"
            href="https://github.com/Roshan-o"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-slate-400 hover:text-teal-300 transition-colors duration-200 p-1"
            href="https://www.linkedin.com/in/kalluri-roshan-lal"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-slate-400 hover:text-teal-300 transition-colors duration-200 p-1"
            href="mailto:roshanlalkalluri@gmail.com"
            aria-label="Email (opens mail client)"
            title="Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </li>
        <li>
          <a
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md border border-slate-700 bg-slate-800/60 text-slate-300 hover:border-teal-400/40 hover:text-teal-300 transition-all duration-200"
            href="https://drive.google.com/file/d/1tHnEhdFS9qmNNXJbSCfgppL2axsf9_fR/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </header>
  );
};
