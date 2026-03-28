"use client";

import React, { useState } from 'react';
// 导入所有核心组件
import HeroDiagnosis from '@/components/HeroDiagnosis';
import ArchitectureViewer from '@/components/ArchitectureViewer';
import RagCaseStudies from '@/components/RagCaseStudies';
import WarRoomGateModal from '@/components/WarRoomGateModal';

export default function Home() {
  // 定义状态:控制 War Room 弹窗的显示与隐藏
  const [isWarRoomOpen, setIsWarRoomOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black font-mono relative">
      {/* 1. 顶部导航栏 (Navbar) */}
      <nav className="fixed top-0 w-full z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#333] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* 模拟你产品图上的绿圈 Logo */}
          <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center">
            <span className="text-green-500 font-black text-xs">dn</span>
          </div>
          <span className="text-xl font-black tracking-widest text-white">
            DINNAR<span className="text-green-500">.AI</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-[#888]">
          <a href="#watcher" className="hover:text-green-400 transition">THE_WATCHER</a>
          <a href="#ecosystem" className="hover:text-green-400 transition">ECOSYSTEM</a>
          <a href="#cases" className="hover:text-green-400 transition">RAG_CASES</a>
        </div>
        {/* 触发弹窗的按钮 */}
        <button
          onClick={() => setIsWarRoomOpen(true)}
          className="bg-green-500 text-black px-6 py-2 text-sm font-bold rounded hover:bg-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition"
        >
          INITIATE WAR_ROOM
        </button>
      </nav>

      {/* 2. 主体内容区 (Main Content) */}
      <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        {/* A. Hero 区域:The Watcher 即时诊断 */}
        <section id="watcher" className="scroll-mt-24">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              INDUSTRIAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                AGENTIC INTELLIGENCE.
              </span>
            </h1>
            <p className="text-[#888] max-w-2xl text-lg">
              Upload a defect image below. Experience sub-second, multi-modal root cause analysis powered by Dinnar Foundation Layer.
            </p>
          </div>
          <HeroDiagnosis />
        </section>

        {/* B. 产品架构区域:The Ecosystem */}
        <section id="ecosystem" className="scroll-mt-24 w-full full-bleed">
          <ArchitectureViewer />
        </section>

        {/* C. RAG 案例检索区域:Contextual Cases */}
        <section id="cases" className="scroll-mt-24">
          <RagCaseStudies />
        </section>
      </main>

      {/* 3. 底部版权 (Footer) */}
      <footer className="border-t border-[#333] bg-[#0A0A0A] py-8 text-center text-[#555] text-xs">
        <p>SYSTEM_ONLINE // MULTI-MODAL REASONING ACTIVE</p>
        <p className="mt-2">© 2026 Dinnar AI. Engineered in Silicon Valley. All rights reserved.</p>
      </footer>

      {/* 4. 潜客拦截弹窗 (War Room Modal) */}
      <WarRoomGateModal
        isOpen={isWarRoomOpen}
        onClose={() => setIsWarRoomOpen(false)}
      />
    </div>
  );
}
