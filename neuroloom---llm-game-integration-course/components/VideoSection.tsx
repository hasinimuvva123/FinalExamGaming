import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Tutorial</h2>
      </div>

      <div className="bg-black rounded-lg overflow-hidden border border-slate-200 shadow-xl shadow-indigo-100/50 aspect-video relative group">
        <video
          className="w-full h-full object-cover"
          controls
          title="Tutorial Video"
        >
          <source src="/LLM_MatrixAwakens_Tutorial.mov" type="video/mp4" />
          <source src="/LLM_MatrixAwakens_Tutorial.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>


    </div>
  );
};

export default VideoSection;