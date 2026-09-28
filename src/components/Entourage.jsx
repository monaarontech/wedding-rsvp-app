import React from 'react';

export default function Entourage() {
  return (
    <section class="px-6 py-10 text-center bg-white border-t border-amber-100/70">
      <span class="text-[10px] tracking-[0.25em] text-rose-500 font-semibold uppercase">Ramos &ndash; Estacio Nuptials</span>
      <h2 class="font-script text-4xl text-gray-800 mb-6 mt-1">The Entourage</h2>

      {/* Parents Section */}
      <div class="grid grid-cols-2 gap-4 mb-6 text-xs bg-amber-50/30 p-4 rounded-xl border border-amber-100/60">
        <div>
          <h4 class="font-bold tracking-wider uppercase text-rose-700 mb-2 text-[11px]">Parents of the Groom</h4>
          <p class="font-medium text-gray-800">Mr. Gernando Lucio O. Ramos</p>
          <p class="text-gray-700">Mrs. Mariateresa M. Ramos</p>
        </div>
        <div>
          <h4 class="font-bold tracking-wider uppercase text-rose-700 mb-2 text-[11px]">Parents of the Bride</h4>
          <p class="font-medium text-gray-800">Mr. Vergilio G. Estacio</p>
          <p class="text-gray-700">Mrs. Rhonda A. Estacio</p>
        </div>
      </div>

      {/* Grandparents & Officiating Pastor */}
      <div class="grid grid-cols-2 gap-4 mb-8 text-xs">
        <div class="bg-amber-50/20 p-3 rounded-lg border border-amber-100/50">
          <h4 class="font-bold tracking-wider uppercase text-gray-600 mb-1.5 text-[10px]">Grandparents of the Bride</h4>
          <p class="text-gray-800 font-medium">Mrs. Librada G. Estacio</p>
          <p class="text-gray-800 font-medium">Mrs. Virginia D. Aquino</p>
        </div>
        <div class="bg-amber-50/20 p-3 rounded-lg border border-amber-100/50 flex flex-col justify-center">
          <h4 class="font-bold tracking-wider uppercase text-gray-600 mb-1.5 text-[10px]">Officiating Pastor</h4>
          <p class="text-gray-800 font-medium">Rev. Domingo M. Albinto</p>
        </div>
      </div>

      {/* Principal Sponsors */}
      <div class="mb-8 text-xs bg-amber-50/40 p-5 rounded-2xl border border-amber-200/60 shadow-2xs">
        <h3 class="font-script text-3xl text-gray-800 mb-3">Principal Sponsors</h3>
        <div class="grid grid-cols-2 gap-x-3 gap-y-1.5 text-gray-700 font-medium text-[11px] leading-snug">
          <div class="space-y-1">
            <p>Mr. Melchor S. Marcelo</p>
            <p>Rev. Alberto D. Victoria</p>
            <p>Mr. Ruben M. Magallanes</p>
            <p>Mr. Magnum O. Ramos</p>
            <p>Mr. Froilan Abalos</p>
            <p>Mr. Mar Lagarico</p>
          </div>
          <div class="space-y-1">
            <p>Mrs. Victoria B. Marcelo</p>
            <p>Mrs. Evangeline M. Victoria</p>
            <p>Mrs. Conchita R. Aquino</p>
            <p>Mrs. Lalaine C. Ramos</p>
            <p>Mrs. Remedios Abalos</p>
            <p>Mrs. Nerissa Lagarico</p>
          </div>
        </div>
        <div class="mt-2.5 pt-2.5 border-t border-amber-200/50 space-y-1 text-gray-700 font-medium text-[11px]">
          <p>Mrs. Ruth M. Palasigue</p>
          <p>Hon. Roda Anga-Angan</p>
          <p>Mrs. Presilia E. Sapitula</p>
        </div>
      </div>

      {/* Best Man & Maid of Honor */}
      <div class="grid grid-cols-2 gap-4 mb-8 text-xs">
        <div class="bg-rose-50/40 p-3.5 rounded-xl border border-rose-100 shadow-2xs">
          <h4 class="font-script text-2xl text-rose-700 mb-0.5">Best Man</h4>
          <p class="font-semibold text-gray-800">Mr. Grant Gerson M. Ramos</p>
        </div>
        <div class="bg-rose-50/40 p-3.5 rounded-xl border border-rose-100 shadow-2xs">
          <h4 class="font-script text-2xl text-rose-700 mb-0.5">Maid of Honor</h4>
          <p class="font-semibold text-gray-800">Ms. Justine Ricci Abalos</p>
        </div>
      </div>

      {/* Secondary Sponsors */}
      <div class="mb-8 pt-4 border-t border-amber-100 text-xs">
        <h3 class="font-script text-3xl text-gray-800 mb-4">Secondary Sponsors</h3>
        <div class="grid grid-cols-3 gap-2.5 text-center mb-6">
          <div class="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
            <span class="font-serifTitle italic text-xs text-rose-600 block mb-1">To light our path</span>
            <p class="text-[11px] font-medium text-gray-800">Mr. Jehliel Nowel M. Palasigue</p>
            <p class="text-[11px] text-gray-700">Ms. Noemilyn Angeles</p>
          </div>
          <div class="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
            <span class="font-serifTitle italic text-xs text-rose-600 block mb-1">To clothe us as one</span>
            <p class="text-[11px] font-medium text-gray-800">Mr. Jazer M. Palasigue</p>
            <p class="text-[11px] text-gray-700">Ms. Nuela M. Marcelo</p>
          </div>
          <div class="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
            <span class="font-serifTitle italic text-xs text-rose-600 block mb-1">To bind us together</span>
            <p class="text-[11px] text-gray-700">Ms. Dana Marie Ramos</p>
            <p class="text-[11px] font-medium text-gray-800">Mr. John Harold A. Estacio</p>
          </div>
        </div>

        {/* Groomsmen & Bridesmaids */}
        <div class="grid grid-cols-2 gap-4 text-center bg-amber-50/30 p-4 rounded-xl border border-amber-100/60 mb-6">
          <div>
            <h4 class="font-script text-2xl text-gray-800 mb-2">Groomsmen</h4>
            <ul class="space-y-1 text-[11px] text-gray-700 font-medium">
              <li>Mr. Bullet F. Ramos</li>
              <li>Mr. Adam Heziah M. Dulay</li>
              <li>Mr. Maurice Carlyle M. Dela Cruz</li>
            </ul>
          </div>
          <div>
            <h4 class="font-script text-2xl text-gray-800 mb-2">Bridesmaids</h4>
            <ul class="space-y-1 text-[11px] text-gray-700 font-medium">
              <li>Ms. Nicole Jose</li>
              <li>Ms. Xylyn Y. Garcia</li>
              <li>Ms. Gayle M. Castillo</li>
              <li>Ms. Margarette Jean R. Canlas</li>
            </ul>
          </div>
        </div>

        {/* Bearers & Flower Girls */}
        <div class="grid grid-cols-2 gap-3 text-center text-xs">
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h5 class="font-script text-xl text-amber-800">Ring Bearer</h5>
            <p class="text-[11px] font-medium text-gray-800">Grayson Jayce S. Ramos</p>
          </div>
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h5 class="font-script text-xl text-amber-800">Bible Bearer</h5>
            <p class="text-[11px] font-medium text-gray-800">Prince Jireh E. Perlas</p>
          </div>
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h5 class="font-script text-xl text-amber-800">Coin Bearer</h5>
            <p class="text-[11px] font-medium text-gray-800">Euno Nikolai Lagarico</p>
          </div>
          <div class="bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
            <h5 class="font-script text-xl text-amber-800 mb-1">Flower Girls</h5>
            <p class="text-[11px] text-gray-700">Moriah Erina E. Perlas</p>
            <p class="text-[11px] text-gray-700">Shace Isabella T. Victoria</p>
            <p class="text-[11px] text-gray-700">Louis Alexandra Sicat</p>
            <p class="text-[11px] text-gray-700">Amara M. Castillo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
