import { IMultipleQuestion } from 'src/app/shared/models/models';

/** takes an object of type IMultipleQuestion and returns an object
 *  where each key is one of the items in input object 'options' property
 *  and the value of each key is boolean based on 'answer' property in input object */
export const generateFormControlForMultipleQuestion = (
  question: IMultipleQuestion,
): {
  [key: string]: boolean;
} => {
  const result: { [key: string]: boolean } = {};
  for (const item of question.options) {
    result[item as keyof IMultipleQuestion] = !!question.answer?.includes(item);
  }
  return result;
};
