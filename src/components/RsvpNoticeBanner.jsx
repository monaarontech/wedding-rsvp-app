import React from 'react';

export default function RsvpNoticeBanner() {
  const scrollToRsvp = () => {
    const rsvpElement = document.getElementById('rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div class="px-6 my-6 text-center">
      <div class="bg-gradient-to-br from-rose-50/90 via-amber-50/60 to-rose-50/90 border border-rose-200/80 rounded-2xl p-4 shadow-sm relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div class="absolute -top-6 -right-6 w-16 h-16 bg-rose-200/40 rounded-full blur-xl pointer-events-none" />
        <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-amber-200/40 rounded-full blur-xl pointer-events-none" />

        <p class="text-xs text-gray-700 font-medium leading-relaxed mb-3 relative z-10">
          Ready to RSVP? Please scroll down to the bottom of the page to confirm your attendance.
        </p>

        <button
          onClick={scrollToRsvp}
          class="relative z-10 inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition duration-200 transform active:scale-95 group cursor-pointer"
        >
          <span>Go to RSVP</span>
          <svg
            class="w-4 h-4 animate-bounce text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
