import React, { useRef, useState, useEffect } from 'react';

// Default card data; override via props
const defaultCards = [
  {
    image: 'https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=',
    title: 'Canyons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    image: 'https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
    title: 'Beaches',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    image: 'https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
    title: 'Trees',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    image: 'https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=',
    title: 'Lakes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

function Card({ image, title, description, imageHeight = 'h-64' }) {
  const cardRef = useRef(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const { offsetWidth: width, offsetHeight: height } = cardRef.current;
    setDims({ width, height });
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dims.width / 2;
    const y = e.clientY - rect.top - dims.height / 2;
    setMouse({ x, y });
  };

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  const px = dims.width ? mouse.x / dims.width : 0;
  const py = dims.height ? mouse.y / dims.height : 0;
  const rX = px * 30;
  const rY = py * -30;
  const tX = px * -40;
  const tY = py * -40;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group w-full max-w-xs"
      style={{ perspective: '800px' }}
    >
      {/* Image Container with 3D tilt and parallax */}
      <div
        className={`relative w-full ${imageHeight} overflow-hidden rounded-xl shadow-lg transition-transform duration-[1000ms] ease-[cubic-bezier(0.445,0.05,0.55,0.95)] bg-gray-200`}
        style={{ transform: `rotateY(${rX}deg) rotateX(${rY}deg)` }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.445,0.05,0.55,0.95)]"
          style={{
            transform: `translateX(${tX}px) translateY(${tY}px)`,
            backgroundImage: `url(${image})`,
          }}
        />
      </div>

      {/* Text below Image */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function ParallaxCards({ cards = defaultCards }) {
  return (
    <div className="px-4 py-8">
      <div
        className="grid gap-6 auto-rows-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
      >
        {cards.map((c, idx) => (
          <Card
            key={idx}
            image={c.image}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </div>
  );
}
