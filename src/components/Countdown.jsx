import React, { useState, useEffect } from 'react';

export default function Countdown({ targetDate = '2026-05-14T13:30:00' }) {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });

  useEffect(() => {
    const weddingTime = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = weddingTime - now;

      if (distance < 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

      setTimeLeft({ days, hours, mins, secs });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section class="mx-6 mb-12 p-4 rounded-xl bg-amber-50/50 border border-amber-100 text-center shadow-sm">
      <h3 class="text-xs uppercase tracking-widest text-amber-900/60 mb-3 font-semibold">Counting Down To The Big Day</h3>
      <div class="grid grid-cols-4 gap-2 text-center">
        <div class="bg-white p-2 rounded-lg border border-amber-100/60 shadow-xs">
          <span class="font-serifTitle text-2xl font-bold text-gray-800">{timeLeft.days}</span>
          <p class="text-[10px] text-gray-400 uppercase tracking-wider">Days</p>
        </div>
        <div class="bg-white p-2 rounded-lg border border-amber-100/60 shadow-xs">
          <span class="font-serifTitle text-2xl font-bold text-gray-800">{timeLeft.hours}</span>
          <p class="text-[10px] text-gray-400 uppercase tracking-wider">Hours</p>
        </div>
        <div class="bg-white p-2 rounded-lg border border-amber-100/60 shadow-xs">
          <span class="font-serifTitle text-2xl font-bold text-gray-800">{timeLeft.mins}</span>
          <p class="text-[10px] text-gray-400 uppercase tracking-wider">Mins</p>
        </div>
        <div class="bg-white p-2 rounded-lg border border-amber-100/60 shadow-xs">
          <span class="font-serifTitle text-2xl font-bold text-gray-800">{timeLeft.secs}</span>
          <p class="text-[10px] text-gray-400 uppercase tracking-wider">Secs</p>
        </div>
      </div>
    </section>
  );
}
