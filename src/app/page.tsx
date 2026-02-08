import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#FF5A36] selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF5A36] rounded-lg flex items-center justify-center font-bold text-xl text-white">🦞</div>
          <span className="text-2xl font-bold tracking-tight">OpenClaw</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Documentation</a>
          <a href="#" className="hover:text-black transition-colors">Features</a>
          <a href="#" className="hover:text-black transition-colors">Github</a>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-[#FF5A36]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A36] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A36]"></span>
            </span>
            New version 2026.2.6 is live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl leading-tight">
            The Future of AI is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-[#FF8A6B]">Personal</span>.
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Your own AI assistant, running on your terms, across every channel. 
            Connect WhatsApp, Telegram, Discord, and more to your private intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#FF5A36] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#ff6b4d] hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,90,54,0.3)]">
              Deploy Your Assistant
            </button>
            <button className="bg-white border border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all">
              Read Documentation
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#FF5A36]/50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#FF5A36]/10 transition-colors">
              💬
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-Channel</h3>
            <p className="text-gray-500 leading-relaxed">
              Message your assistant from WhatsApp, Telegram, or Discord. It stays in sync across all platforms.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#FF5A36]/50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#FF5A36]/10 transition-colors">
              🛠️
            </div>
            <h3 className="text-xl font-bold mb-3">Tool Enabled</h3>
            <p className="text-gray-500 leading-relaxed">
              Your assistant can browse the web, write code, manage files, and control your servers autonomously.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#FF5A36]/50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#FF5A36]/10 transition-colors">
              🔒
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy First</h3>
            <p className="text-gray-500 leading-relaxed">
              Self-host everything. Your messages and documents stay on your infrastructure, never our servers.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2 grayscale opacity-50">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white font-bold">🦞</div>
            <span className="font-bold">OpenClaw</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 OpenClaw Project. Built with passion for personal intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}
