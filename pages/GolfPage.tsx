
import React from 'react';

const GolfPage: React.FC = () => {
  return (
    <div className="min-h-screen py-24 px-4 bg-gradient-to-b from-purple-regal to-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block py-2 px-6 border-2 border-emerald-400 rounded-full mb-4">
              <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Stuttgart Country Club</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold italic leading-tight">
              THE FIRST ANNUAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500">EUCHRE GOLF CLASSIC</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Exchange your cards for clubs at the prestigious <span className="font-bold text-white">Stuttgart Country Club</span>. Before the cards are dealt, the fairways are played.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-emerald-400 text-3xl mb-4">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h4 className="text-lg font-bold mb-1">Head Professional</h4>
                <p className="text-2xl font-serif text-yellow-500">Mike Kay</p>
                <p className="text-sm text-gray-500 mt-2 italic">Exclusively overseeing the tournament operations.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-emerald-400 text-3xl mb-4">
                  <i className="fa-solid fa-flag"></i>
                </div>
                <h4 className="text-lg font-bold mb-1">Format</h4>
                <p className="text-2xl font-serif text-yellow-500">4-Person Scramble</p>
                <p className="text-sm text-gray-500 mt-2 italic">With a special Euchre twist at the 19th hole.</p>
              </div>
            </div>

            <button className="px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-full text-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all flex items-center gap-4">
              BOOK YOUR TEE TIME
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 gold-gradient opacity-20 blur-3xl rounded-full"></div>
            <img 
              src="https://picsum.photos/id/238/800/1000" 
              className="rounded-[40px] shadow-2xl relative z-10 border-4 border-yellow-500/20"
              alt="Luxury Golf Course"
            />
            <div className="absolute bottom-10 -left-10 z-20 bg-emerald-900 border border-emerald-400 p-8 rounded-3xl shadow-2xl max-w-xs animate-float">
               <i className="fa-solid fa-quote-left text-emerald-400 text-3xl mb-4"></i>
               <p className="text-gray-200 italic mb-4">"The greens are as fast as a loner hand in Stuttgart. We look forward to hosting the world's finest."</p>
               <p className="font-bold text-yellow-500">— Mike Kay, Head Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolfPage;
