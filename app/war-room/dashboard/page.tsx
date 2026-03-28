import React from 'react';

export default function WarRoomDashboard() {
  // 模拟一些仪表盘数据，后续可对接 Supabase 实时 API
  const metrics = [
    { label: 'AGENT_UPTIME', value: '99.98%' },
    { label: 'NEXUS_SYNC_RATE', value: '420req/s' },
    { label: 'ACTIVE_AGENTS', value: '14,070' },
    { label: 'SYSTEM_STATUS', value: 'OPTIMAL' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-green-500 font-mono p-8">
      <header className="border-b border-[#333] pb-6 mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-widest">WAR_ROOM // DASHBOARD</h1>
        <div className="text-sm text-[#888]">SESSION: ACTIVE // AUTH: TERRY</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#0A0A0A] p-6 rounded border border-[#333] shadow-[0_0_10px_rgba(74,222,128,0.05)]">
            <div className="text-[#555] text-xs mb-2">{m.label}</div>
            <div className="text-3xl font-black">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#0A0A0A] p-8 rounded border border-[#333]">
        <h2 className="text-lg font-bold mb-6 text-white border-b border-[#333] pb-4">SYSTEM_LOGS</h2>
        <div className="space-y-3 text-sm text-[#888] h-64 overflow-y-auto">
          <p>[18:20:00] NEXUS_CAMPAIGN // GitHub Sync active</p>
          <p>[18:20:05] SYSTEM_HEALTH // Checksums validated</p>
          <p>[18:20:10] AGENT_DASHBOARD // UI Initialized</p>
          <p className="text-green-500">[18:21:00] TERRY_AUTH // Access Granted</p>
        </div>
      </div>
    </div>
  );
}
