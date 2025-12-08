
import React from 'react';
import { Book, Cpu, MessageSquare, ShieldAlert, Zap, Network, Layers, ArrowRight, Database, Mic, Speaker, ExternalLink, FileText, Globe, Volume2, Code, Terminal, Activity, Server, Box, Brain } from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 border-b-2 border-slate-100 pb-8 text-center">

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight font-serif">
          The Architecture of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Sentient NPCs</span>
        </h1>
        <p className="text-xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto">
          A technical deep-dive into the <strong>LLM Integration for Dynamic Dialogue</strong> used in high-fidelity simulations like <em>The Matrix Awakens</em>.
          We explore how Generative AI, Neural TTS, and Unreal Engine 5 converge to create characters that truly "think" and "speak."
        </p>
      </div>

      {/* Layout: Content Only */}
      <div className="">

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto space-y-24">

          {/* Section 1: The Matrix Awakens Integration */}
          <section id="matrix-integration" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-200">
                <Zap size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">1. The Matrix Awakens: A Living City</h2>
                <p className="text-sm text-slate-400 font-mono mt-1">CASE STUDY: UNREAL ENGINE 5 + GENERATIVE AI</p>
              </div>
            </div>

            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed max-w-none">
              <p>
                <em>The Matrix Awakens</em> isn't just a graphical showcase; it is the proving ground for the <strong>Metahuman Framework</strong> coupled with <strong>Large Language Models (LLMs)</strong>.
                In the vanilla demo, thousands of NPCs wander the city. With LLM Integration, each of these NPCs is transformed from a static mesh into a stateful agent.
              </p>

              <div className="my-10 bg-slate-900 rounded-2xl p-8 text-slate-300 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">The "IO" Meta-Protocol</h3>
                    <p className="text-sm leading-relaxed mb-6 text-slate-400">
                      In the Matrix lore, programs have purpose. In our implementation, every pedestrian has a <strong>System Prompt</strong> generated procedurally based on their location.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">1</div>
                        <span><strong>Visuals:</strong> UE5 Metahuman (High Fidelity)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">2</div>
                        <span><strong>Brain:</strong> Llama-3 via Groq (Cognition)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">3</div>
                        <span><strong>Voice:</strong> Neural TTS + Viseme Sync (Speech)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 font-mono text-xs">
                    <div className="text-rose-400 mb-2">// DYNAMIC INJECTION</div>
                    <div className="text-slate-400">
                      Entity_ID: <span className="text-indigo-400">NPC_9942</span><br />
                      Location: <span className="text-amber-400">Downtown_Sector_4</span><br />
                      Event: <span className="text-teal-400">Player_High_Speed_Crash</span><br />
                      <br />
                      <span className="text-purple-400">&gt;&gt; GENERATING REACTION...</span><br />
                      "Watch it! You trying to delete me?"
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Theoretical Foundation: Ludonarrative Harmony</h3>
              <p>
                Traditional games suffer from <strong>Ludonarrative Dissonance</strong>—the gameplay allows infinite freedom (shoot anywhere, drive anywhere), but the narrative is rigid (NPCs only have 3 lines of dialogue).
                LLM integration solves this by creating <strong>Infinite Narrative Surface Area</strong>. The NPC doesn't just react to pre-scripted events; they react to <em>emergent gameplay</em>.
                If you crash your car in <em>The Matrix Awakens</em>, the LLM-driven NPC doesn't just play a "Scream" animation; they reference the specific car model, the speed, and their own procedurally generated backstory.
              </p>
            </div>
          </section>

          {/* Section 2: Full Architecture Diagram */}
          <section id="architecture" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                <Network size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">2. The "Cognitive Engine" Architecture</h2>
                <p className="text-sm text-slate-400 font-mono mt-1">DATA FLOW: UNREAL ENGINE &rarr; CLOUD &rarr; UNREAL ENGINE</p>
              </div>
            </div>

            <p className="text-slate-600 mb-10 max-w-3xl">
              This diagram illustrates the complete round-trip required to make a Metahuman speak in real-time. Note the <strong>Parallel Execution</strong> of Audio Synthesis and Lip-Sync data generation.
            </p>

            {/* Complex Flowchart */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 overflow-x-auto shadow-inner">
              <div className="min-w-[1000px] grid grid-cols-5 gap-4 relative">

                {/* Connector Lines (Background) */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0 -translate-y-1/2"></div>

                {/* Step 1: UE5 */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="bg-slate-900 text-white p-4 rounded-lg shadow-lg border border-slate-700 h-40 flex flex-col justify-center items-center text-center">
                    <Box size={32} className="text-white mb-2" />
                    <h4 className="font-bold">Unreal Engine 5</h4>
                    <p className="text-[10px] text-slate-400 mt-1">Player Event Triggered</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase">Input</div>
                    <div className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-1 rounded mt-1">"Hello there" + Metadata</div>
                  </div>
                </div>

                {/* Step 2: Gateway */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-200 h-40 flex flex-col justify-center items-center text-center">
                    <Server size={32} className="text-indigo-500 mb-2" />
                    <h4 className="font-bold text-slate-800">Python Bridge</h4>
                    <p className="text-[10px] text-slate-500 mt-1">REST API Gateway</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase">Processing</div>
                    <div className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-1 rounded mt-1">Construct Prompt</div>
                  </div>
                </div>

                {/* Step 3: LLM */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg h-40 flex flex-col justify-center items-center text-center">
                    <Brain size={32} className="text-white mb-2 animate-pulse" />
                    <h4 className="font-bold">LLM Inference</h4>
                    <p className="text-[10px] text-purple-100 mt-1">Llama-3 / GPT-4</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase">Output</div>
                    <div className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-1 rounded mt-1">Text Token Stream</div>
                  </div>
                </div>

                {/* Step 4: TTS & Visemes (Split) */}
                <div className="relative z-10 flex flex-col gap-2 h-full justify-center -mt-6">
                  <div className="bg-teal-50 border border-teal-200 p-3 rounded-lg text-center shadow-sm">
                    <Speaker size={20} className="text-teal-600 mx-auto mb-1" />
                    <h5 className="font-bold text-teal-800 text-xs">Neural Audio</h5>
                    <p className="text-[9px] text-teal-600">Waveform (.wav)</p>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-center shadow-sm">
                    <Activity size={20} className="text-rose-600 mx-auto mb-1" />
                    <h5 className="font-bold text-rose-800 text-xs">Viseme Data</h5>
                    <p className="text-[9px] text-rose-600">Lip-Sync JSON</p>
                  </div>
                </div>

                {/* Step 5: Animation */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="bg-slate-900 text-white p-4 rounded-lg shadow-lg border border-slate-700 h-40 flex flex-col justify-center items-center text-center">
                    <Volume2 size={32} className="text-emerald-400 mb-2" />
                    <h4 className="font-bold">Metahuman</h4>
                    <p className="text-[10px] text-slate-400 mt-1">Audio + Facial Animation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase">Result</div>
                    <div className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-1 rounded mt-1">Alive NPC</div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section 3: Step-by-Step Guide */}
          <section id="guide" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shadow-sm">
                <Terminal size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">3. Implementation Guide: From Zero to Speech</h2>
                <p className="text-sm text-slate-400 font-mono mt-1">INTEGRATING WITH UNREAL ENGINE BLUEPRINTS</p>
              </div>
            </div>

            <div className="space-y-12 border-l-2 border-slate-200 ml-4 pl-8 relative">

              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm ring-4 ring-white">1</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Capture Input (Speech-to-Text)</h3>
                <p className="text-slate-600 mb-4">
                  In <em>The Matrix Awakens</em>, the player can speak via microphone. We use an STT (Speech-to-Text) service like OpenAI Whisper running locally or in the cloud.
                </p>
                <div className="bg-slate-800 p-4 rounded-lg font-mono text-xs text-slate-300">
                  <span className="text-purple-400">Blueprint Node:</span> Capture Audio Input &rarr; Send to Whisper API &rarr; Return String
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm ring-4 ring-white">2</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Context Construction (RAG)</h3>
                <p className="text-slate-600 mb-4">
                  The NPC needs to know where they are. We perform a "Raycast" in Unreal Engine to find nearby objects (e.g., "Red Sports Car", "Coffee Shop"). We inject this into the prompt.
                </p>
                <div className="bg-slate-800 p-4 rounded-lg font-mono text-xs text-slate-300">
                  <pre>{`System Prompt:
"You are a pedestrian in The Matrix.
Context: Standing near [Main Street].
Visible Objects: [Red Car, Traffic Light].
Current Weather: [Rain]."`}</pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm ring-4 ring-white">3</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">LLM Inference & Parsing</h3>
                <p className="text-slate-600 mb-4">
                  The LLM returns text. We assume the identity of the NPC. Critical: We must detect emotions for the TTS engine.
                </p>
                <div className="bg-white border border-slate-200 p-4 rounded-lg font-mono text-xs text-slate-600">
                  Output: <span className="text-rose-500">[Emotion: Fear]</span> "Who are you? Get away from me!"
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm ring-4 ring-white">4</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Neural TTS & Viseme Generation</h3>
                <p className="text-slate-600 mb-4">
                  This is the most critical step for <em>The Matrix</em> visual quality. We send the text to a specialized TTS provider (like ElevenLabs or Deepgram).
                  We request not just audio, but <strong>Visemes</strong> (mouth shapes).
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-3 rounded border border-indigo-100">
                    <span className="text-xs font-bold text-indigo-500 uppercase block mb-1">Audio Stream</span>
                    <div className="h-8 bg-indigo-200 rounded animate-pulse"></div>
                  </div>
                  <div className="bg-rose-50 p-3 rounded border border-rose-100">
                    <span className="text-xs font-bold text-rose-500 uppercase block mb-1">Viseme Stream</span>
                    <code className="text-[10px] text-rose-800">{`{ "0.1s": "A", "0.2s": "O" }`}</code>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm ring-4 ring-white">5</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Unreal Metahuman Animator</h3>
                <p className="text-slate-600 mb-4">
                  The audio plays on the <code>AudioComponent</code>. The Viseme JSON drives the <code>MorphTargets</code> on the Metahuman face mesh. The result is perfect lip-sync.
                </p>
              </div>

            </div>
          </section>

          {/* Section 4: References */}
          <section id="references" className="scroll-mt-24 border-t border-slate-100 pt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm">
                <Globe size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">4. Industry References</h2>
            </div>
            <p className="text-slate-600 mb-8">
              The technology described above is actively used by the following platforms to power Matrix-level simulations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Reference 1 */}
              <a href="https://inworld.ai/tts" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-2">
                      Inworld AI <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">The Engine behind the Mod</p>
                  </div>
                  <Speaker className="text-slate-300 group-hover:text-indigo-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Inworld provided the tech demo that actually integrated LLMs into the Matrix Awakens city, allowing users to talk to the agents.
                </p>
              </a>

              {/* Reference 2 */}
              <a href="https://www.convai.com/" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-teal-600 group-hover:text-teal-700 flex items-center gap-2">
                      Convai <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">Real-time Unity/Unreal Plugin</p>
                  </div>
                  <Mic className="text-slate-300 group-hover:text-teal-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  A leading platform that offers the exact "Speech-to-Text &rarr; LLM &rarr; TTS &rarr; Viseme" pipeline described in Section 2.
                </p>
              </a>

              {/* Reference 3 */}
              <a href="https://inworld.ai/blog/origins-unreal-engine-demo" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-purple-600 group-hover:text-purple-700 flex items-center gap-2">
                      Inworld Origins <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">Detective Case Study</p>
                  </div>
                  <Zap className="text-slate-300 group-hover:text-purple-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  A breakdown of how "Origins" uses generative logic to create a detective mystery where NPCs can lie based on LLM prompts.
                </p>
              </a>

              {/* Reference 4 */}
              <a href="https://www.uniladtech.com/news/ai/ai-powered-video-game-demo-disturbing-characters-388277-20250801" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-rose-600 group-hover:text-rose-700 flex items-center gap-2">
                      The "Uncanny" Factor <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">News Analysis</p>
                  </div>
                  <FileText className="text-slate-300 group-hover:text-rose-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Discussing the psychological impact of talking to hyper-realistic Metahumans powered by AI.
                </p>
              </a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Documentation;
