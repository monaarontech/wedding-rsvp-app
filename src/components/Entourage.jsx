import React from 'react';

export default function Entourage() {
  return (
    <section class="px-6 py-8 text-center bg-white border-t border-amber-100/70">
      <h2 class="font-script text-4xl text-gray-800 mb-6">The Entourage</h2>

      {/* Parents */}
      <div class="grid grid-cols-2 gap-4 mb-8 text-xs">
        <div>
          <h4 class="font-bold tracking-wider uppercase text-gray-500 mb-1 text-[11px]">Parents of the Groom</h4>
          <p class="font-medium text-gray-800">MR. GERNANDO LUCIO O. RAMOS</p>
          <p class="text-gray-700">MRS. MARIATERESA M. RAMOS</p>
        </div>
        <div>
          <h4 class="font-bold tracking-wider uppercase text-gray-500 mb-1 text-[11px]">Parents of the Bride</h4>
          <p class="font-medium text-gray-800">MR. VERGILIO G. ESTACIO</p>
          <p class="text-gray-700">MRS. RHONDA A. ESTACIO</p>
        </div>
      </div>

      {/* Principal Sponsors */}
      <div class="mb-8 text-xs">
        <h4 class="font-bold tracking-widest uppercase text-gray-700 text-sm mb-3">Principal Sponsors</h4>
        <div class="grid grid-cols-2 gap-x-2 gap-y-1 text-gray-600 leading-snug">
          <div>
            <p>MR. ANGELITO T. MADRID</p>
            <p>MR. RAMON T. MADRID</p>
            <p>MR. RECINO S. CURA</p>
            <p>MR. HENRY M. DE GUZMAN</p>
            <p>MR. REYNALDO R. DELA CRUZ</p>
            <p>MR. WILFREDO S. GALO</p>
            <p>MR. RENATO R. APSAY</p>
            <p>MR. SULPICIO H. CARTERA III</p>
            <p>MR. MICHAEL B. VOGOTE</p>
          </div>
          <div>
            <p>MRS. ROSARIO P. MADRID</p>
            <p>MRS. RIZZA P. MADRID</p>
            <p>MRS. LOLITA L. CURA</p>
            <p>MRS. JANET M. AMBROCIO</p>
            <p>MRS. ROSALIE DR. BAUTISTA</p>
            <p>MRS. MARILYN E. GALANG</p>
            <p>MRS. ROSALIE P. GALANG</p>
            <p>MRS. LUNINGNING C. PEREZ</p>
            <p>MRS. SURAIDA C. MIGUEL</p>
          </div>
        </div>
      </div>

      {/* Best Man & Maid of Honor */}
      <div class="grid grid-cols-2 gap-4 mb-6 text-xs">
        <div>
          <h4 class="font-script text-2xl text-gray-800 mb-1">Best Man</h4>
          <p class="font-medium text-gray-700 uppercase">JUDE NEIL RELLU C. PEREZ</p>
        </div>
        <div>
          <h4 class="font-script text-2xl text-gray-800 mb-1">Maid of Honor</h4>
          <p class="font-medium text-gray-700 uppercase">DENISSE M. CURA</p>
        </div>
      </div>

      {/* Matron of Honor */}
      <div class="mb-8 text-xs">
        <h4 class="font-script text-2xl text-gray-800 mb-1">Matron of Honor</h4>
        <p class="font-medium text-gray-700 uppercase">PRECIOUS YVETTE M. LAXAMANA</p>
      </div>

      {/* Secondary Sponsors */}
      <div class="mb-8 pt-4 border-t border-amber-100 text-xs">
        <h3 class="font-script text-3xl text-gray-800 mb-4">Secondary Sponsors</h3>
        <div class="grid grid-cols-3 gap-2 text-center mb-6">
          <div class="p-2 bg-amber-50/50 rounded-lg">
            <h5 class="font-script text-xl text-rose-500">Candle</h5>
            <p class="text-[11px] font-medium text-gray-700">MARK ANGELO N. BAYRO</p>
            <p class="text-[11px] text-gray-600">PRINCESS JOY P. MADRID</p>
          </div>
          <div class="p-2 bg-amber-50/50 rounded-lg">
            <h5 class="font-script text-xl text-rose-500">Cord</h5>
            <p class="text-[11px] font-medium text-gray-700">RICHARD A. BOQUERON</p>
            <p class="text-[11px] text-gray-600">GARETTE JOY A. ESTACIO</p>
          </div>
          <div class="p-2 bg-amber-50/50 rounded-lg">
            <h5 class="font-script text-xl text-rose-500">Veil</h5>
            <p class="text-[11px] font-medium text-gray-700">ALOYSIUS P. MADRID</p>
            <p class="text-[11px] text-gray-600">DONNALYN M. CURA</p>
          </div>
        </div>

        {/* Groomsmen & Bridesmaids */}
        <div class="grid grid-cols-2 gap-4 text-left bg-amber-50/30 p-4 rounded-xl border border-amber-100/60 mb-6">
          <div>
            <h4 class="font-script text-2xl text-center text-gray-800 mb-2">Groomsmen</h4>
            <ul class="space-y-1 text-[11px] text-gray-700">
              <li>DARREN M. CURA</li>
              <li>MARK ANGELO P. MADRID</li>
              <li>JOHN PHILIP T. SIBUG</li>
              <li>JOHN REY A. RAFAEL</li>
              <li>JEFFREY A. MARIGMEN</li>
              <li>DANIEL M. MENORCA</li>
              <li>RYON EXEQUIEL T. LARRACAS</li>
            </ul>
          </div>
          <div>
            <h4 class="font-script text-2xl text-center text-gray-800 mb-2">Bridesmaids</h4>
            <ul class="space-y-1 text-[11px] text-gray-700">
              <li>JOANNA MARIE ALCANTARA</li>
              <li>ALESSANDRA P. MADRID</li>
              <li>ALYZZA P. MADRID</li>
              <li>PRINCESS MADALYN I. BOQUERON</li>
              <li>JASMIN P. MIRANDA</li>
              <li>JANEREE A. ELLANO</li>
              <li>JAZELLE MARY A. ELLANO</li>
              <li>ZYRA D. BALLESTA</li>
            </ul>
          </div>
        </div>

        {/* Bearers & Flower Girls */}
        <div class="grid grid-cols-2 gap-3 text-center text-xs">
          <div class="bg-white p-2.5 rounded-lg border border-amber-100">
            <h5 class="font-script text-xl text-amber-800">Ring Bearer</h5>
            <p class="text-[11px] text-gray-700">JADE MICHAEL O. BOQUERON</p>
          </div>
          <div class="bg-white p-2.5 rounded-lg border border-amber-100">
            <h5 class="font-script text-xl text-amber-800">Bible Bearer</h5>
            <p class="text-[11px] text-gray-700">PRINCE MARKUZ I. BOQUERON</p>
          </div>
          <div class="bg-white p-2.5 rounded-lg border border-amber-100">
            <h5 class="font-script text-xl text-amber-800">Coin Bearer</h5>
            <p class="text-[11px] text-gray-700">PRINCE MATTHEW I. BOQUERON</p>
          </div>
          <div class="bg-white p-2.5 rounded-lg border border-amber-100">
            <h5 class="font-script text-xl text-amber-800">Flower Girls</h5>
            <p class="text-[11px] text-gray-700">PRINCESS MALIA I. BOQUERON</p>
            <p class="text-[11px] text-gray-700">ELLARAH CRAE R. TORRES</p>
            <p class="text-[11px] text-gray-700">SOLANA M. BUNDALIAN</p>
          </div>
        </div>
      </div>
    </section>
  );
}
