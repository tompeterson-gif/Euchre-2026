
import React from 'react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/129/1920/1080" 
            className="w-full h-full object-cover opacity-30 blur-sm"
            alt="Stuttgart Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/60 to-purple-regal" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block py-2 px-6 bg-yellow-500/10 border border-yellow-500 rounded-full mb-8 animate-pulse">
            <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase">Stuttgart • Feb 30 - 31</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none italic">
            WORLD SERIES <br />
            <span className="text-transparent bg-clip-text gold-gradient">OF EUCHRE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            Where the world's most cunning minds collide in the ultimate battle of trick-taking supremacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('registration')}
              className="px-10 py-4 gold-gradient text-purple-950 font-black rounded-full text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all"
            >
              REGISTER NOW
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="px-10 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-black rounded-full text-lg hover:bg-yellow-500 hover:text-purple-950 transition-all"
            >
              VIEW TIERS
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fa-solid fa-chevron-down text-yellow-500 text-2xl"></i>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 bg-purple-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tournament Highlights</h2>
            <div className="w-24 h-1 gold-gradient mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'fa-trophy', title: 'Global Recognition', desc: 'Secure your place in the Sucre history books and climb the official world ranking.' },
              { icon: 'fa-cards', title: 'Elite Gameplay', desc: 'Professional level rules with international certified Sucre dealers at every table.' },
              { icon: 'fa-gem', title: 'Luxury Venue', desc: 'Experience the opulence of Stuttgart’s Liederhalle, customized for high-stakes competition.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-purple-950/50 p-8 rounded-2xl border border-yellow-500/10 hover:border-yellow-500/40 transition-all text-center group">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-purple-950 text-2xl group-hover:rotate-12 transition-transform">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
