import React from 'react';

export default function AttireGuide() {
  return (
    <section class="px-6 py-8 border-t border-amber-100/70 bg-amber-50/40 text-center">
      <span class="text-[10px] tracking-[0.25em] text-rose-500 font-semibold uppercase">Dress Code</span>
      <h2 class="font-script text-4xl text-gray-800 mb-2">Guest Attire Guide</h2>

      <div class="inline-block bg-rose-100/80 text-rose-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-rose-200">
        Tropical-Colored Suit / Formal &amp; Semi-Formal
      </div>

      {/* Palette Swatches */}
      <div class="flex justify-center items-center gap-2 mb-6">
        <span class="w-7 h-7 rounded-full bg-[#ffb3c1] border border-white shadow-xs" title="Coral Pink"></span>
        <span class="w-7 h-7 rounded-full bg-[#e7c6ff] border border-white shadow-xs" title="Lavender"></span>
        <span class="w-7 h-7 rounded-full bg-[#b8e0d2] border border-white shadow-xs" title="Ocean Sky"></span>
        <span class="w-7 h-7 rounded-full bg-[#d8f3dc] border border-white shadow-xs" title="Mint Green"></span>
        <span class="w-7 h-7 rounded-full bg-[#fcf6bd] border border-white shadow-xs" title="Sunny Yellow"></span>
      </div>

      <p class="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto mb-6">
        PLEASE WEAR FORMAL / SEMI-FORMAL ATTIRE THAT MATCH OUR COLOR MOTIF IN HONOR OF THE BRIDE.<br />
        <strong class="text-rose-600 font-semibold">WE KINDLY ASK THAT GUESTS REFRAIN FROM WEARING WHITE.</strong><br />
        YOUR REVERENCE AND RESPECT MEANS SO MUCH TO US.
      </p>

      {/* Tropical Color Bridal Party Showcase */}
      <div class="rounded-xl overflow-hidden border border-amber-200/60 bg-white p-2 shadow-xs mb-6">
        <img src="/images/media_1790554321104.png" alt="Tropical Color Dress Code Showcase" class="w-full h-52 object-cover rounded-lg" />
      </div>

      {/* Principal Sponsors Attire */}
      <div class="border-t border-amber-200/60 pt-6">
        <h3 class="font-script text-3xl text-gray-800 mb-4">Principal Sponsors Attire</h3>
        <div class="grid grid-cols-2 gap-4 text-xs">
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h4 class="font-bold text-gray-800 uppercase tracking-wider">NINANG</h4>
            <p class="text-amber-800 font-medium">FILIPINIANA</p>
          </div>
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h4 class="font-bold text-gray-800 uppercase tracking-wider">NINONG</h4>
            <p class="text-amber-800 font-medium">BARONG TAGALOG</p>
          </div>
        </div>
      </div>
    </section>
  );
}
