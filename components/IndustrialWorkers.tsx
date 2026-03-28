import React from 'react';

export default function IndustrialWorkers() {
  const workers = [
    { title: 'Quality Agent', desc: 'Autonomous inspection & dynamic parameter adjustment for 0.01% defect tolerance.' },
    { title: 'Logistics Agent', desc: 'Predictive material flow orchestration, minimizing inventory lock-up.' },
    { title: 'Compliance Agent', desc: 'Automated IATF 16949 audit trail generation, zero human input.' },
  ];

  return (
    <section id="suite" className="grid md:grid-cols-3 gap-8">
      {workers.map((w) => (
        <div key={w.title} className="p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-emerald-900 transition-all hover:bg-slate-800/50">
          <div className="w-12 h-12 bg-emerald-950 rounded-lg flex items-center justify-center mb-6 text-emerald-400 font-bold">AG</div>
          <h3 className="text-xl font-bold mb-3">{w.title}</h3>
          <p className="text-slate-400 text-sm">{w.desc}</p>
        </div>
      ))}
    </section>
  );
}
