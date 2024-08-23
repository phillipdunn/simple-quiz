import { QuestionType } from '../types/questions';

export const quizQuestions: QuestionType[] = [
  {
    question: 'What is the capital city of Australia?',
    options: [
      { answer: 'Sydney', isCorrect: false },
      { answer: 'Melbourne', isCorrect: false },
      { answer: 'Canberra', isCorrect: true },
      { answer: 'Brisbane', isCorrect: false },
    ],
  },
  {
    question: 'What is the chemical symbol for the element gold?',
    options: [
      { answer: 'Au', isCorrect: true },
      { answer: 'Ag', isCorrect: false },
      { answer: 'Pb', isCorrect: false },
      { answer: 'Fe', isCorrect: false },
    ],
  },
  {
    question: 'Who was the first President of the United States?',
    options: [
      { answer: 'Abraham Lincoln', isCorrect: false },
      { answer: 'Thomas Jefferson', isCorrect: false },
      { answer: 'George Washington', isCorrect: true },
      { answer: 'John Adams', isCorrect: false },
    ],
  },
  {
    question: 'Which is the largest desert in the world?',
    options: [
      { answer: 'Gobi Desert', isCorrect: false },
      { answer: 'Arabian Desert', isCorrect: false },
      { answer: 'Sahara Desert', isCorrect: true },
      { answer: 'Kalahari Desert', isCorrect: false },
    ],
  },
  {
    question: "Who wrote the novel '1984'?",
    options: [
      { answer: 'Aldous Huxley', isCorrect: false },
      { answer: 'J.K. Rowling', isCorrect: false },
      { answer: 'George Orwell', isCorrect: true },
      { answer: 'Ernest Hemingway', isCorrect: false },
    ],
  },
  {
    question: 'Which film won the Academy Award for Best Picture in 2020?',
    options: [
      { answer: '1917', isCorrect: false },
      { answer: 'Joker', isCorrect: false },
      { answer: 'Parasite', isCorrect: true },
      { answer: 'Once Upon a Time in Hollywood', isCorrect: false },
    ],
  },
  {
    question: "Which band released the album 'Abbey Road'?",
    options: [
      { answer: 'The Rolling Stones', isCorrect: false },
      { answer: 'The Beatles', isCorrect: true },
      { answer: 'Pink Floyd', isCorrect: false },
      { answer: 'The Who', isCorrect: false },
    ],
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    options: [
      { answer: 'Brazil', isCorrect: false },
      { answer: 'Germany', isCorrect: false },
      { answer: 'France', isCorrect: true },
      { answer: 'Argentina', isCorrect: false },
    ],
  },
  {
    question: "What does the acronym 'HTML' stand for?",
    options: [
      { answer: 'HyperText Markup Language', isCorrect: true },
      { answer: 'HighText Machine Language', isCorrect: false },
      { answer: 'HyperTool Markup Language', isCorrect: false },
      { answer: 'HyperText Making Language', isCorrect: false },
    ],
  },
  {
    question: "Who painted the 'Mona Lisa'?",
    options: [
      { answer: 'Vincent van Gogh', isCorrect: false },
      { answer: 'Pablo Picasso', isCorrect: false },
      { answer: 'Leonardo da Vinci', isCorrect: true },
      { answer: 'Claude Monet', isCorrect: false },
    ],
  },
];
