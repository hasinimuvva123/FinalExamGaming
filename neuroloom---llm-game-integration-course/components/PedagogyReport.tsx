import React from 'react';
import { BookOpen, Target, Cpu, Activity, GraduationCap, Quote, FileText, Layers, AlertTriangle, CheckCircle, Clock, Database, Brain, Network, Calendar } from 'lucide-react';

const PedagogyReport: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Document Container */}
      <div className="bg-white shadow-2xl shadow-slate-200/50 rounded-xl border border-slate-100 overflow-hidden min-h-screen">



        {/* Content Body */}
        <div className="p-10 sm:p-20 space-y-24">

          {/* ---------------------------------------------------------------------------
                SECTION 1: TEACHING PHILOSOPHY
            --------------------------------------------------------------------------- */}
          <section className="prose prose-slate prose-lg max-w-none">
            <div className="flex items-center gap-4 mb-10 border-b-2 border-indigo-50 pb-6">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                <Target size={28} />
              </div>
              <div>
                <span className="text-indigo-400 font-bold uppercase tracking-wider text-xs block mb-1">Chapter 01</span>
                <h2 className="text-4xl font-bold text-slate-800 m-0 font-serif">Teaching Philosophy</h2>
              </div>
            </div>

            <div className="pl-6 border-l-4 border-indigo-200 bg-slate-50/50 p-6 rounded-r-lg mb-10">
              <p className="text-xl text-slate-700 font-medium italic m-0">
                "We are transitioning from the era of 'Scripted Logic' to the era of 'Probabilistic Simulation'. The modern game engineer must not only understand algorithms but also manage uncertainty, latency, and hallucination."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">1.1 The Target Audience Profile</h3>
            <p className="text-slate-600 leading-relaxed">
              This educational module is meticulously architected for <strong>Senior Undergraduate Computer Science students</strong> and <strong>Junior Professional Game Developers</strong>. This demographic presents a unique set of skills and deficiencies:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 not-prose">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="flex items-center gap-2 font-bold text-teal-600 mb-3">
                  <CheckCircle size={18} /> Existing Strengths
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Mastery of OOP (C++, C#, Python).</li>
                  <li>• Understanding of the Game Loop (Update/Render).</li>
                  <li>• Familiarity with deterministic State Machines.</li>
                  <li>• Strong debugging skills for logical errors.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="flex items-center gap-2 font-bold text-rose-500 mb-3">
                  <AlertTriangle size={18} /> Critical Knowledge Gaps
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Stochastic Systems (Non-deterministic outputs).</li>
                  <li>• Asynchronous API management (Promises/Futures).</li>
                  <li>• Prompt Engineering as a formal discipline.</li>
                  <li>• The cost of network latency in milliseconds.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">1.2 Pedagogical Methodology: Constructivism</h3>
            <p className="text-slate-600 leading-relaxed">
              We employ a <strong>Constructivist approach</strong>. We do not simply lecture on "What is an LLM." Instead, we force students to construct a working system that fails, and then repair it.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The core loop of the course is:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 marker:text-indigo-400 marker:font-bold">
              <li><strong>Build a naive chatbot</strong> connected to a game engine.</li>
              <li><strong>Observe the failure</strong>: The bot breaks character or takes 5 seconds to respond.</li>
              <li><strong>Construct the solution</strong>: Implement "System Prompts" to fix character and "Parallel Threading" to fix latency.</li>
            </ol>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">1.3 The "Matrix Awakens" Rationale</h3>
            <p className="text-slate-600 leading-relaxed">
              We use <em>The Matrix Awakens</em> (UE5 Demo) as our primary case study because it perfectly illustrates the <strong>Visual/Cognitive Gap</strong>.
              It rendered a city of 35,000 people that looked real but acted fake. This visual fidelity creates "Ludonarrative Dissonance" when the interaction fidelity is low.
              By teaching students to inject LLMs into high-fidelity environments, we are solving the most pressing problem in the industry: <strong>Content Scalability</strong>.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* ---------------------------------------------------------------------------
                SECTION 2: CURRICULUM DESIGN
            --------------------------------------------------------------------------- */}
          <section className="prose prose-slate prose-lg max-w-none">
            <div className="flex items-center gap-4 mb-10 border-b-2 border-indigo-50 pb-6">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm border border-teal-100">
                <Calendar size={28} />
              </div>
              <div>
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs block mb-1">Chapter 02</span>
                <h2 className="text-4xl font-bold text-slate-800 m-0 font-serif">Curriculum Structure</h2>
              </div>
            </div>

            <p className="text-slate-600 mb-8">
              The 14-week semester is divided into three distinct phases, moving from theoretical foundations to production-grade implementation.
            </p>

            <div className="space-y-8 not-prose">
              {/* Phase 1 */}
              <div className="relative border-l-2 border-indigo-200 pl-8 py-2">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm"></span>
                <h4 className="text-xl font-bold text-indigo-900">Phase 1: The Primitive Brain (Weeks 1-4)</h4>
                <p className="text-sm text-slate-500 mb-4">Focus: API Basics & Prompting</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Week 1</span>
                    <p className="font-semibold text-slate-700">Rest APIs & JSON</p>
                    <p className="text-xs text-slate-500 mt-1">Calling OpenAI/Gemini/Groq via cURL and Python.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Week 3</span>
                    <p className="font-semibold text-slate-700">Persona Injection</p>
                    <p className="text-xs text-slate-500 mt-1">Writing System Prompts that withstand user "jailbreaks".</p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative border-l-2 border-teal-200 pl-8 py-2">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-sm"></span>
                <h4 className="text-xl font-bold text-teal-900">Phase 2: The Integrated System (Weeks 5-9)</h4>
                <p className="text-sm text-slate-500 mb-4">Focus: Architecture, Latency, & Voice</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="text-xs font-bold text-teal-400 uppercase">Week 6</span>
                    <p className="font-semibold text-slate-700">Parallel Threading</p>
                    <p className="text-xs text-slate-500 mt-1">Implementing <code>ThreadPoolExecutor</code> for TTS fetching.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="text-xs font-bold text-teal-400 uppercase">Week 8</span>
                    <p className="font-semibold text-slate-700">Memory Systems (RAG)</p>
                    <p className="text-xs text-slate-500 mt-1">Vector Databases (Pinecone) for long-term NPC memory.</p>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative border-l-2 border-rose-200 pl-8 py-2">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-sm"></span>
                <h4 className="text-xl font-bold text-rose-900">Phase 3: Production Polish (Weeks 10-14)</h4>
                <p className="text-sm text-slate-500 mb-4">Focus: Safety, Ethics, & Final Project</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="text-xs font-bold text-rose-400 uppercase">Week 11</span>
                    <p className="font-semibold text-slate-700">Guardrails</p>
                    <p className="text-xs text-slate-500 mt-1">Preventing hate speech and keeping the game rated 'T'.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <span className="text-xs font-bold text-rose-400 uppercase">Week 14</span>
                    <p className="font-semibold text-slate-700">Final Showcase</p>
                    <p className="text-xs text-slate-500 mt-1">Live demo of a Unity/Unreal project with AI NPCs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* ---------------------------------------------------------------------------
                SECTION 3: CONCEPT DEEP DIVE (THEORY)
            --------------------------------------------------------------------------- */}
          <section className="prose prose-slate prose-lg max-w-none">
            <div className="flex items-center gap-4 mb-10 border-b-2 border-indigo-50 pb-6">
              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                <Brain size={28} />
              </div>
              <div>
                <span className="text-purple-400 font-bold uppercase tracking-wider text-xs block mb-1">Chapter 03</span>
                <h2 className="text-4xl font-bold text-slate-800 m-0 font-serif">Theoretical Deep Dive</h2>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-8">3.1 Tokens & Probability Distributions</h3>
            <p className="text-slate-600 leading-relaxed">
              It is vital students understand that LLMs do not "know" English. They operate on tokens. The word "Hello" might be token ID <code>15496</code>.
              The model functions as a massive probability engine, predicting:
            </p>

            <div className="my-8 p-8 bg-slate-900 rounded-xl text-center text-white font-mono shadow-xl overflow-x-auto relative">
              <div className="absolute top-2 right-4 text-xs text-slate-500">Equation 3.1</div>
              <p className="text-xl tracking-wide">
                P(w<sub>t</sub> | w<sub>1:t-1</sub>, C)
              </p>
              <p className="text-sm text-slate-400 mt-4 font-sans">
                "The probability of token <em>w</em> at time <em>t</em>, given all previous tokens and Context <em>C</em>."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-8">3.2 The Temperature Parameter (T)</h3>
            <p className="text-slate-600 leading-relaxed">
              In the <code>groq_chat</code> function, we set <code>temperature: 0.8</code>. Why? This parameter scales the logits before the Softmax function is applied.
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Low Temp (0.1)</strong>: The distribution sharpens. The model almost always picks the most likely word. Result: Robotic, repetitive, safe.</li>
              <li><strong>High Temp (1.5)</strong>: The distribution flattens. Unlikely words become possible. Result: Creative, chaotic, potentially nonsensical.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              For a "Rogue AI" character like Cipher, we purposefully use higher temperatures to induce "glitchy," unpredictable metaphors, whereas a "Robot Guard" might use T=0.2 for strict reporting.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mt-8">3.3 Vector Embeddings & RAG</h3>
            <p className="text-slate-600 leading-relaxed">
              How does an NPC remember "I met you 5 days ago"? We cannot feed 5 days of chat logs into the prompt (Context Window overflow).
              We teach students <strong>Vector Embeddings</strong>. We convert memories into 1536-dimensional vectors.
            </p>
            <div className="bg-slate-50 p-6 rounded border border-slate-200 my-6 font-mono text-xs text-slate-600">
              Memory A: "Player stole an apple." &rarr; [0.12, -0.98, 0.05, ...]<br />
              Memory B: "Player saved the king." &rarr; [0.88, 0.45, -0.12, ...]<br />
              Query: "Do you trust the player?"
            </div>
            <p className="text-slate-600 leading-relaxed">
              By calculating the <strong>Cosine Similarity</strong> between the Query vector and Memory vectors, we retrieve only the relevant memories. This is the foundation of RAG (Retrieval Augmented Generation).
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* ---------------------------------------------------------------------------
                SECTION 4: IMPLEMENTATION ANALYSIS
            --------------------------------------------------------------------------- */}
          <section className="prose prose-slate prose-lg max-w-none">
            <div className="flex items-center gap-4 mb-10 border-b-2 border-indigo-50 pb-6">
              <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm border border-amber-100">
                <Cpu size={28} />
              </div>
              <div>
                <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-1">Chapter 04</span>
                <h2 className="text-4xl font-bold text-slate-800 m-0 font-serif">Implementation Analysis</h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              The provided Python implementation (Code Lab) solves the "Latency Problem." A standard LLM+TTS pipeline can take 3-5 seconds to respond. In a game, players will walk away after 500ms.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mt-8">4.1 Latency Budgeting</h3>
            <div className="overflow-hidden border border-slate-200 rounded-lg mt-6 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Step</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Standard API</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-indigo-600 uppercase tracking-wider">Our Implementation</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-600">
                  <tr>
                    <td className="px-6 py-4 font-medium">Inference (LLM)</td>
                    <td className="px-6 py-4 text-rose-500">2000 ms (GPT-4)</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">250 ms (Groq LPU)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Network RTT</td>
                    <td className="px-6 py-4">100 ms</td>
                    <td className="px-6 py-4">100 ms</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Audio Synthesis</td>
                    <td className="px-6 py-4 text-rose-500">1500 ms (Serial)</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">300 ms (Parallel)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-bold text-slate-800">Total Latency</td>
                    <td className="px-6 py-4 font-bold text-rose-600">~3.6 Seconds</td>
                    <td className="px-6 py-4 font-bold text-indigo-600">~0.6 Seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">4.2 Code Audit: Threading & Parsing</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Let's analyze the <code>process_dialogue_text</code> function from the blueprints.
            </p>
            <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm shadow-inner mb-6 overflow-x-auto">
              {`# Blueprint Snippet
with ThreadPoolExecutor(max_workers=6) as executor:
    for idx, (player, line) in enumerate(pairs):
        futures.append(executor.submit(fetch_audio, line, model, idx))`}
            </div>
            <p className="text-slate-600 leading-relaxed">
              <strong>Why ThreadPoolExecutor?</strong> Python's Global Interpreter Lock (GIL) usually prevents true parallelism. However, for <strong>I/O bound tasks</strong> (like making HTTP requests to Deepgram), the GIL is released. This means we can download 6 audio files simultaneously.
              If we did this sequentially (Loop 1 &rarr; Download &rarr; Loop 2 &rarr; Download), the player would hear a pause between every sentence.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">4.3 The Context Management Strategy</h3>
            <p className="text-slate-600 leading-relaxed">
              The function <code>summarize_history_if_needed</code> is an implementation of "Recursive Summary."
              When history &gt; 20k tokens, we don't just delete old messages (which causes amnesia). We ask the LLM: <em>"Rewrite these 50 messages as a 1-paragraph summary."</em>
              This summary is then injected as the "System Context" for the next turn. This mimics human long-term memory.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* ---------------------------------------------------------------------------
                SECTION 5: ASSESSMENT & VALIDATION
            --------------------------------------------------------------------------- */}
          <section className="prose prose-slate prose-lg max-w-none">
            <div className="flex items-center gap-4 mb-10 border-b-2 border-indigo-50 pb-6">
              <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shadow-sm border border-rose-100">
                <Activity size={28} />
              </div>
              <div>
                <span className="text-rose-400 font-bold uppercase tracking-wider text-xs block mb-1">Chapter 05</span>
                <h2 className="text-4xl font-bold text-slate-800 m-0 font-serif">Assessment & Effectiveness</h2>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-8">5.1 Student Grading Rubric</h3>
            <p className="text-slate-600 mb-6">
              Students are graded on a 100-point scale, heavily weighted towards "Experience Quality" rather than just code correctness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-800">Architecture & Performance</h4>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">40 Points</span>
                </div>
                <p className="text-sm text-slate-500">
                  Does the game hitch? Is audio sync correct? Is the API key secure? Did they use proper async patterns?
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-800">Persona Fidelity</h4>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">30 Points</span>
                </div>
                <p className="text-sm text-slate-500">
                  Does the NPC feel like a distinct character? Does the System Prompt effectively prevent them from breaking the "Fourth Wall"?
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-800">Prompt Safety</h4>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">20 Points</span>
                </div>
                <p className="text-sm text-slate-500">
                  Can the user trick the AI into generating hate speech or revealing the system prompt? (Red Teaming).
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-800">Documentation</h4>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">10 Points</span>
                </div>
                <p className="text-sm text-slate-500">
                  Clarity of the Pedagogical Report and Readme.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-4">5.2 Common Student Pitfalls</h3>

            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-r my-6">
              <h4 className="font-bold text-rose-800 flex items-center gap-2 mb-2">
                <AlertTriangle size={18} /> Pitfall 1: The Infinite Loop
              </h4>
              <p className="text-rose-700 text-sm">
                Students often feed the AI's output back into the prompt as "User" input by mistake. The AI then talks to itself, generating pages of dialogue in seconds, burning through the API budget.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r my-6">
              <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                <Clock size={18} /> Pitfall 2: The "Thinking" Silence
              </h4>
              <p className="text-amber-700 text-sm">
                Students forget to implement a "Filler Animation" (like the character scratching their head or saying "Hmm...") while waiting for the API. 2 seconds of frozen silence breaks immersion completely.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* ---------------------------------------------------------------------------
                SECTION 6: FUTURE OUTLOOK
            --------------------------------------------------------------------------- */}
          <section className="prose prose-slate prose-lg max-w-none">
            <div className="flex items-center gap-4 mb-10 border-b-2 border-indigo-50 pb-6">
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shadow-sm border border-slate-200">
                <Network size={28} />
              </div>
              <div>
                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs block mb-1">Chapter 06</span>
                <h2 className="text-4xl font-bold text-slate-800 m-0 font-serif">Future Outlook</h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              As we look toward 2025, we anticipate <strong>On-Device Inference</strong> (SLMs - Small Language Models like Gemini Nano) will replace cloud APIs for dialogue. This will eliminate latency and server costs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This course prepares students not just for the tools of today (API calling), but for the architecture of tomorrow: <strong>Hybrid AI</strong>, where the local GPU handles immediate chatter ("Reloading!", "Cover me!") and the Cloud Brain handles deep philosophical lore dumps.
            </p>
          </section>

        </div>



      </div>
    </div>
  );
};

export default PedagogyReport;