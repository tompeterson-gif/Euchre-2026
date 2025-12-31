
import React, { useState } from 'react';
import { RegistrationData } from '../types';
import { getEuchreStrategy } from '../services/geminiService';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    sucreNickname: '',
    hometown: '',
    worldRanking: 300
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and get AI strategy tip
    const tip = await getEuchreStrategy(formData.worldRanking, formData.sucreNickname);
    setAiTip(tip);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'worldRanking' ? parseInt(value) || 1 : value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-purple-950 border border-yellow-500 p-10 rounded-3xl text-center">
          <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-purple-900 text-3xl">
            <i className="fa-solid fa-check-double"></i>
          </div>
          <h2 className="text-3xl font-bold mb-4">Registration Received!</h2>
          <p className="text-gray-300 mb-8 font-serif italic text-lg leading-relaxed">
            "{aiTip}"
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-4 gold-gradient text-purple-950 font-black rounded-xl hover:scale-[1.02] transition-all"
          >
            EDIT REGISTRATION
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-purple-950/50 backdrop-blur-xl border border-yellow-500/20 rounded-[40px] p-8 md:p-16 shadow-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">PLAYER <span className="text-yellow-500">PROFILE</span></h2>
            <p className="text-gray-400">Formalize your entry into the World Series ranks.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-yellow-500 ml-1">First Name</label>
                <input 
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-yellow-500 ml-1">Last Name</label>
                <input 
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-yellow-500 ml-1">Sucre Nickname</label>
              <input 
                required
                name="sucreNickname"
                value={formData.sucreNickname}
                onChange={handleInputChange}
                placeholder="The Euchre King"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-yellow-500 ml-1">Hometown</label>
              <input 
                required
                name="hometown"
                value={formData.hometown}
                onChange={handleInputChange}
                placeholder="Stuttgart, DE"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-yellow-500 ml-1">World Ranking (1-600)</label>
              <div className="flex items-center gap-4">
                <input 
                  type="range"
                  name="worldRanking"
                  min="1"
                  max="600"
                  value={formData.worldRanking}
                  onChange={handleInputChange}
                  className="flex-grow h-2 bg-black/40 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <span className="w-16 text-center font-black text-2xl text-yellow-500">{formData.worldRanking}</span>
              </div>
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 gold-gradient text-purple-950 font-black rounded-2xl text-xl shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <i className="fa-solid fa-spinner animate-spin"></i>
                ) : (
                  <>
                    <i className="fa-solid fa-crown"></i>
                    AUTHENTICATE REGISTRATION
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
