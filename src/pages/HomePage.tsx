import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleBack = () => {
    if (isNavigating) return;
    setIsNavigating(true);

    if ('startViewTransition' in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        navigate('/');
      });
    } else {
      setTimeout(() => {
        navigate('/');
      }, 450);
    }
  };

  return (
    <main
      className={`min-h-screen w-full bg-[#0c121e] text-white flex flex-col items-center justify-center p-8 select-none transition-opacity duration-500 ease-out ${
        isNavigating ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
      }`}
    >
      <div className="max-w-md w-full bg-[#131b2c]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-2xl flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-black/60 border border-white/15 flex items-center justify-center p-2 shadow-inner">
          <img
            src={logoImg}
            alt="Dial Monogram"
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-white">Home</h1>
          <p className="text-sm text-slate-300">
            Welcome to Dial — your digital scrapbook journal
          </p>
        </div>

        <button
          id="back-to-cover-button"
          type="button"
          onClick={handleBack}
          className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white text-sm font-medium transition-all duration-200 border border-white/15 hover:border-white/30 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
        >
          <span>←</span>
          <span>Back to Cover</span>
        </button>
      </div>
    </main>
  );
};

export default HomePage;
