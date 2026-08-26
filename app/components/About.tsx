'use client';

import React from 'react';

export const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About</h2>
      </div>

      <div className="space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base">
        <p>
          I'm an undergraduate engineer at{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 transition-colors inline-block"
            href="https://www.iiit.ac.in/"
            target="_blank"
            rel="noreferrer noopener"
          >
            IIIT Hyderabad
          </a>{' '}
          pursuing a B.Tech in Electronics and Communication Engineering (CGPA: 8.21/10). My focus spans backend systems, API infrastructure, automated data pipelines, and machine learning intelligence.
        </p>

        <p>
          At{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 transition-colors inline-block"
            href="https://www.uber.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Uber
          </a>
          , I engineered synchronous APIs for security/SRE teams, an automated Active Directory termination reconciliation system, and Grafana observability monitoring that surfaced ~11 incomplete deactivations per day. In a prior internship at Uber, I also built SQLGlot-based optimization tools analyzing 3,500+ production queries to eliminate redundant CTE computation.
        </p>

        <p>
          Recently, I developed{' '}
          <span className="font-medium text-slate-200">DocPilot</span>, a full-stack document intelligence platform with RAG-based context synthesis and CI test pipelines, as well as machine learning platforms like the{' '}
          <span className="font-medium text-slate-200">Churn Probability Predictor</span> with SHAP explainability.
        </p>

        <p>
          I thrive on tackling challenging distributed systems problems, architecting robust test suites, and building performant, accessible digital products.
        </p>

      </div>
    </section>
  );
};