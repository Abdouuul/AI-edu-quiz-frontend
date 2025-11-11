export interface Question {
  id: number;
  enonce: string;
  explication?: string | null;
  question_type: "SC" | "MC" | "TF" | "OE";
  choices: string[];
  open_question_answer?: string | null;
  quiz: number;
}

export interface Quiz {
  id: number;
  title: string;
  lesson: number;
  created_at: string;
  updated_at: string;
  questions: Question[];
}