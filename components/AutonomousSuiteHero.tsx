import React from 'react';

export default function AutonomousSuiteHero() {
  return (
    <section className="text-center py-24">
      <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950/50 rounded-full border border-emerald-900/50">
        Enterprise Autonomous Industrial OS
      </div>
      <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
        Precision-Engineered for <br />
        <span className="text-emerald-400">Supply Chain Resilience.</span>
      </h1>
      <p className="text-slate-400 max-w-2xl mx-auto text-xl mb-12">
        Dinnar Autonomous Suite eliminates the gap between defect detection and production response. Real-time reasoning for industrial giants.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-emerald-400 transition">Request Technical Briefing</button>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold border border-slate-700 hover:border-slate-500 transition">Explore Case Studies</button>
      </div>
    </section>
  );
}
