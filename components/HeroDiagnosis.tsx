import React from 'react';

export default function HeroDiagnosis() {
  return (
    <div className="bg-[#111] p-8 rounded-lg border border-[#333] border-dashed">
      <h2 className="text-xl font-bold mb-4">即时诊断控制台</h2>
      <div className="h-48 flex items-center justify-center border border-[#222] rounded bg-[#0A0A0A]">
        <p className="text-[#555]">上传图片以启动诊断...</p>
      </div>
    </div>
  );
}
