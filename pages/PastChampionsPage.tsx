
import React from 'react';
import { PAST_CHAMPIONS } from '../constants';

const PastChampionsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-24 px-4 bg-purple-regal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px gold-gradient opacity-20 -z-10"></div>
          <span className="bg-purple-regal px-8 text-yellow-500 font-black tracking-[0.3em] uppercase text-sm mb-4 inline-block">The Archives</span>
          <h1 className="text-5xl md:text-7xl font-bold italic">HALL OF <span className="text-transparent bg-clip-text gold-gradient">LEGENDS</span></h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg italic">
            Celebrating the masters of trick-taking who have etched their names into the Sucre history books.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PAST_CHAMPIONS.map((champ, idx) => (
            <div 
              key={idx} 
              className="group bg-purple-950/40 border border-yellow-500/10 rounded-[40px] overflow-hidden flex flex-col lg:flex-row hover:border-yellow-500/40 transition-all duration-500 shadow-2xl"
            >
              <div className="lg:w-2/5 relative overflow-hidden">
                <img 
                  src={champ.image} 
                  alt={champ.name} 
                  className="w-full h-64 lg:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6 bg-yellow-500 text-purple-950 font-black px-4 py-1 rounded-full text-xs tracking-tighter shadow-lg">
                  RANK #{champ.rank}
                </div>
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12 space-y-4">
                <h3 className="text-3xl font-bold font-serif text-yellow-400 leading-none">
                  {champ.name}
                </h3>
                <div className="w-12 h-0.5 gold-gradient mb-6"></div>
                <p className="text-gray-300 leading-relaxed font-light text-base lg:text-lg">
                  {champ.bio}
                </p>
                <div className="pt-4 flex gap-2">
                  <span className="text-yellow-500/40 hover:text-yellow-500 transition-colors cursor-pointer">
                    <i className="fa-brands fa-instagram text-xl"></i>
                  </span>
                  <span className="text-yellow-500/40 hover:text-yellow-500 transition-colors cursor-pointer">
                    <i className="fa-brands fa-x-twitter text-xl"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-black/30 p-12 rounded-[50px] border-2 border-dashed border-yellow-500/20">
          <h4 className="text-2xl font-serif italic text-yellow-500 mb-4">Your Name Here?</h4>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            The World Series of Euchre is the ultimate proving ground. Register for Stuttgart 2024 to begin your journey toward immortality.
          </p>
          <div className="w-16 h-16 rounded-full border border-yellow-500/40 flex items-center justify-center mx-auto animate-pulse">
            <i className="fa-solid fa-plus text-yellow-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastChampionsPage;
