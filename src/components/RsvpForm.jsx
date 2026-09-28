import React, { useState } from 'react';

export default function RsvpForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Yes');
  const [numCompanions, setNumCompanions] = useState(0);
  const [companionNames, setCompanionNames] = useState(['', '', '', '', '']);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL || '';

  const handleCompanionChange = (index, value) => {
    const updated = [...companionNames];
    updated[index] = value;
    setCompanionNames(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const activeCompanions = companionNames.slice(0, Number(numCompanions)).filter(c => c && c.trim() !== '');
    const totalCount = attendance === 'Yes' ? (1 + Number(numCompanions)) : 0;
    const companionListStr = attendance === 'Yes' && activeCompanions.length > 0 ? activeCompanions.join(', ') : 'None';

    const payload = {
      name: name.trim(),
      attendance: attendance,
      totalGuests: totalCount,
      guestCount: totalCount,
      companionNames: companionListStr,
      message: message.trim() || '',
      timestamp: new Date().toLocaleString()
    };

    // Save to localStorage for instant local admin preview
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    existing.unshift(payload);
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing));

    // Submit to Google Sheet Web App endpoint if provided
    if (googleSheetUrl) {
      try {
        await fetch(googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error('Google Sheet submit error:', err);
      }
    }

    setIsSubmitting(false);
    onSuccess(payload);
    setName('');
    setAttendance('Yes');
    setNumCompanions(0);
    setCompanionNames(['', '', '', '', '']);
    setMessage('');
  };

  return (
    <section id="rsvp" class="px-6 py-10 bg-white border-t border-amber-100">
      <div class="text-center mb-6">
        <span class="text-[10px] tracking-[0.25em] text-rose-500 font-semibold uppercase">Kindly Respond</span>
        <h2 class="font-serifTitle text-3xl font-semibold text-gray-800 mt-1">R.S.V.P.</h2>
        <p class="text-xs text-gray-500 mt-1">Please confirm your response by September 11, 2026</p>
      </div>

      <form onSubmit={handleSubmit} class="space-y-4">
        {/* Guest Name */}
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Guest Name <span class="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Juan Dela Cruz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
          />
        </div>

        {/* Attendance Radios */}
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Will you attend? <span class="text-rose-500">*</span>
          </label>
          <div class="grid grid-cols-2 gap-3">
            <label
              class={`cursor-pointer border rounded-lg p-3 text-center transition flex items-center justify-center gap-2 text-xs ${
                attendance === 'Yes' ? 'bg-rose-50 border-rose-400 font-semibold text-rose-700' : 'bg-white text-gray-700'
              }`}
            >
              <input
                type="radio"
                name="attendance"
                value="Yes"
                checked={attendance === 'Yes'}
                onChange={() => setAttendance('Yes')}
                class="text-rose-500 focus:ring-rose-300"
              />
              <span>Joyfully Accept</span>
            </label>
            <label
              class={`cursor-pointer border rounded-lg p-3 text-center transition flex items-center justify-center gap-2 text-xs ${
                attendance === 'No' ? 'bg-rose-50 border-rose-400 font-semibold text-rose-700' : 'bg-white text-gray-700'
              }`}
            >
              <input
                type="radio"
                name="attendance"
                value="No"
                checked={attendance === 'No'}
                onChange={() => setAttendance('No')}
                class="text-rose-500 focus:ring-rose-300"
              />
              <span>Regretfully Decline</span>
            </label>
          </div>
        </div>

        {/* Dynamic Companions Section */}
        {attendance === 'Yes' && (
          <>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                Number of Companions
              </label>
              <select
                value={numCompanions}
                onChange={(e) => setNumCompanions(Number(e.target.value))}
                class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white font-medium"
              >
                <option value={0}>0 Companions (Just me)</option>
                <option value={1}>1 Companion</option>
                <option value={2}>2 Companions</option>
                <option value={3}>3 Companions</option>
              </select>
            </div>

            {/* Dynamic Companion Inputs */}
            {Array.from({ length: numCompanions }).map((_, index) => (
              <div key={index} class="pl-3 border-l-2 border-rose-300 space-y-1 my-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-rose-700">
                  Companion {index + 1} Name <span class="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={`e.g. Companion ${index + 1} Full Name`}
                  value={companionNames[index] || ''}
                  onChange={(e) => handleCompanionChange(index, e.target.value)}
                  class="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
                />
              </div>
            ))}
          </>
        )}

        {/* Message */}
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Message for Gereth &amp; Garette
          </label>
          <textarea
            rows="2"
            placeholder="Send your warmest wishes..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium text-xs uppercase tracking-widest py-3 rounded-lg shadow-md transition duration-200 transform active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
        </button>
      </form>
    </section>
  );
}
