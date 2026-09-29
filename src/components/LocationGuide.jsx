import React from 'react';

export default function LocationGuide() {
  return (
    <section class="px-6 py-10 border-t border-amber-100/70 text-center bg-white">
      <span class="text-[10px] tracking-[0.25em] text-rose-500 font-semibold uppercase">Venue &amp; Location</span>
      <h2 class="font-script text-4xl text-gray-800 mb-6">Garden Wedding &amp; Reception</h2>

      {/* Diana's Resort Featured Visual Card */}
      <div class="rounded-2xl overflow-hidden shadow-lg border border-amber-200/80 bg-white mb-6 group transition duration-300">
        {/* Large Feature Resort Image */}
        <div class="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
          <img
            src="/images/media_1790725136879.jpg"
            alt="Diana's Resort Garden & Swimming Pool Showcase"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div class="absolute bottom-4 inset-x-4 text-left text-white">
            <span class="inline-block bg-rose-500/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-1 shadow-sm">
              Featured Venue
            </span>
            <h3 class="font-serifTitle text-2xl sm:text-3xl font-bold tracking-wide text-white drop-shadow-md">
              Diana's Resort
            </h3>
            <p class="text-xs text-rose-200 uppercase tracking-widest font-medium">
              Bongabon, Nueva Ecija
            </p>
          </div>
        </div>

        {/* Venue Information Details */}
        <div class="p-5 bg-amber-50/40 text-center">
          <p class="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed mb-4">
            Join us as we exchange vows surrounded by lush greenery in an elegant garden ceremony, with the celebration and reception immediately to follow at the resort.
          </p>

          <a
            href="https://maps.google.com/?q=Diana's+Resort+Bongabon+Nueva+Ecija"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md transition transform active:scale-95 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Get Directions on Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
