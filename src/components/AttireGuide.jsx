import React from 'react';

export default function AttireGuide() {
  return (
    <section class="px-6 py-8 border-t border-amber-100/70 bg-amber-50/40 text-center">
      <span class="text-[10px] tracking-[0.25em] text-rose-500 font-semibold uppercase">Dress Code</span>
      <h2 class="font-script text-4xl text-gray-800 mb-2">Guest Attire Guide</h2>

      <div class="inline-block bg-rose-100/80 text-rose-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-rose-200">
        Tropical-Colored Suit / Formal &amp; Semi-Formal
      </div>

      <p class="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto mb-6">
        PLEASE WEAR FORMAL / SEMI-FORMAL ATTIRE THAT MATCH OUR COLOR MOTIF IN HONOR OF THE BRIDE.<br />
        <strong class="text-rose-600 font-semibold">WE KINDLY ASK THAT GUESTS REFRAIN FROM WEARING WHITE.</strong><br />
        YOUR REVERENCE AND RESPECT MEANS SO MUCH TO US.
      </p>

      {/* Custom Guest & Principal Sponsors Attire Guide Illustration */}
      <div class="rounded-xl overflow-hidden border border-amber-200/60 bg-white p-2 shadow-sm mb-6">
        <img
          src="/images/media_1790601132471.jpg"
          alt="Guest & Principal Sponsors Attire Guide Illustration"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Principal Sponsors Attire */}
      <div class="border-t border-amber-200/60 pt-6 mb-8">
        <h3 class="font-script text-3xl text-gray-800 mb-4">Principal Sponsors Attire</h3>
        <div class="grid grid-cols-2 gap-4 text-xs mb-4">
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h4 class="font-bold text-gray-800 uppercase tracking-wider">NINANG</h4>
            <p class="text-amber-800 font-medium">FILIPINIANA</p>
          </div>
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h4 class="font-bold text-gray-800 uppercase tracking-wider">NINONG</h4>
            <p class="text-amber-800 font-medium">BARONG TAGALOG</p>
          </div>
        </div>

        {/* Custom Ninang & Ninong Illustration */}
        <div class="rounded-xl overflow-hidden border border-amber-200/60 bg-white p-3 shadow-sm">
          <img
            src="/images/media_1790578400497.png"
            alt="Ninang Filipiniana and Ninong Barong Tagalog Attire Illustration"
            class="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* A Note on Gifts */}
      <div class="border-t border-amber-200/60 pt-6 bg-white/70 p-5 rounded-2xl border border-amber-100 shadow-2xs">
        <h3 class="font-script text-3xl text-gray-800 mb-2">A Note on Gifts</h3>
        <p class="text-xs text-gray-600 leading-relaxed italic max-w-xs mx-auto mb-3 font-serifTitle">
          As we join our hearts and begin this beautiful journey together, your love, presence, and support mean the world to us. If you wish to bless us with a gift, a monetary contribution would be deeply appreciated and cherished as we build our future and life together.
        </p>
        <p class="font-script text-2xl text-rose-600">Gereth &amp; Garette</p>

        <div class="mt-4 pt-3 border-t border-amber-100/80">
          <span class="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Official Hashtag</span>
          <span class="font-bold text-xs tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block">
            #FinallyGerethGotGarette
          </span>
        </div>
      </div>
    </section>
  );
}
