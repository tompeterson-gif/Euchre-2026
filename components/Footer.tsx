
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-yellow-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-serif text-2xl text-yellow-500 mb-4">World Series of Euchre</h3>
          <p className="text-gray-400 leading-relaxed">
            The premier global competition for the elite trick-taking community. Held annually in the heart of Baden-Württemberg.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Location</h4>
          <p className="text-gray-400">
            Kultur- und Kongresszentrum Liederhalle<br />
            Berliner Pl. 1-3, 70174 Stuttgart<br />
            Germany
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Dates</h4>
          <p className="text-gray-400 italic">
            February 30th – February 31st, 2024<br />
            <span className="text-xs">(Limited Availability)</span>
          </p>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600 text-sm border-t border-gray-900 pt-8">
        © 2024 Sucre Euchre Federations. All rights reserved. Play responsibly.
      </div>
    </footer>
  );
};

export default Footer;
