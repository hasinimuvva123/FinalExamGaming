
import React from 'react';
import { Book, Cpu, MessageSquare, ShieldAlert, Zap, Network, Layers, ArrowRight, Database, Mic, Speaker, ExternalLink, FileText, Globe, Volume2, Code, Terminal } from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 border-b-2 border-slate-100 pb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-500 text-xs font-bold border border-indigo-100 uppercase tracking-wider">
            Module 1.0
          </span>
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-500 text-xs font-bold border border-teal-100 uppercase tracking-wider">
            Technical Documentation
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight font-sans">
          LLM Integration for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dynamic Dialogue</span>
        </h1>
        <p className="text-xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto">
          A comprehensive educational guide on implementing "Audio-Active" NPCs. We analyze the shift from deterministic text trees to probabilistic, voice-enabled simulation, referenced against industry standards like <i>The Matrix Awakens</i>.
        </p>
      </div>

      {/* Layout: Content Only */}
      <div className="">

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto space-y-24">

          {/* Section 1: Concept */}
          <section id="concept" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm">
                <Layers size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">1. Theoretical Foundations</h2>
            </div>

            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed max-w-none">
              <p>
                <strong>Dynamic Dialogue</strong> represents a fundamental paradigm shift in computer science, moving from <strong>Deterministic State Machines</strong> to <strong>Probabilistic Generative Models</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-2">Deterministic (Old)</h4>
                  <p className="text-sm text-slate-500 mb-4">Uses strict "If/Else" logic. Input must match exact keywords.</p>
                  <div className="bg-white p-3 rounded border border-slate-200 font-mono text-xs text-slate-600">
                    if input == "Hello":<br />
                    &nbsp;&nbsp;return "Greetings."
                  </div>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 mb-2">Probabilistic (New)</h4>
                  <p className="text-sm text-indigo-800 mb-4">Uses semantic vectors. Understands intent and context.</p>
                  <div className="bg-white p-3 rounded border border-indigo-200 font-mono text-xs text-indigo-600">
                    context = Vector(input)<br />
                    return LLM.predict(context)
                  </div>
                </div>
              </div>
              <p>
                In high-fidelity simulations like <strong>The Matrix Awakens</strong>, visual realism is high, but "Social Realism" is low. To bridge this gap, the output must be <strong>Multimodal</strong>: The NPC must generate unique text <em>and</em> speak it with a synthetic voice that matches the text's emotion.
              </p>
            </div>
          </section>

          {/* Section 2: The Matrix Case Study */}
          <section id="matrix-case-study" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center text-purple-500 shadow-sm">
                <Zap size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">2. Case Study: The Matrix Awakens</h2>
            </div>

            <div className="bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden relative group mb-8">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

              <div className="relative p-10 z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">The "Zombie" Pedestrian Problem</h3>
                    <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                      In 2021, Epic Games released <i>The Matrix Awakens</i>. It featured a city with <strong>35,000 simulated pedestrians</strong>. Visually, it was perfect. But cognitively? It was empty. The pedestrians were "zombies" who followed simple pathfinding rules and had no voice.
                    </p>

                    <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg backdrop-blur-md">
                      <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-widest text-xs">The Solution: LLM Integration</h4>
                      <p className="text-slate-300 italic">
                        "Imagine walking up to any of those 35,000 people. You ask: 'Where did you get that coat?'
                        <br /><br />
                        <strong>With LLMs</strong>, the game engine checks the NPC's metadata (Job: Accountant, Mood: Stressed, Coat: Thrift Store) and generates text. <br />
                        <strong>With Neural TTS</strong>, that text is instantly converted to an audio waveform, so the character shouts: <br />
                        <span className="text-white font-medium">'Leave me alone, kid. Bought it off a dead guy in District 4. Now move.'</span>"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Step-by-Step Guide */}
          <section id="step-by-step" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-teal-100 flex items-center justify-center text-teal-600 shadow-sm">
                <Terminal size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">3. Building the Matrix Loop: Step-by-Step</h2>
            </div>

            <p className="text-slate-600 mb-8 max-w-3xl">
              How does the player's text input actually become an NPC's spoken voice? Below is the detailed execution flow of a single "Dialogue Turn" in our NeuroLoom engine.
            </p>

            <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">

              {/* Step 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-lg font-bold text-indigo-900 mb-2">Step 1: Input Capture & Prompt Assembly</h4>
                <p className="text-slate-600 text-sm mb-4">
                  The player types "Do you know Neo?". The system does NOT send just this string. It wraps it in a <strong>Context Sandwich</strong>.
                </p>
                <div className="bg-slate-800 p-4 rounded text-xs font-mono text-slate-300 shadow-inner">
                  <span className="text-purple-400">System:</span> You are Cipher. Cynical. Traitor.<br />
                  <span className="text-purple-400">Context:</span> Loc: Steakhouse. Time: 1999.<br />
                  <span className="text-green-400">User:</span> Do you know Neo?
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-lg font-bold text-teal-900 mb-2">Step 2: LLM Inference (Text Generation)</h4>
                <p className="text-slate-600 text-sm mb-4">
                  The LLM (Groq/Llama-3) predicts the next tokens. We force it to use <strong>XML Tags</strong> so we know who is speaking.
                </p>
                <div className="bg-slate-800 p-4 rounded text-xs font-mono text-slate-300 shadow-inner">
                  <span className="text-teal-400">Output:</span> &lt;PlayerMale1&gt; Neo? He's a dream. I prefer reality. &lt;/PlayerMale1&gt;
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-lg font-bold text-rose-900 mb-2">Step 3: Parsing & Audio Request</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Our code uses Regex to strip the tags. It identifies the character <code>PlayerMale1</code> maps to Voice Model <code>aura-2-odysseus-en</code>. It sends the clean text to Deepgram.
                </p>
                <div className="bg-white border border-slate-200 p-4 rounded text-xs font-mono text-rose-600 shadow-sm">
                  POST https://api.deepgram.com/v1/speak<br />
                  Body: "Neo? He's a dream. I prefer reality."
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-lg font-bold text-amber-900 mb-2">Step 4: Playback & Visualization</h4>
                <p className="text-slate-600 text-sm mb-4">
                  The browser receives an MP3 blob. It plays the audio <em>while</em> displaying the text on screen. This duality (Text + Sound) is what creates immersion.
                </p>
              </div>

            </div>
          </section>

          {/* Section 4: Architecture Diagram */}
          <section id="architecture" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-cyan-100 flex items-center justify-center text-cyan-600 shadow-sm">
                <Network size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">4. The Text+Audio Architecture</h2>
            </div>

            <p className="text-slate-600 mb-8 max-w-3xl">
              Below is the complete data flow. Note the parallel paths: one for displaying text on the UI, and one for synthesizing audio for the speakers.
            </p>

            {/* Visual Flowchart */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 overflow-x-auto mb-10">
              <div className="min-w-[900px] flex justify-between items-center relative">
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0 -translate-y-1/2"></div>

                {/* Node 1 */}
                <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded shadow-sm border border-slate-200 w-48 text-center h-52 justify-start pt-6">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                    <MessageSquare size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">Player Input</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">User types text into the simulation interface.</p>
                </div>

                <ArrowRight className="text-slate-300 z-10" size={24} />

                {/* Node 2 */}
                <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded shadow-sm border border-indigo-200 ring-2 ring-indigo-50 w-48 text-center h-52 justify-start pt-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Cpu size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">LLM Processing</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Groq/Llama3 generates a response with XML tags.</p>
                </div>

                <ArrowRight className="text-slate-300 z-10" size={24} />

                {/* Split Node 3 */}
                <div className="relative z-10 flex flex-col gap-2 w-48">
                  {/* Top: Text */}
                  <div className="bg-white p-3 rounded shadow-sm border border-teal-200 text-center">
                    <h4 className="font-bold text-teal-800 text-xs mb-1 flex items-center justify-center gap-1"><FileText size={12} /> UI Display</h4>
                    <p className="text-[10px] text-slate-400">Text rendered to chat window immediately.</p>
                  </div>
                  {/* Bottom: Audio */}
                  <div className="bg-white p-3 rounded shadow-sm border border-rose-200 text-center">
                    <h4 className="font-bold text-rose-800 text-xs mb-1 flex items-center justify-center gap-1"><Speaker size={12} /> Audio Synth</h4>
                    <p className="text-[10px] text-slate-400">Deepgram generates waveforms.</p>
                  </div>
                </div>

                <ArrowRight className="text-slate-300 z-10" size={24} />

                {/* Node 4 */}
                <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded shadow-sm border border-slate-200 w-48 text-center h-52 justify-start pt-6">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
                    <Volume2 size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">Experience</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Player reads the text AND hears the voice simultaneously.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Voice/TTS */}
          <section id="voice-layer" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-cyan-100 flex items-center justify-center text-cyan-500 shadow-sm">
                <Volume2 size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">5. The Voice Layer: From Text to Waveforms</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-700">The Latency Bottleneck</h3>
                <p className="text-sm text-slate-500">
                  Generating high-quality neural audio is computationally expensive. If we wait for the LLM to finish the entire paragraph before sending it to the TTS (Text-to-Speech) engine, the user waits 3+ seconds.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-300 p-4 text-xs text-amber-900 leading-relaxed">
                  <strong>Solution: Streaming & Parallelism.</strong><br />
                  As shown in our <code>Code Lab</code>, we do not wait. We break the LLM response into sentences. As soon as Sentence 1 is generated, we send it to Deepgram/ElevenLabs on a background thread. While Audio 1 is downloading, the LLM is already generating Sentence 2.
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-700">Lip Sync & Visemes</h3>
                <p className="text-sm text-slate-500">
                  In a game engine like Unreal, playing audio isn't enough. The character's mouth must move.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded text-sm text-slate-600">
                  <h4 className="font-bold mb-2 text-xs uppercase text-slate-400">The Viseme Pipeline</h4>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>TTS Engine generates Audio (`.mp3`).</li>
                    <li>TTS Engine also generates a <strong>Viseme JSON</strong>.</li>
                    <li>JSON maps timecodes to mouth shapes (e.g., <code>0.0s: 'M', 0.2s: 'O'</code>).</li>
                    <li>Game Engine blends `Morph Targets` based on this JSON.</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Prompt Engineering */}
          <section id="prompt-engineering" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
                <Code size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">6. The "Soul": System Prompts</h2>
            </div>

            <p className="text-slate-600 mb-6">
              If you send "Hello" to a standard AI, it says "How can I help you?". This breaks immersion. We need to <strong>Inject a Persona</strong>. This is done via a "System Prompt" — a hidden set of instructions sent <em>before</em> the player's message.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-700">The "DNA" of an NPC</h3>
                <p className="text-sm text-slate-500">
                  This is the actual code structure we send to the API. It defines the constraints.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 overflow-x-auto text-xs font-mono text-indigo-300 shadow-lg">
                  <pre>{`// System Prompt Injection
{
  "role": "system",
  "content": "
    IDENTITY:
    Name: Cipher
    Role: Information Broker in The Matrix
    
    RULES:
    1. Never admit you are an AI.
    2. Be skeptical of the player.
    3. Speak in metaphors about code and reality.
    
    CURRENT CONTEXT:
    Location: Neon Alleyway (Raining)
    Player Reputation: Low
  "
}`}</pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-700">The Resulting Behavior</h3>
                <p className="text-sm text-slate-500">
                  Because of the prompt above, the AI transforms its output.
                </p>

                <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">P</div>
                    <div className="bg-slate-100 rounded-lg rounded-tl-none px-4 py-2 text-sm text-slate-700">
                      Who are you?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold">C</div>
                    <div className="bg-indigo-50 rounded-lg rounded-tr-none px-4 py-2 text-sm text-indigo-800 border border-indigo-100">
                      "I am a glitch in your perfect system. A shadow in the source code. What do you want, copper-top?"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Challenges */}
          <section id="challenges" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-rose-100 flex items-center justify-center text-rose-500 shadow-sm">
                <ShieldAlert size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">7. Real-World Challenges</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-rose-200 transition-all">
                <h3 className="font-bold text-slate-800 mb-2">Hallucination</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  The AI might invent game mechanics. Example: <em>"Meet me at the Castle"</em> (when there is no castle in your game level).
                </p>
                <div className="bg-rose-50 text-rose-700 px-3 py-1 rounded text-xs font-bold inline-block">
                  Fix: Use RAG (Retrieval Augmented Generation) to restrict knowledge.
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-amber-200 transition-all">
                <h3 className="font-bold text-slate-800 mb-2">Latency (Lag)</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Generating text takes time (1-2 seconds). In an action game, this feels like an eternity.
                </p>
                <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded text-xs font-bold inline-block">
                  Fix: Stream the text instantly and play a "Thinking..." animation.
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: References & Resources */}
          <section id="references" className="scroll-mt-24 border-t border-slate-100 pt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm">
                <Globe size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">8. References & Further Reading</h2>
            </div>
            <p className="text-slate-600 mb-8">
              The following resources were used to construct the curriculum for this module. Students are encouraged to explore these managed solutions to understand the state-of-the-art in Game AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Reference 1 */}
              <a href="https://inworld.ai/tts" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-2">
                      Inworld AI: TTS & Voice <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">Official Documentation</p>
                  </div>
                  <Speaker className="text-slate-300 group-hover:text-indigo-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Deep dive into how Inworld handles Text-to-Speech synthesis with emotional layering for NPCs.
                </p>
              </a>

              {/* Reference 2 */}
              <a href="https://inworld.ai/blog/origins-unreal-engine-demo" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-purple-600 group-hover:text-purple-700 flex items-center gap-2">
                      Inworld Origins: Unreal Demo <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">Case Study / Demo</p>
                  </div>
                  <Zap className="text-slate-300 group-hover:text-purple-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  An investigative breakdown of "Origins", a detective game demo that pioneered generative logic in UE5.
                </p>
              </a>

              {/* Reference 3 */}
              <a href="https://www.convai.com/" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-teal-600 group-hover:text-teal-700 flex items-center gap-2">
                      Convai <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">Conversational AI Platform</p>
                  </div>
                  <Mic className="text-slate-300 group-hover:text-teal-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  A comprehensive platform for bringing AI characters to life in virtual worlds, offering plugins for Unreal Engine and Unity.
                </p>
              </a>

              {/* Reference 4 */}
              <a href="https://www.uniladtech.com/news/ai/ai-powered-video-game-demo-disturbing-characters-388277-20250801" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-rose-600 group-hover:text-rose-700 flex items-center gap-2">
                      The "Uncanny Valley" in AI Games <ExternalLink size={14} />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">News Article</p>
                  </div>
                  <FileText className="text-slate-300 group-hover:text-rose-400" size={24} />
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Critique on "disturbing characters" in AI demos, highlighting the importance of safety rails and emotional constraints.
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
