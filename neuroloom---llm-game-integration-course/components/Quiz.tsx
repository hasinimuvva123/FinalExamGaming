import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCw, BookOpen, Bug, Code, HelpCircle, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

type Tab = 'quiz' | 'exercises' | 'debugging';

const Quiz: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('quiz');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 font-serif mb-3">Training & Assessment Center</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Validate your knowledge, solve practical coding challenges, and learn to debug common AI integration errors.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-sm inline-flex">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${activeTab === 'quiz'
                ? 'bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-200'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
          >
            <BookOpen size={18} /> Knowledge Quiz
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${activeTab === 'exercises'
                ? 'bg-teal-50 text-teal-600 shadow-sm ring-1 ring-teal-200'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
          >
            <Code size={18} /> Practice Exercises
          </button>
          <button
            onClick={() => setActiveTab('debugging')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${activeTab === 'debugging'
                ? 'bg-rose-50 text-rose-600 shadow-sm ring-1 ring-rose-200'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
          >
            <Bug size={18} /> Debugging Guide
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden min-h-[500px]">
        {activeTab === 'quiz' && <QuizSection />}
        {activeTab === 'exercises' && <ExercisesSection />}
        {activeTab === 'debugging' && <DebuggingSection />}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------------
   SUB-COMPONENT: QUIZ SECTION
-------------------------------------------------------------------------------- */
const QuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary advantage of using an LLM over a Behavior Tree for dialogue?",
      options: [
        "Lower computational cost",
        "Deterministic and predictable responses",
        "Context-aware, generative variety",
        "Easier to debug"
      ],
      correctIndex: 2,
      explanation: "LLMs excel at generating novel text based on context, whereas behavior trees are limited to pre-scripted paths."
    },
    {
      id: 2,
      question: "What is 'Hallucination' in the context of Game AI?",
      options: [
        "Visual glitches in the rendering pipeline",
        "The model inventing facts or game mechanics that don't exist",
        "The AI refusing to answer",
        "A rendering technique for ghosts"
      ],
      correctIndex: 1,
      explanation: "Hallucination occurs when the LLM confidently states incorrect information (e.g., 'Meet me at the Castle' when no castle exists)."
    },
    {
      id: 3,
      question: "Which technique helps keep the LLM 'in character'?",
      options: [
        "Increasing the Temperature parameter",
        "System Instructions / Persona Injection",
        "Reducing the API key length",
        "Using a smaller model"
      ],
      correctIndex: 1,
      explanation: "A robust System Instruction acts as the 'character sheet', defining rules, tone, and knowledge constraints."
    },
    {
      id: 4,
      question: "Why might we set 'Temperature' to a high value (e.g., 1.2) for a specific NPC?",
      options: [
        "To make them answer faster",
        "To make them sound more robotic and logical",
        "To increase creativity and unpredictability (e.g., a chaotic jester)",
        "To reduce token usage"
      ],
      correctIndex: 2,
      explanation: "High temperature flattens the probability distribution, allowing the model to choose less likely (more creative/random) tokens."
    },
    {
      id: 5,
      question: "What happens if the 'Context Window' limit is exceeded?",
      options: [
        "The model crashes the game engine",
        "The API returns an error or truncates earlier messages (Amnesia)",
        "The model automatically upgrades to a paid tier",
        "The latency decreases"
      ],
      correctIndex: 1,
      explanation: "LLMs have a fixed token limit (e.g., 8k, 32k). Exceeding it means the oldest memories are dropped, causing the NPC to forget earlier context."
    },
    {
      id: 6,
      question: "In the implementation blueprint, why do we use a 'ThreadPoolExecutor' for TTS?",
      options: [
        "To generate text faster",
        "To fetch audio for multiple sentences simultaneously, reducing latency",
        "To run the game loop on a separate thread",
        "To save memory"
      ],
      correctIndex: 1,
      explanation: "TTS synthesis is slow. Fetching 3 sentences in parallel (Async) is 3x faster than fetching them one by one (Serial)."
    }
  ];

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showScore) {
    return (
      <div className="text-center py-20 px-8">
        <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-indigo-400">{score}/{questions.length}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          {score > questions.length / 2 ? "Great Job!" : "Keep Practicing"}
        </h3>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          {score === questions.length
            ? "You have a solid grasp of the theoretical concepts."
            : "Review the Documentation and Code Lab to improve your score."}
        </p>
        <button
          onClick={resetQuiz}
          className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded transition-colors font-medium shadow-lg shadow-indigo-200"
        >
          <RefreshCw className="mr-2" size={20} /> Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center text-xs font-bold tracking-widest text-slate-400 uppercase">
        <span>Question {currentQuestion + 1} / {questions.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="mb-8 min-h-[100px]">
        <h3 className="text-xl font-semibold text-slate-800 leading-relaxed">
          {questions[currentQuestion].question}
        </h3>
      </div>

      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, idx) => {
          let buttonClass = "w-full text-left p-4 rounded border-2 transition-all font-medium flex items-center justify-between group ";

          if (isAnswered) {
            if (idx === questions[currentQuestion].correctIndex) {
              buttonClass += "bg-teal-50 border-teal-400 text-teal-800";
            } else if (idx === selectedOption) {
              buttonClass += "bg-rose-50 border-rose-400 text-rose-800";
            } else {
              buttonClass += "bg-slate-50 border-transparent text-slate-400 opacity-50";
            }
          } else {
            buttonClass += "bg-white border-slate-100 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50";
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              disabled={isAnswered}
              className={buttonClass}
            >
              <span>{option}</span>
              {isAnswered && idx === questions[currentQuestion].correctIndex && <CheckCircle size={20} className="text-teal-500" />}
              {isAnswered && idx === selectedOption && idx !== questions[currentQuestion].correctIndex && <XCircle size={20} className="text-rose-500" />}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-6 flex gap-3">
            <HelpCircle className="text-indigo-400 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-indigo-800 font-bold text-xs uppercase tracking-wider mb-1">Explanation</p>
              <p className="text-slate-700 text-sm leading-relaxed">{questions[currentQuestion].explanation}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-slate-800 text-white hover:bg-slate-700 font-bold rounded transition-colors shadow-lg flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* --------------------------------------------------------------------------------
   SUB-COMPONENT: EXERCISES SECTION
-------------------------------------------------------------------------------- */
const ExercisesSection: React.FC = () => {
  const exercises = [
    {
      id: 1,
      title: "The Case of the Amnesiac NPC",
      difficulty: "Easy",
      problem: "Your NPC, 'The Guardian', greets you warmly. But after you ask 'What is your name?', and then 'Where are we?', he forgets he already told you his name. He treats every message like a fresh start.",
      hint: "Look at the API request loop. Are we sending the previous messages back to the model?",
      solution: `
# BROKEN CODE:
response = model.generate(user_input)

# FIXED CODE:
history.append({"role": "user", "content": user_input})
response = model.generate(history)  # <--- MUST PASS HISTORY
history.append({"role": "model", "content": response})
      `,
      explanation: "LLMs are stateless. They don't remember you. You must re-send the entire conversation history with every single new request (up to the context limit)."
    },
    {
      id: 2,
      title: "The Identity Crisis (Breaking Character)",
      difficulty: "Medium",
      problem: "You are building a medieval fantasy blacksmith. When the user asks 'What is a computer?', the Blacksmith replies: 'A computer is a machine that processes data...' This breaks immersion.",
      hint: "The model is too helpful. We need to restrict its knowledge base via the System Prompt.",
      solution: `
# SYSTEM PROMPT FIX:

"You are a medieval blacksmith in the year 1200 AD."
"You DO NOT know what modern technology is."
"If asked about modern topics, act confused or interpret them through a medieval lens."
"(e.g., 'Computer? Is that a type of dark magic?')"
      `,
      explanation: "Models are trained on the internet. You must explicitly 'Negative Prompt' them to pretend they don't know things outside their lore."
    },
    {
      id: 3,
      title: "The Infinite User Loop",
      difficulty: "Hard",
      problem: "Your script runs. The AI replies. Then immediately, the AI replies again. And again. It starts having a conversation with itself, generating both the User and AI lines.",
      hint: "Check your 'Stop Sequences' and how you parse the output.",
      solution: `
# CONFIGURATION FIX:

generation_config = {
  "stop_sequences": ["User:", "\\nUser"],  # <--- TELL AI TO STOP
  "max_output_tokens": 150
}

# OR PROMPT FIX:
"Do not generate the user's response. Stop immediately after your dialogue."
      `,
      explanation: "LLMs are completion engines. If the pattern is 'User: Hi. AI: Hello.', the LLM will naturally predict 'User: How are you?' next. You must cut it off."
    }
  ];

  return (
    <div className="p-8 space-y-8 bg-slate-50/50">
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-2">Hands-on Debugging Scenarios</h3>
        <p className="text-slate-500 text-sm">
          In these exercises, analyze the "symptom" and try to predict the fix before revealing the solution.
        </p>
      </div>

      {exercises.map((ex) => (
        <ExerciseCard key={ex.id} exercise={ex} />
      ))}
    </div>
  );
};

const ExerciseCard: React.FC<{ exercise: any }> = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide
               ${exercise.difficulty === 'Easy' ? 'bg-teal-100 text-teal-700' :
                exercise.difficulty === 'Medium' ? 'bg-indigo-100 text-indigo-700' : 'bg-rose-100 text-rose-700'}`}>
              {exercise.difficulty}
            </div>
            <h4 className="font-bold text-slate-800 text-lg">{exercise.title}</h4>
          </div>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed border-l-4 border-slate-200 pl-4">
          <span className="font-bold text-slate-400 text-xs uppercase block mb-1">Symptom</span>
          {exercise.problem}
        </p>

        {!isOpen ? (
          <div className="flex gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100 transition-colors text-sm font-bold"
            >
              <Code size={16} /> Reveal Solution
            </button>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded text-sm italic border border-slate-100">
              <HelpCircle size={16} /> Hint: {exercise.hint}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-top-4">
            <div className="bg-slate-900 rounded-md p-4 mb-4 overflow-x-auto">
              <pre className="text-xs font-mono text-teal-300">
                {exercise.solution.trim()}
              </pre>
            </div>
            <div className="bg-indigo-50 p-4 rounded text-sm text-indigo-900 mb-4">
              <strong>Analysis:</strong> {exercise.explanation}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 text-sm flex items-center gap-1"
            >
              <ChevronUp size={14} /> Hide Solution
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------------
   SUB-COMPONENT: DEBUGGING SECTION
-------------------------------------------------------------------------------- */
const DebuggingSection: React.FC = () => {
  const errors = [
    {
      code: "401 Unauthorized",
      cause: "Invalid API Key or expired token.",
      fix: "Check your `.env` file. Ensure `GOOGLE_API_KEY` or `DEEPGRAM_API_KEY` is set correctly. Don't commit keys to GitHub!"
    },
    {
      code: "429 Too Many Requests",
      cause: "You hit the Rate Limit (e.g., 60 requests/minute).",
      fix: "Implement 'Exponential Backoff'. Wait 1s, then 2s, then 4s before retrying. Or upgrade to a paid tier."
    },
    {
      code: "JSONDecodeError",
      cause: "The LLM returned text that isn't valid JSON, usually because it added markdown like ```json ... ```.",
      fix: "Use a regex to strip markdown code blocks before parsing. Or use `response_format={'type': 'json_object'}` in the API call."
    },
    {
      code: "context_length_exceeded",
      cause: "Conversation history is too long for the model (e.g., > 8192 tokens).",
      fix: "Implement a 'Sliding Window': Remove the oldest 2 messages when adding new ones. Or summarize the old history."
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Common API Errors & Fixes</h3>
        <p className="text-slate-500">Bookmark this page for when your console turns red.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {errors.map((err, idx) => (
          <div key={idx} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-lg hover:border-rose-200 transition-all group">
            <div className="w-12 h-12 rounded bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
              <AlertTriangle className="text-rose-500" size={24} />
            </div>
            <div>
              <h4 className="font-mono font-bold text-rose-600 text-lg mb-1">{err.code}</h4>
              <p className="text-slate-700 font-medium mb-1">{err.cause}</p>
              <p className="text-slate-500 text-sm italic">Fix: {err.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
