import React from 'react';
import { Book, Cpu, MessageSquare, ShieldAlert, Zap, Network, Layers, ArrowRight, Database, Mic, Speaker, ExternalLink, FileText, Globe } from 'lucide-react';

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
            Technical Deep Dive
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight font-sans">
          LLM Integration for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dynamic Dialogue</span>
        </h1>
        <p className="text-xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto">
          A comprehensive educational guide on replacing static behavior trees with generative AI to create "living" worlds. We analyze the shift from deterministic logic to probabilistic simulation, referenced against industry standards like <i>The Matrix Awakens</i> and <i>Inworld AI</i>.
        </p>
      </div>

      {/* Layout: Content Only (Sidebar Removed) */}
      <div className="">

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto space-y-24">

          {/* Section 1: Concept */}
          <section id="concept" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm">
                <Layers size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">1. The Core Concept</h2>
            </div>

            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed max-w-none">
              <p>
                <strong>Dynamic Dialogue</strong> represents a fundamental paradigm shift in computer science, moving from <strong>Deterministic State Machines</strong> to <strong>Probabilistic Generative Models</strong>.
              </p>
              <p>
                In traditional game development (Deterministic), every interaction is a pre-defined path. If a player performs an action $A$, the system executes response $B$. This is "Safe" but "Brittle." It relies on exact <strong>Keyword Matching</strong>.
              </p>
              <p>
                With <strong>LLM Integration</strong> (Probabilistic), we introduce <strong>Semantic Understanding</strong>. The system does not match keywords; it understands intent.
              </p>
              <div className="my-6 p-6 bg-slate-50 border-l-4 border-indigo-400 rounded-r-lg">
                <h4 className="font-bold text-indigo-900 mb-2 text-sm uppercase">The "Emergent Gameplay" Theory</h4>
                <p className="text-sm text-slate-700 m-0">
                  When NPCs have agency, gameplay becomes emergent. A player might insult a guard, causing the guard to become sad rather than angry (based on random probability), leading to a completely unique story branch that the developer never wrote. This is the holy grail of simulation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Motivation */}
          <section id="motivation" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-rose-100 flex items-center justify-center text-rose-500 shadow-sm">
                <Book size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">2. Motivation: The "Stateless" Problem</h2>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-8 bg-slate-50/50">
                  <div className="text-rose-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    Traditional Approach (Tree)
                  </div>
                  <p className="text-slate-600 text-sm mb-6">
                    Used in Skyrim, Mass Effect, Witcher 3.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-slate-200 rounded text-center text-sm text-slate-500 shadow-sm">
                      "Hello Traveler"
                    </div>
                    <div className="flex justify-center text-slate-300">↓</div>
                    <div className="flex gap-2 justify-center">
                      <div className="p-2 bg-white border border-slate-200 rounded text-xs text-slate-400 w-1/2 text-center">Option A</div>
                      <div className="p-2 bg-white border border-slate-200 rounded text-xs text-slate-400 w-1/2 text-center">Option B</div>
                    </div>
                    <div className="mt-4 text-xs text-rose-500 font-medium text-center">
                      Problem: Finite. If the player asks "C", the system fails.
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-indigo-50/10">
                  <div className="text-indigo-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    Generative Approach (LLM)
                  </div>
                  <p className="text-slate-600 text-sm mb-6">
                    Used in Matrix Awakens (conceptually), Inworld AI.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-indigo-200 rounded text-center text-sm text-indigo-600 shadow-sm">
                      "What brings you to [Current_Location]?"
                    </div>
                    <div className="flex justify-center text-indigo-300">↓</div>
                    <div className="p-3 bg-indigo-100/50 border border-indigo-200 rounded text-sm text-slate-600 text-center italic">
                      [Player says anything via Microphone]
                    </div>
                    <div className="flex justify-center text-indigo-300">↓</div>
                    <div className="p-3 bg-white border border-indigo-200 rounded text-center text-sm text-indigo-600 shadow-sm animate-pulse">
                      (AI Generates unique response based on context)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The Matrix Case Study */}
          <section id="matrix-case-study" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center text-purple-500 shadow-sm">
                <Zap size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">3. Case Study: The Matrix Awakens</h2>
            </div>

            <div className="bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

              <div className="relative p-10 z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">Simulating the Simulation</h3>
                    <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                      In 2021, Epic Games released <i>The Matrix Awakens</i>. It featured a city with <strong>35,000 simulated pedestrians</strong>. Visually, it was perfect. But cognitively? It was empty. The pedestrians were zombies who followed simple pathfinding rules.
                    </p>

                    <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg backdrop-blur-md">
                      <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-widest text-xs">The Vision</h4>
                      <p className="text-slate-300 italic">
                        "Imagine walking up to any of those 35,000 people. You ask: 'Where did you get that coat?'
                        <br /><br />
                        Without LLMs, nothing happens. <br />
                        <strong>With LLMs</strong>, the game engine checks the NPC's metadata (Job: Accountant, Mood: Stressed, Coat: Thrift Store) and generates: <br />
                        <span className="text-white font-medium">'Leave me alone, kid. Bought it off a dead guy in District 4. Now move.'</span>"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Architecture */}
          <section id="architecture" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-teal-100 flex items-center justify-center text-teal-500 shadow-sm">
                <Network size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">4. Advanced Technical Architecture</h2>
            </div>

            <p className="text-slate-600 mb-8 max-w-3xl">
              It is critical to understand that the LLM is only one component of a larger <strong>Orchestration Layer</strong>. The complete pipeline involves converting Audio to Vectors, performing Retrieval (RAG), Generating Text, and synthesizing Audio/Animation.
            </p>

            {/* Visual Flowchart */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 overflow-x-auto mb-10">
              <div className="min-w-[900px] flex justify-between items-center relative">
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0 -translate-y-1/2"></div>

                {/* Step 1: Input */}
                <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded shadow-sm border border-slate-200 w-44 text-center h-48 justify-start pt-6">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                    <Mic size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">1. Input & STT</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Player speaks. <strong>Whisper</strong> or Deepgram converts audio to text.</p>
                </div>

                <ArrowRight className="text-slate-300 z-10" size={24} />

                {/* Step 2: Context/RAG */}
                <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded shadow-sm border border-slate-200 w-44 text-center h-48 justify-start pt-6">
                  <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3">
                    <Database size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">2. Context Assembly</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Engine pulls Game State + Vector Memories (Pinecone) relevant to the query.</p>
                </div>

                <ArrowRight className="text-slate-300 z-10" size={24} />

                {/* Step 3: Inference */}
                <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded shadow-sm border border-indigo-200 ring-2 ring-indigo-50 w-44 text-center h-48 justify-start pt-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Cpu size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">3. LLM Inference</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Gemini/GPT receives: <code>System Prompt + History + Context + Input</code>. Generates text.</p>
                </div>

                <ArrowRight className="text-slate-300 z-10" size={24} />

                {/* Step 4: Synthesis */}
                <div className="relative z-10 flex flex-col items-center bg-white p-4 rounded shadow-sm border border-slate-200 w-44 text-center h-48 justify-start pt-6">
                  <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-3">
                    <Speaker size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">4. TTS & Visemes</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Text converted to Audio (ElevenLabs/Replica). Phonemes extracted for Lip Sync.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-4">Middleware Solutions</h3>
            <p className="text-slate-600 mb-4">
              While our Code Lab builds this from scratch, in production, studios often use middleware layers like <strong>Inworld AI</strong> or <strong>Convai</strong>. These services handle the "Orchestration" (Latency management, Memory, Safety) so developers can focus on gameplay.
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li><strong>Orchestrator:</strong> Manages the "Brain" of the NPC.</li>
              <li><strong>Safety Layer:</strong> Filters out toxic responses before they reach the player.</li>
              <li><strong>Knowledge Graph:</strong> Keeps track of facts (e.g., "The King is dead") so the NPC doesn't hallucinate.</li>
            </ul>
          </section>

          {/* Section 5: Prompt Engineering */}
          <section id="prompt-engineering" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">5. The "Soul": System Prompts</h2>
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
    4. Keep responses under 2 sentences.
    
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
                  <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-center text-slate-400">
                    Notice how it used the "Metaphor" rule and "Skeptical" tone automatically.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Challenges */}
          <section id="challenges" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded bg-rose-100 flex items-center justify-center text-rose-500 shadow-sm">
                <ShieldAlert size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">6. Real-World Challenges</h2>
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

          {/* Section 7: References & Resources */}
          <section id="references" className="scroll-mt-24 border-t border-slate-100 pt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm">
                <Globe size={20} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">7. References & Further Reading</h2>
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

              {/* Reference 3: UPDATED */}
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