'use client';

const MobileNavToggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/30 border border-green-500/20 will-change-transform"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className={`block h-0.5 w-full bg-green-400 transform transition-transform duration-200 will-change-transform ${isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          style={{ transformOrigin: 'center' }}
        />
        <span
          className={`block h-0.5 w-full bg-green-400 transition-opacity duration-200 will-change-opacity ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <span
          className={`block h-0.5 w-full bg-green-400 transform transition-transform duration-200 will-change-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </button>
  );
};

export default MobileNavToggle;