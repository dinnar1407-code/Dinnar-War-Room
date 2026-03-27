"use client";

import React, { useState } from 'react';

const WarRoomGateModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [objective, setObjective] = useState('Reduce False Reject Rate (FRR)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 调用我们刚写的 API
      const res = await fetch('/api/war-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, companyName, primaryObjective: objective }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      
      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);
      alert('Error: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#111] border border-green-500 p-8 rounded-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
        {isSuccess ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-green-400 mb-2">ACCESS REQUESTED</h3>
            <p className="text-gray-400">我们将尽快处理您的接入请求。</p>
            <button onClick={onClose} className="mt-6 bg-green-500 text-black px-6 py-2 rounded font-bold">CLOSE</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">INITIATE WAR_ROOM</h2>
            <input 
              type="email" placeholder="Email" required 
              className="w-full bg-[#222] p-3 rounded border border-[#444] text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="text" placeholder="Company Name" required 
              className="w-full bg-[#222] p-3 rounded border border-[#444] text-white"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <select 
              className="w-full bg-[#222] p-3 rounded border border-[#444] text-white"
              onChange={(e) => setObjective(e.target.value)}
            >
              <option>Reduce False Reject Rate (FRR)</option>
              <option>Legacy Line Integration</option>
              <option>AI-driven Yield Optimization</option>
            </select>
            <button 
              disabled={isSubmitting}
              className="w-full bg-green-500 text-black font-bold p-3 rounded hover:bg-green-400 transition"
            >
              {isSubmitting ? 'SUBMITTING...' : 'ACCESS REQUEST'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WarRoomGateModal;
