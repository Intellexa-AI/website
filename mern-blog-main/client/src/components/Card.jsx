// TeamMemberCard.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const calculateDirection = (rect, x, y) => {
  const { left, top, width, height } = rect;
  const l = x - (left + window.pageXOffset);
  const t = y - (top + window.pageYOffset);
  const r = width - l;
  const b = height - t;
  const min = Math.min(l, t, r, b);
  switch (min) {
    case l: return 'left';
    case r: return 'right';
    case t: return 'top';
    case b: return 'bottom';
  }
};

const Card = ({ name, role, imageUrl, bio }) => {
  const [style, set] = useSpring(() => ({
    x: 0, y: 0, scale: 1
  }));

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const direction = calculateDirection(rect, e.clientX, e.clientY);
    const x = (direction === 'left' ? -1 : direction === 'right' ? 1 : 0) * 20;
    const y = (direction === 'top' ? -1 : direction === 'bottom' ? 1 : 0) * 20;

    set({ x, y, scale: 1.1 });
  };

  const handleMouseLeave = () => {
    set({ x: 0, y: 0, scale: 1 });
  };

  return (
    <animated.div
      className="relative overflow-hidden w-64 h-64 bg-white rounded shadow-lg cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: style.x.interpolate((x, y) => `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`)
      }}
    >
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      <animated.div
        className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0"
        style={{
          transform: style.scale.interpolate(s => `scale(${s})`),
          opacity: style.scale.interpolate(s => (s - 1) * 5)
        }}
      >
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm">{role}</p>
          <p className="text-xs mt-2">{bio}</p>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;
