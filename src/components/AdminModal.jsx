import React from 'react';

export default function AdminModal({ isOpen, onClose, rsvps, onClear }) {
  if (!isOpen) return null;

  return (
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 max-h-[85vh] flex flex-col">
        <div class="flex justify-between items-center mb-4 pb-2 border-b">
          <div>
            <h3 class="font-serifTitle text-xl font-bold text-gray-800">Collected RSVPs</h3>
            <p class="text-[11px] text-gray-500">Live response tracker (Stored in browser memory &amp; Google Sheet)</p>
          </div>
          <button onClick={onClose} class="text-gray-400 hover:text-gray-600 font-bold text-lg">&times;</button>
        </div>

        <div class="flex-1 overflow-y-auto space-y-3">
          {rsvps.length === 0 ? (
            <p class="text-xs text-gray-400 text-center py-6">No RSVPs submitted yet. Fill out the form to test!</p>
          ) : (
            rsvps.map((r, i) => (
              <div key={i} class={`p-3 rounded-lg border ${r.attendance === 'Yes' ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/40'} text-xs`}>
                <div class="flex justify-between items-start font-medium">
                  <span class="text-gray-800 text-sm font-bold">{r.name}</span>
                  <span class={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${r.attendance === 'Yes' ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'}`}>
                    {r.attendance === 'Yes' ? `Attending (${r.totalGuests || (1 + Number(r.numCompanions || 0))})` : 'Declined'}
                  </span>
                </div>

                {r.attendance === 'Yes' && r.companionNames && (
                  <p class="text-gray-600 mt-1">
                    <strong>Companions:</strong> {r.companionNames}
                  </p>
                )}

                {r.message && <p class="text-gray-600 mt-1 italic">"{r.message}"</p>}
                <p class="text-[10px] text-gray-400 mt-1 text-right">{r.timestamp}</p>
              </div>
            ))
          )}
        </div>

        <div class="pt-4 border-t mt-4 flex justify-between items-center text-xs">
          <button onClick={onClear} class="text-rose-500 hover:text-rose-700 underline font-medium">Clear Saved Responses</button>
          <button onClick={onClose} class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium">Close</button>
        </div>
      </div>
    </div>
  );
}
