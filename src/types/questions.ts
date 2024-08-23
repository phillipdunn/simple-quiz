export interface QuestionType {
  question: string;
  options: Options[];
}

interface Options {
  answer: string;
  isCorrect: boolean;
}

export interface Answers {
  question: string;
  answer: string;
  correct: boolean;
}
