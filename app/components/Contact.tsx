'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link fallback
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:roshanlalkalluri@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 pb-4" aria-label="Contact">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Contact</h2>
      </div>

      <div className="space-y-6">
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          I'm currently actively exploring software engineering roles, research collaborations, and impactful technical projects. Whether you have a question, opportunity, or just want to connect, my inbox is always open!
        </p>

        {/* Quick Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href="mailto:roshanlalkalluri@gmail.com"
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-teal-500/40 hover:bg-slate-800/60 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal-400/10 text-teal-300">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400">Email</div>
                <div className="text-sm font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
                  roshanlalkalluri@gmail.com
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="tel:+918328525761"
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-teal-500/40 hover:bg-slate-800/60 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal-400/10 text-teal-300">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400">Phone</div>
                <div className="text-sm font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
                  +91 8328525761
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>

        {/* Reach Out Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl border border-slate-800 bg-slate-900/80 space-y-4"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
            Send a Quick Note
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                placeholder="Alex Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                placeholder="alex@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
              placeholder="Hi Roshan, let's discuss a project..."
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-400 text-slate-950 text-sm font-semibold hover:bg-teal-300 transition-all cursor-pointer shadow-lg shadow-teal-500/10"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            {isSent && (
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Draft opened in email client!
              </span>
            )}
          </div>
        </form>

      </div>
    </section>
  );
};