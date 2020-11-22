export interface GameStatistic {
  score: number;
  userName: string;
  questionStatus:QuestionStatus
}

export interface QuestionStatus{
  question:string;
  isCorrect:boolean;
}


