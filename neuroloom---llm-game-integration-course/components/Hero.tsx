import React from 'react';
import { View } from '../types';
import { ArrowRight, Bot, Zap, MessageSquare } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">

            <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl font-sans">
              Dynamic Dialogue with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">LLM Integration</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Move beyond static behavior trees. Learn how to implement context-aware, generative NPCs in your game engine using the latest Large Language Models.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={onStart}
                className="rounded bg-indigo-400 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all flex items-center gap-2 group hover:-translate-y-1"
              >
                Start Tutorial <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded bg-white/40 p-2 ring-1 ring-inset ring-white/60 lg:-m-4 lg:p-4 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-slate-600">
                <div className="p-8 rounded bg-white border border-slate-100 shadow-sm hover:border-indigo-100 hover:shadow-md transition-all group">
                  <div className="mx-auto w-14 h-14 bg-indigo-50 rounded flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Bot className="text-indigo-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Persona Injection</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Define complex character traits via system prompts rather than if/else statements.</p>
                </div>
                <div className="p-8 rounded bg-white border border-slate-100 shadow-sm hover:border-purple-100 hover:shadow-md transition-all group">
                  <div className="mx-auto w-14 h-14 bg-purple-50 rounded flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <MessageSquare className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Context Awareness</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Pass game state (location, inventory, reputation) to the LLM for reactive dialogue.</p>
                </div>
                <div className="p-8 rounded bg-white border border-slate-100 shadow-sm hover:border-teal-100 hover:shadow-md transition-all group">
                  <div className="mx-auto w-14 h-14 bg-teal-50 rounded flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Zap className="text-teal-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Real-time Generation</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Latency optimization strategies for seamless player experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;