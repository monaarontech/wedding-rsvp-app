import React, { useState, useEffect } from 'react';

const slidesData = [
  {
    image: '/images/media_1790601669258.png',
    title: 'Side by Side, Hand in Hand',
    subtitle: 'The Beginning of Our Forever',
    kbClass: 'animate-[kenBurns1_8s_ease-in-out_infinite_alternate]'
  },
  {
    image: '/images/media_1790601274523.png',
    title: 'Two Hearts, One Melody',
    subtitle: 'Bound by Eternal Love',
    kbClass: 'animate-[kenBurns2_8s_ease-in-out_infinite_alternate]'
  },
  {
    image: '/images/media_1790601277838.png',
    title: 'Laughter, Love & Pure Joy',
    subtitle: 'Every Moment Shared With You',
    kbClass: 'animate-[kenBurns3_8s_ease-in-out_infinite_alternate]'
  },
  {
    image: '/images/media_1790601675978.png',
    title: 'Walking Together into Tomorrow',
    subtitle: 'October 11, 2026 • Diana\'s Resort',
    kbClass: 'animate-[kenBurns4_8s_ease-in-out_infinite_alternate]'
  },
  {
    image: '/images/media_1790601683380.png',
    title: 'Finally Gereth Got Garette',
    subtitle: '#FinallyGerethGotGarette',
    kbClass: 'animate-[kenBurns5_8s_ease-in-out_infinite_alternate]'
  }
];

export default function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section class="py-8 bg-gray-900 border-t border-amber-900/30">
      <div class="text-center mb-4">
        <span class="text-[10px] tracking-[0.25em] text-rose-300 font-semibold uppercase">Memory Lane</span>
        <h2 class="font-script text-4xl text-white mt-1">Our Journey Together</h2>
      </div>

      <div class="relative w-full h-96 max-h-[460px] bg-black overflow-hidden shadow-2xl relative group">
        {/* Vignette Overlay */}
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none" />

        {/* Slides */}
        {slidesData.map((slide, idx) => (
          <div
            key={idx}
            class={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              class={`w-full h-full object-cover transform scale-110 transition-transform duration-7000 ease-out ${
                idx === currentIndex ? 'scale-105' : 'scale-120'
              }`}
            />
            {/* Caption */}
            <div class="absolute bottom-12 inset-x-0 text-center px-4 z-20">
              <p class="font-script text-3xl text-rose-100 drop-shadow-md mb-0.5">{slide.title}</p>
              <p class="text-[10px] uppercase tracking-[0.2em] text-amber-200/90 font-light">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Prev / Next Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length)}
          class="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full border border-white/20 backdrop-blur-xs transition opacity-0 group-hover:opacity-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % slidesData.length)}
          class="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full border border-white/20 backdrop-blur-xs transition opacity-0 group-hover:opacity-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Bar: Play/Pause & Indicators */}
        <div class="absolute bottom-3 inset-x-0 z-30 px-4 flex items-center justify-between">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            class="text-white/80 hover:text-white bg-black/40 p-1.5 rounded-full border border-white/20 text-xs backdrop-blur-xs"
          >
            {isPlaying ? (
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>

          <div class="flex items-center gap-1.5">
            {slidesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                class={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-6 bg-rose-400' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
