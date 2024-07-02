export interface Question {
  id: number;
  text: string;
  answers: string[];
  correctAnswerIndex: number;
}

export interface LeaderboardEntry {
  name: string;
  score: number;
}
