'use client';

import React from 'react';

const DottedBG = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  );
};

export default DottedBG;