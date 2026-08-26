'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track hovered elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('.interactive-target'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Ring (smooth spring follow) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/70"
        style={{
          width: isHovered ? 48 : 34,
          height: isHovered ? 48 : 34,
          marginLeft: isHovered ? -24 : -17,
          marginTop: isHovered ? -24 : -17,
          backgroundColor: isHovered ? 'rgba(45, 212, 191, 0.08)' : 'transparent',
          boxShadow: isHovered
            ? '0 0 16px rgba(45, 212, 191, 0.25)'
            : '0 0 8px rgba(56, 189, 248, 0.15)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicked ? 0.8 : isHovered ? 1.15 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Inner Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]"
        style={{
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicked ? 1.4 : isHovered ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 800,
          mass: 0.1,
        }}
      />
    </div>
  );
};
