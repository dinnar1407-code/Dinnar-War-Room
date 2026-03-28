import React from 'react';
import AutonomousSuiteHero from '@/components/AutonomousSuiteHero';
import IndustrialWorkers from '@/components/IndustrialWorkers';
import EvidenceSection from '@/components/EvidenceSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 导航 */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-8 py-5 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">DINNAR<span className="text-emerald-500">.AI</span></div>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#suite" className="hover:text-emerald-400 transition">Solutions</a>
          <a href="#evidence" className="hover:text-emerald-400 transition">Evidence</a>
          <a href="#demo" className="bg-emerald-600/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-900 hover:bg-emerald-600 hover:text-white transition">Request Demo</a>
        </div>
      </nav>

      {/* 内容主体 */}
      <main className="pt-24 max-w-6xl mx-auto px-6 space-y-32 pb-32">
        <AutonomousSuiteHero />
        <IndustrialWorkers />
        <EvidenceSection />
      </main>

      <footer className="border-t border-slate-800 py-12 text-center text-slate-600 text-sm">
        © 2026 Dinnar Autonomous Suite. Industrial Intelligence Engineered.
      </footer>
    </div>
  );
}
