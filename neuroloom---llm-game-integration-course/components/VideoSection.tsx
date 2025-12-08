import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Tutorial</h2>
      </div>

      <div className="bg-black rounded-lg overflow-hidden border border-slate-200 shadow-xl shadow-indigo-100/50 aspect-video relative group">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/j8cNEDGyTP4"
          title="NeuroLoom Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>


    </div>
  );
};

export default VideoSection;