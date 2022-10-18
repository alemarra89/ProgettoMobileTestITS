export interface Risposta {
  id: string;
  isCorrect: boolean;
  label: string;
  votesCount: number;
  votesPercentage: number;
}

export interface Domanda {
  id: string;
  title: string;
  options: Risposta[];
}
