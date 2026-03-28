import React from 'react';

export default function EvidenceSection() {
  return (
    <section id="evidence" className="bg-slate-900/50 p-12 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-12">Technical Excellence & Patents</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-emerald-400 font-bold mb-2">Microsoft IP Portfolio</h4>
          <p className="text-slate-300">Inventors: Terry Qin (Sole Inventor). Retrieval Augmented AI for industrial inspection.</p>
        </div>
        <div>
          <h4 className="text-emerald-400 font-bold mb-2">CVPR Recognized Research</h4>
          <p className="text-slate-300">Published in CVPR 2021/2023. Validated by 270+ academic citations in edge vision.</p>
        </div>
      </div>
    </section>
  );
}
