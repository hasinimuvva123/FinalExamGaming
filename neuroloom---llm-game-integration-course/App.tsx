import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Documentation from './components/Documentation';
import CodeLab from './components/CodeLab';
import InteractiveDemo from './components/InteractiveDemo';
import Quiz from './components/Quiz';
import PedagogyReport from './components/PedagogyReport';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Hero onStart={() => setCurrentView(View.TUTORIAL_VIDEO)} />;
      case View.TUTORIAL_VIDEO:
        return <VideoSection />;
      case View.DOCUMENTATION:
        return <Documentation />;
      case View.CODE_LAB:
        return <CodeLab />;
      case View.LIVE_DEMO:
        return <InteractiveDemo />;
      case View.ASSESSMENT:
        return <Quiz />;
      case View.PEDAGOGY:
        return <PedagogyReport />;
      default:
        return <Hero onStart={() => setCurrentView(View.TUTORIAL_VIDEO)} />;
    }
  };

  return (
    <div className="min-h-screen bg-pastel-50 text-pastel-text font-sans selection:bg-pastel-primary selection:text-white overflow-hidden">
      {/* Pastel Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100 blur-[100px] opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-rose-100 blur-[100px] opacity-40" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-purple-100 blur-[100px] opacity-40" />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-teal-100 blur-[100px] opacity-40" />
      </div>

      <Navigation currentView={currentView} setCurrentView={setCurrentView} />

      <main className="relative z-10 pt-16 animate-in fade-in duration-500">
        {renderView()}
      </main>


    </div>
  );
};

export default App;