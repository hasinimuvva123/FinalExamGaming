export enum View {
  HOME = 'HOME',
  TUTORIAL_VIDEO = 'TUTORIAL_VIDEO',
  DOCUMENTATION = 'DOCUMENTATION',
  CODE_LAB = 'CODE_LAB',
  LIVE_DEMO = 'LIVE_DEMO',
  ASSESSMENT = 'ASSESSMENT',
  PEDAGOGY = 'PEDAGOGY'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
  description: string;
}
