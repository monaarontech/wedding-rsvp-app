import React, { useState, useEffect } from 'react';
import Countdown from './components/Countdown';
import LocationGuide from './components/LocationGuide';
import AttireGuide from './components/AttireGuide';
import Entourage from './components/Entourage';
import FaqSection from './components/FaqSection';
import RsvpForm from './components/RsvpForm';
import AdminModal from './components/AdminModal';

export default function App() {
  const [rsvps, setRsvps] = useState([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    setRsvps(stored);
  }, []);

  const handleRsvpSuccess = (newEntry) => {
    const updated = [newEntry, ...rsvps];
    setRsvps(updated);
    setShowSuccessModal(true);
  };

  const handleClear = () => {
    if (window.confirm('Clear all stored test responses?')) {
      localStorage.removeItem('wedding_rsvps');
      setRsvps([]);
    }
  };

  return (
    <div class="min-h-screen bg-[#faf7f2] font-sansBody text-gray-800">
      {/* Floating Admin Button */}
      <div class="fixed top-4 right-4 z-40">
        <button
          onClick={() => setIsAdminOpen(true)}
          class="bg-white/95 hover:bg-white text-xs px-3.5 py-2 rounded-full border border-amber-200/80 shadow-lg transition flex items-center gap-2 font-medium text-gray-700"
        >
          <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>RSVP Dashboard ({rsvps.length})</span>
        </button>
      </div>

      {/* Main Invitation Container */}
      <main class="max-w-md mx-auto min-h-screen bg-white shadow-2xl relative overflow-hidden border-x border-amber-50/50">
        {/* Header / Hero */}
        <header class="text-center pt-12 pb-6 px-6 relative z-10">
          <div class="inline-block px-3.5 py-1 rounded-full bg-rose-50 text-[10px] uppercase tracking-[0.25em] text-rose-600 font-semibold mb-3 border border-rose-100">
            Wedding Invitation
          </div>
          <p class="text-xs uppercase tracking-[0.3em] text-gray-500 font-light mb-2">We,</p>
          <h1 class="font-script text-5xl md:text-6xl text-gray-900 leading-tight mb-4">
            Gereth <span class="text-rose-400 font-serifTitle italic font-light text-3xl md:text-4xl">&amp;</span> Garette
          </h1>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-600 max-w-xs mx-auto font-light leading-relaxed mb-6">
            Inviting you to rejoice and celebrate with us,<br />as we exchange our vows of love on
          </p>

          <div class="inline-block border-y border-amber-200/90 py-2.5 px-6 my-2 bg-amber-50/40 w-full">
            <p class="font-serifTitle text-xl tracking-[0.18em] text-gray-900 uppercase font-semibold">
              OCTOBER 11TH <span class="mx-2 text-rose-400">|</span> AT 4:00 PM
            </p>
          </div>
        </header>

        {/* Couple Twin Photo Showcase */}
        <section class="px-6 mb-8 text-center">
          <div class="grid grid-cols-2 gap-3">
            <div class="relative rounded-2xl overflow-hidden shadow-md border-2 border-amber-100/80 group">
              <img src="/images/media_1790555070017.png" alt="Gereth & Garette" class="w-full h-60 object-cover object-top" />
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white text-center">
                <span class="font-serifTitle italic text-xs">Together Forever</span>
              </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden shadow-md border-2 border-amber-100/80 group">
              <img src="/images/media_1790555107883.png" alt="Gereth & Garette Holding Hands" class="w-full h-60 object-cover object-top" />
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white text-center">
                <span class="font-serifTitle italic text-xs">Hand in Hand</span>
              </div>
            </div>
          </div>
        </section>

        <Countdown targetDate="2026-10-11T16:00:00" />
        <LocationGuide />
        <AttireGuide />
        <Entourage />
        <FaqSection />
        <RsvpForm onSuccess={handleRsvpSuccess} />

        {/* Footer */}
        <footer class="py-8 text-center text-xs text-gray-400 border-t border-amber-50">
          <p class="font-serifTitle italic text-sm text-gray-600 mb-1">Gereth &amp; Garette</p>
          <p>10 . 11 . 26</p>
        </footer>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-xl border border-rose-100">
            <div class="w-12 h-12 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 class="font-serifTitle text-2xl font-bold text-gray-800 mb-1">RSVP Received!</h3>
            <p class="text-xs text-gray-600 mb-4">Thank you for letting us know! We can't wait to celebrate with you.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              class="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold py-2.5 rounded-lg transition"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Admin Dashboard Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        rsvps={rsvps}
        onClear={handleClear}
      />
    </div>
  );
}
