import React, { useState } from 'react';
import Image from 'next/image';

const ArchitectureViewer: React.FC = () => {
  const [activeHardware, setActiveHardware] = useState<'camera' | 'box' | null>(null);

  return (
    <div className="bg-[#0A0A0A] text-white font-mono p-10 border-t border-b border-[#333] mt-12">
      {/* 标题区 */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-black text-green-400 tracking-widest mb-2">THE ECOSYSTEM // 三层生态架构</h2>
        <p className="text-[#888] text-sm max-w-2xl mx-auto">
          A perfectly decoupled hardware ecosystem. Break free from the cloud and deploy expert-level AI reasoning directly to the bleeding edge.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 左侧 / 上侧:全息场景拓扑图 (图 10) */}
        <div className="lg:col-span-7 relative group border border-[#333] rounded-lg overflow-hidden bg-black">
          <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
          <img
            src="/images/topology.jpg"
            alt="Dinnar Factory Topology"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          />
          <div className="absolute bottom-4 left-4 z-20 bg-black/80 border border-green-500 p-3 rounded backdrop-blur-md">
            <div className="text-green-400 font-bold text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> NETWORK_SYNC_ACTIVE
            </div>
            <div className="text-xs text-[#AAA] mt-1">5G/Wi-Fi 6 Mesh Topology</div>
          </div>
        </div>

        {/* 右侧:硬件产品卡片 (图 08 & 图 09) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* 卡片 1:Agent Control Box (图 09) */}
          <div
            className="group relative flex flex-col bg-[#111] border border-[#333] hover:border-green-500 rounded-lg overflow-hidden transition-all duration-300 cursor-default shadow-lg hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]"
            onMouseEnter={() => setActiveHardware('box')}
            onMouseLeave={() => setActiveHardware(null)}
          >
            <div className="flex h-48 border-b border-[#333]">
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-1">SYNAPSE Edge-AI-C1</h3>
                <h4 className="text-green-400 text-sm font-bold mb-3">THE HANDS // 控制盒</h4>
                <div className="flex gap-2 text-xs text-[#888]">
                  <span className="bg-[#222] px-2 py-1 rounded border border-[#444]">640 TFLOPS</span>
                  <span className="bg-[#222] px-2 py-1 rounded border border-[#444]">Zero-Latency</span>
                </div>
              </div>
              <div className="w-1/2 bg-black relative overflow-hidden">
                <img
                  src="/images/edge-box.jpg"
                  alt="Agent Control Box"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-4 text-sm text-[#AAA] space-y-2">
              <p><strong>工业边缘智能控制盒 V2:</strong>作为现场算力中枢，精准提取老旧设备的运行数据，在本地毫秒级内完成复杂的缺陷检测与推理。</p>
              <p className="text-xs border-t border-[#333] pt-2 mt-2"><strong>The Hands:</strong> Acts as the onsite computation hub, extracting operational data from legacy equipment to synchronize vision with ground-level control.</p>
            </div>
          </div>

          {/* 卡片 2:Smart Camera (图 08) */}
          <div
            className="group relative flex flex-col bg-[#111] border border-[#333] hover:border-green-500 rounded-lg overflow-hidden transition-all duration-300 cursor-default shadow-lg hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]"
            onMouseEnter={() => setActiveHardware('camera')}
            onMouseLeave={() => setActiveHardware(null)}
          >
            <div className="flex h-48 border-b border-[#333]">
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-1">SYNAPSE SY-X8-AI</h3>
                <h4 className="text-green-400 text-sm font-bold mb-3">THE EYES // 智能摄像头</h4>
                <div className="flex gap-2 text-xs text-[#888]">
                  <span className="bg-[#222] px-2 py-1 rounded border border-[#444]">Spectrum</span>
                  <span className="bg-[#222] px-2 py-1 rounded border border-[#444]">Micro-level</span>
                </div>
              </div>
              <div className="w-1/2 bg-black relative overflow-hidden">
                <img
                  src="/images/camera.jpg"
                  alt="Industrial Smart Camera"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-4 text-sm text-[#AAA] space-y-2">
              <p><strong>工业级全光谱智能摄像头:</strong>提供微米级的高速瑕疵抓拍，即时在高速运动的生产线上也能完美捕捉微小瑕疵，与 AI 算法深度联调。</p>
              <p className="text-xs border-t border-[#333] pt-2 mt-2"><strong>The Eyes:</strong> Captures high-speed, micron-level defect imagery. Perfectly synchronized with AI algorithms for extreme precision on active lines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureViewer;
