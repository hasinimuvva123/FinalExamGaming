import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Video Walkthrough</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          A 15-minute deep dive into integrating Gemini with Unreal Engine/Unity for dynamic dialogue.
          We follow the <span className="text-indigo-400 font-semibold">Explain &rarr; Show &rarr; Try</span> methodology.
        </p>
      </div>

      <div className="bg-white rounded overflow-hidden border border-slate-200 shadow-xl shadow-indigo-100/50 aspect-video relative group cursor-pointer">
        {/* Placeholder for actual iframe */}
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-50/10 group-hover:bg-indigo-50/20 transition-all backdrop-blur-[1px]">
           <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border border-indigo-100">
              <Play className="text-indigo-400 fill-current ml-1" size={32} />
           </div>
        </div>
        <img 
          src="https://picsum.photos/1280/720?grayscale&blur=2" 
          alt="Tutorial Thumbnail" 
          className="w-full h-full object-cover opacity-90"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent">
          <div className="flex justify-between items-end">
             <div>
               <h3 className="text-xl font-bold text-slate-800">Implementing LLMs in Game Loop</h3>
               <p className="text-sm text-slate-500 mt-1">Section 2: The "Show" Phase - Live Coding</p>
             </div>
             <span className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-indigo-400 font-mono shadow-sm">14:25</span>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded bg-white border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
          <span className="text-indigo-400 font-mono text-xs mb-2 block font-semibold">00:00 - 02:45</span>
          <h4 className="text-slate-800 font-semibold mb-1">Concept & Motivation</h4>
          <p className="text-sm text-slate-500">Why static trees fail and how LLMs solve the "repetitive NPC" problem.</p>
        </div>
        <div className="p-5 rounded bg-white border border-indigo-200 shadow-md shadow-indigo-100/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-300"></div>
          <span className="text-indigo-500 font-mono text-xs mb-2 block font-semibold">02:45 - 09:30</span>
          <h4 className="text-slate-800 font-semibold mb-1">Live Implementation</h4>
          <p className="text-sm text-slate-500">Connecting the API, setting up the prompt, and handling state.</p>
        </div>
        <div className="p-5 rounded bg-white border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
          <span className="text-indigo-400 font-mono text-xs mb-2 block font-semibold">09:30 - 14:25</span>
          <h4 className="text-slate-800 font-semibold mb-1">Try It Yourself</h4>
          <p className="text-sm text-slate-500">Debugging common hallucinations and latency tips.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;