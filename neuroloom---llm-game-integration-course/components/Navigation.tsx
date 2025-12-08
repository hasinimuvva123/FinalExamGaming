import React from 'react';
import { View } from '../types';
import { Terminal, BookOpen, Play, Code, Cpu, GraduationCap, Layout } from 'lucide-react';

interface NavigationProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setCurrentView }) => {

  const navItems = [
    { id: View.HOME, label: 'Mission', icon: Layout },
    { id: View.TUTORIAL_VIDEO, label: 'Tutorial', icon: Play },
    { id: View.DOCUMENTATION, label: 'Docs', icon: BookOpen },
    { id: View.CODE_LAB, label: 'Blueprints', icon: Code },
    { id: View.LIVE_DEMO, label: 'Simulation', icon: Terminal },
    { id: View.ASSESSMENT, label: 'Training', icon: Cpu },
    { id: View.PEDAGOGY, label: 'Report', icon: GraduationCap },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setCurrentView(View.HOME)}>
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-300 to-purple-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-white font-bold font-mono">N</span>
            </div>
            <span className="text-slate-700 font-bold tracking-tight text-lg hidden sm:block">Neuro<span className="text-indigo-400">Loom</span></span>
          </div>

          <div className="flex space-x-1 overflow-x-auto no-scrollbar py-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center px-3 py-2 rounded text-sm font-medium transition-all duration-200 whitespace-nowrap border
                    ${isActive
                      ? 'bg-indigo-50 border-indigo-100 text-indigo-500 shadow-sm'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <Icon size={16} className={`mr-2 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;