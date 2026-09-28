import React from 'react';

export default function LocationGuide() {
  return (
    <section class="px-6 py-8 border-t border-amber-100/70 text-center bg-white">
      <span class="text-[10px] tracking-[0.25em] text-rose-500 font-semibold uppercase">Venue &amp; Location</span>
      <h2 class="font-script text-4xl text-gray-800 mb-6">Garden Wedding &amp; Reception</h2>

      {/* Diana's Resort Venue Card */}
      <div class="p-5 rounded-xl border border-amber-200/80 bg-amber-50/40 text-center shadow-xs">
        <span class="inline-block bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Garden Wedding
        </span>
        <h3 class="font-serifTitle text-2xl font-bold text-gray-900 leading-tight mb-1">
          DIANA'S RESORT
        </h3>
        <p class="text-xs font-semibold text-rose-600 uppercase tracking-widest mb-3">
          BONGABON, NUEVA ECIJA
        </p>
        <p class="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed mb-4">
          Join us as we exchange vows surrounded by nature in an elegant garden ceremony, with the reception immediately to follow at the resort.
        </p>
        <a
          href="https://maps.google.com/?q=Diana's+Resort+Bongabon+Nueva+Ecija"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-medium px-5 py-2.5 rounded-lg shadow-sm transition"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>Get Directions on Google Maps</span>
        </a>
      </div>
    </section>
  );
}
