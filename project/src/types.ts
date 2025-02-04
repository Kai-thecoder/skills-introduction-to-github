export interface StudyTip {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface FarmingTip {
  id: number;
  title: string;
  description: string;
  category: 'crops' | 'livestock' | 'general';
}

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export interface Quiz {
  id: number;
  subject: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionsCount: number;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface StudyNote {
  id: number;
  subject: string;
  title: string;
  content: string;
  lastModified: Date;
}