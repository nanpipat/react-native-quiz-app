import { Question } from "../types";

const generateRandomQuestions = (): Question[] => {
  const questions: Question[] = [];
  for (let i = 0; i < 20; i++) {
    questions.push({
      id: i + 1,
      text: `Question ${i + 1}: This is example question number ${i + 1}?`,
      answers: [
        `Ans ${i + 1}A`,
        `Ans ${i + 1}B`,
        `Ans ${i + 1}C`,
        `Ans ${i + 1}D`,
      ],
      correctAnswerIndex: Math.floor(Math.random() * 4),
    });
  }
  return questions.sort(() => Math.random() - 0.5);
};

export default generateRandomQuestions;
