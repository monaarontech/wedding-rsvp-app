import React, { useState } from 'react';

export default function RsvpForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Yes',
    guestCount: '1',
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      guestCount: formData.attendance === 'Yes' ? formData.guestCount : '0',
      dietary: formData.dietary || 'None',
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
          mode: 'no-cors', // Google Apps Script handles no-cors redirect
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error('Google Sheet submit error:', err);
      }
    }

    setIsSubmitting(false);
    onSuccess(payload);
    setFormData({ name: '', attendance: 'Yes', guestCount: '1', dietary: '', message: '' });
  };

  return (
    <section id="rsvp" class="px-6 py-10 bg-amber-50/50 border-t border-amber-100">
      <div class="text-center mb-6">
        <span class="text-[10px] tracking-[0.25em] text-rose-500 font-semibold uppercase">Kindly Respond</span>
        <h2 class="font-serifTitle text-3xl font-semibold text-gray-800 mt-1">R.S.V.P.</h2>
        <p class="text-xs text-gray-500 mt-1">Please confirm your attendance by April 14, 2026</p>
      </div>

      <form onSubmit={handleSubmit} class="space-y-4">
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            required
            placeholder="e.g. Maria Clara Santos"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            class="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Will you attend?</label>
          <div class="grid grid-cols-2 gap-3">
            <label class={`cursor-pointer border rounded-lg p-3 text-center transition flex items-center justify-center gap-2 text-xs ${formData.attendance === 'Yes' ? 'bg-rose-50 border-rose-400 font-semibold text-rose-700' : 'bg-white text-gray-700'}`}>
              <input
                type="radio"
                name="attendance"
                value="Yes"
                checked={formData.attendance === 'Yes'}
                onChange={() => setFormData({ ...formData, attendance: 'Yes' })}
                class="text-rose-500 focus:ring-rose-300"
              />
              <span>Joyfully Accept</span>
            </label>
            <label class={`cursor-pointer border rounded-lg p-3 text-center transition flex items-center justify-center gap-2 text-xs ${formData.attendance === 'No' ? 'bg-rose-50 border-rose-400 font-semibold text-rose-700' : 'bg-white text-gray-700'}`}>
              <input
                type="radio"
                name="attendance"
                value="No"
                checked={formData.attendance === 'No'}
                onChange={() => setFormData({ ...formData, attendance: 'No' })}
                class="text-rose-500 focus:ring-rose-300"
              />
              <span>Regretfully Decline</span>
            </label>
          </div>
        </div>

        {formData.attendance === 'Yes' && (
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Number of Guests (including you)</label>
            <select
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              class="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests (+1)</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
        )}

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Dietary Restrictions / Requests</label>
          <input
            type="text"
            placeholder="e.g. Vegetarian, Allergies..."
            value={formData.dietary}
            onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
            class="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Message for the Couple</label>
          <textarea
            rows="2"
            placeholder="Send your warmest wishes..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            class="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white resize-none"
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
