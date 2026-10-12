import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImg from '../assets/cover.png';

export const CoverPage: React.FC = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleOpen = () => {
    if (isNavigating) return;
    setIsNavigating(true);

    if ('startViewTransition' in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        navigate('/home');
      });
    } else {
      setTimeout(() => {
        navigate('/home');
      }, 450);
    }
  };

  return (
    <main
      className={`relative w-screen h-screen overflow-hidden bg-[#0d131f] flex items-center justify-center select-none transition-opacity duration-500 ease-out ${
        isNavigating ? 'opacity-0 scale-[1.01]' : 'opacity-100 scale-100'
      }`}
    >
      {/* 
        16:9 Canvas container matching object-fit: cover exact geometry:
        width: max(100vw, calc(100vh * (16 / 9)))
        height: max(100vh, calc(100vw * (9 / 16)))
        This locks the interactive button overlay pixel-perfectly to the cover image.
      */}
      <div
        className="relative shrink-0 flex items-center justify-center"
        style={{
          width: 'max(100vw, calc(100vh * (16 / 9)))',
          height: 'max(100vh, calc(100vw * (9 / 16)))',
          aspectRatio: '16 / 9',
        }}
      >
        <img
          src={coverImg}
          alt="Dial - An IT girl's digital scrapbook journal"
          className="w-full h-full object-cover block pointer-events-none"
          draggable={false}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* 
          Invisible clickable area positioned exactly over the 'open' button:
          Button boundaries measured on 6000x3375 source image:
          X: 2494 to 3505 (left: 41.57%, width: 16.85%)
          Y: 2393 to 2675 (top: 70.9%, height: 8.36%)
        */}
        <button
          id="open-journal-button"
          type="button"
          onClick={handleOpen}
          aria-label="Open scrapbook journal"
          className="group absolute rounded-full cursor-pointer bg-transparent border-0 outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-white/80 active:scale-[0.98]"
          style={{
            top: '70.9%',
            left: '41.57%',
            width: '16.85%',
            height: '8.36%',
          }}
        >
          {/* Luminous glow halo on hover matching the rhinestone button */}
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              boxShadow:
                '0 0 25px 4px rgba(255, 255, 255, 0.4), 0 0 50px 10px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.25)',
            }}
          />
        </button>
      </div>
    </main>
  );
};

export default CoverPage;
