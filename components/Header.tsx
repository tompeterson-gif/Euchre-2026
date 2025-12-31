
import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'pricing', label: 'Tickets' },
    { id: 'registration', label: 'Register' },
    { id: 'golf', label: 'Golf Classic' },
    { id: 'champions', label: 'Champions' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-purple-950/90 backdrop-blur-md border-b border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center text-purple-900 font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
            WS
          </div>
          <span className="hidden sm:inline font-serif font-bold text-xl tracking-tighter text-yellow-400">
            WORLD SERIES OF EUCHRE
          </span>
        </div>
        <nav className="flex gap-3 md:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs md:text-base font-semibold transition-colors relative py-1 ${
                currentPage === item.id ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
