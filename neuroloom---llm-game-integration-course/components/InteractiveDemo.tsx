import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGroqCompletion, parseDialogues, fetchDeepgramAudio, ParsedDialogue } from '../services/webSimulationService';
import { Send, User, RotateCcw, Volume2, Mic, Play, Pause } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Start the simulation to interact with the characters.", timestamp: Date.now() }
  ]);
  const [loading, setLoading] = useState(false);
  // Queue of audio URLs to play
  const [audioQueue, setAudioQueue] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Audio Playback Effect
  useEffect(() => {
    if (!isPlaying && audioQueue.length > 0) {
      playNextAudio();
    }
  }, [audioQueue, isPlaying]);

  const playNextAudio = () => {
    if (audioQueue.length === 0) return;

    const nextAudioUrl = audioQueue[0];
    setIsPlaying(true);

    if (!audioRef.current) {
      audioRef.current = new Audio(nextAudioUrl);
    } else {
      audioRef.current.src = nextAudioUrl;
    }

    audioRef.current.play().catch(e => console.error("Playback failed:", e));

    audioRef.current.onended = () => {
      setIsPlaying(false);
      setAudioQueue(prev => prev.slice(1)); // Remove played item
    };
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // 1. Get Text Response from Groq
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await getGroqCompletion(history, input);

      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);

      // 2. Parse and Fetch Audio
      const parsed = parseDialogues(responseText);
      const newAudioUrls: string[] = [];

      // Fetch all audios (sequentially or parallel - parallel is faster)
      await Promise.all(parsed.map(async (p) => {
        const url = await fetchDeepgramAudio(p.text, p.model);
        if (url) {
          // We need to maintain order, so we can't just push results as they arrive
          // But for simplicity in this demo, let's assume we want them in order of text appearance.
          // This Promise.all doesn't guarantee order in the array without careful mapping.
        }
      }));

      // Re-doing fetch to ensure order
      for (const p of parsed) {
        const url = await fetchDeepgramAudio(p.text, p.model);
        if (url) {
          newAudioUrls.push(url);
        }
      }

      if (newAudioUrls.length > 0) {
        setAudioQueue(prev => [...prev, ...newAudioUrls]);
      }

    } catch (error) {
      console.error("Simulation Error:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: `<System> Error connecting to simulation: ${error instanceof Error ? error.message : 'Unknown error'} </System>`,
        timestamp: Date.now()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      { role: 'model', text: "Simulation reset. Awaiting input.", timestamp: Date.now() }
    ]);
    setAudioQueue([]);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Helper to render message content
  const renderMessageContent = (text: string) => {
    const parsed = parseDialogues(text);
    if (parsed.length === 0) {
      // Fallback for non-tagged text (e.g. error messages or initial greeting)
      return <p>{text}</p>;
    }
    return (
      <div className="space-y-3">
        {parsed.map((p, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-400 uppercase">{p.character}</span>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full bg-white rounded shadow-xl shadow-indigo-100/50 overflow-hidden border border-slate-200 flex flex-col h-[800px] max-h-full">

        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-slate-300'}`}></div>
            <div>
              <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wide">NeuroLoom Simulation</h3>
              <p className="text-xs text-slate-400">Audio-Active Roleplay Environment</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (audioRef.current) {
                  if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                  } else if (audioQueue.length > 0) {
                    audioRef.current.play();
                    setIsPlaying(true);
                  }
                }
              }}
              className="text-slate-400 hover:text-indigo-400 transition-colors p-2 bg-slate-50 rounded hover:bg-indigo-50"
              title={isPlaying ? "Pause Audio" : "Resume Audio"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={handleReset}
              className="text-slate-400 hover:text-indigo-400 transition-colors p-2 bg-slate-50 rounded hover:bg-indigo-50"
              title="Reset Simulation"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-end gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-white
                                    ${msg.role === 'user' ? 'bg-indigo-100' : 'bg-rose-100'}`}>
                  {msg.role === 'user' ? <User size={14} className="text-indigo-500" /> : <Volume2 size={14} className="text-rose-500" />}
                </div>

                <div className={`px-5 py-3.5 rounded text-sm leading-relaxed shadow-sm
                                    ${msg.role === 'user'
                    ? 'bg-indigo-50 text-slate-700 rounded-br-none border border-indigo-100'
                    : 'bg-white text-slate-600 rounded-bl-none border border-slate-200'
                  }`}>
                  {msg.role === 'user' ? msg.text : renderMessageContent(msg.text)}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex items-end gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-100 border border-white flex items-center justify-center shadow-sm">
                  <Mic size={14} className="text-rose-500 animate-pulse" />
                </div>
                <div className="bg-white px-4 py-3 rounded rounded-bl-none border border-slate-200 shadow-sm">
                  <span className="text-xs text-slate-400 font-mono">Generating response & audio...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white p-4 border-t border-slate-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your dialogue..."
              className="w-full bg-slate-50 text-slate-700 rounded py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-200 border border-slate-200 placeholder-slate-400 transition-all font-medium"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-2 top-2 p-2 bg-indigo-400 text-white rounded hover:bg-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold">Groq AI • Deepgram TTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;