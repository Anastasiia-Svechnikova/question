export interface ISingleQuestion {
  type: 'single';
  answered: boolean;
  answer: Answer;
  options: string[];
  text: string;
  createdAt: number;
  id: string;
}
export interface IMultipleQuestion {
  type: 'multiple';
  answered: boolean;
  answer: Answer;
  options: string[];
  text: string;
  createdAt: number;
  id: string;
}
export interface IOpenQuestion {
  type: 'open';
  answered: boolean;
  answer: Answer;
  text: string;
  createdAt: number;
  id: string;
}
export type Question = ISingleQuestion | IMultipleQuestion | IOpenQuestion;
export interface IEmptyQuestion {
  type: string;
  text: string;
  id: string;
}
export type FormQuestionData = Question | IEmptyQuestion;

export type SingleQuestionAnswer = string | null;
export type MultipleQuestionAnswer = string[] | null;
export type OpenQuestionAnswer = string | null;

export type Answer =
  | SingleQuestionAnswer
  | MultipleQuestionAnswer
  | OpenQuestionAnswer;

export enum Mode {
  edit = 'edit',
  new = 'new',
}
