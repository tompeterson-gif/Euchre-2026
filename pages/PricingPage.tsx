
import React from 'react';
import { PRICING_TIERS } from '../constants';

interface PricingPageProps {
  onSelect: (tier: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 italic">CHOOSE YOUR <span className="text-yellow-500">LEGACY</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From enthusiasts to legends, select the tier that matches your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`flex flex-col bg-purple-950/80 border border-yellow-500/20 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative ${tier.id === 'gold' ? 'shadow-[0_0_40px_rgba(212,175,55,0.2)] border-yellow-500/50' : ''}`}
            >
              {tier.id === 'gold' && (
                <div className="gold-gradient text-purple-950 text-xs font-black py-1 px-4 text-center tracking-widest uppercase">
                  Ultimate Experience
                </div>
              )}
              <div className="p-8 border-b border-white/10">
                <h3 className="text-3xl font-bold mb-4 font-serif">{tier.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-6xl font-black text-yellow-500 ml-1">{tier.price.toLocaleString()}</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <i className="fa-solid fa-circle-check text-yellow-500 mr-3 text-sm"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-black/20 mt-auto">
                <button 
                  onClick={() => onSelect(tier.id)}
                  className={`w-full py-4 rounded-xl font-bold tracking-widest transition-all ${
                    tier.id === 'gold' 
                      ? 'gold-gradient text-purple-900' 
                      : 'border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10'
                  }`}
                >
                  SECURE SPOT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
