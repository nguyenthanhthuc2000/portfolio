'use client';

import React, { useEffect, useState } from 'react';

const CursorEffects: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseDown = () => {
      setIsEnlarged(true);
    };

    const onMouseUp = () => {
      setIsEnlarged(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  useEffect(() => {
    const trailHandler = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
  
      setTimeout(() => {
        trail.remove();
      }, 1000); // Thời gian dấu vết biến mất
    };
  
    document.addEventListener('mousemove', trailHandler);
  
    return () => {
      document.removeEventListener('mousemove', trailHandler);
    };
  }, []);

  const cursorClasses = `
    cursor-effect 
    ${isVisible ? 'cursor-visible' : 'cursor-hidden'} 
    ${isEnlarged ? 'cursor-enlarged' : ''}
  `;

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorEffects;
