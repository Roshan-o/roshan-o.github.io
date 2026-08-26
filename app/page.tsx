'use client';

import React, { useState, useEffect } from 'react';
import { NavSidebar } from './components/NavSidebar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track global mouse position for radial gradient spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Spy with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'skills', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 selection:bg-teal-300 selection:text-teal-900">
      {/* Custom Dual-Circle Cursor */}
      <CustomCursor />

      {/* Radial Gradient Cursor Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Main Split-Screen Container */}
      <div className="mx-auto min-h-screen max-w-[1400px] px-4 sm:px-8 md:px-10 lg:px-12 font-sans">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-teal-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-950 focus-visible:translate-x-0 focus-visible:text-slate-950 z-50 transition-transform"
        >
          Skip to Content
        </a>

        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* Left Column: Sticky NavSidebar */}
          <NavSidebar activeSection={activeSection} />

          {/* Right Column: Scrollable Main Content Stream */}
          <main id="content" className="pt-8 pb-8 lg:w-[56%] lg:pt-14 lg:pb-10 xl:pt-16 xl:pb-12">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
