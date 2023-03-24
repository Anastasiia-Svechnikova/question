export interface IQuestion {
  type: 'open' | 'multiple' | 'single';
  answered: boolean;
  answer: Answer;
  text: string;
  options: string[];
  createdAt: number;
  id: string;
}
export interface IEmptyQuestion {
  type: string;
  text: string;
  id: string;
  options: string[];
}
export type FormQuestionData = IQuestion | IEmptyQuestion;

export type Answer = string[] | null;

export enum Mode {
  edit = 'edit',
  new = 'new',
}
export enum QuestionTypes {
  single = 'single',
  multiple = 'multiple',
  open = 'open',
}
