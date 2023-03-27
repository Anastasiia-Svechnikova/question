export const QUESTION_TYPES = ['single', 'multiple', 'open'];
export const QUESTION_WITH_OPTIONS_TYPES = ['single', 'multiple'];
export const EMPTY_QUESTION = {
  type: '',
  text: '',
  id: '',
  options: [],
};
export const MAX_LENGTH_OPEN_QUESTION = 255;
export const INPUT_DEBOUNCE_TIME = 200;
export const HEADER_TITLES = new Map<string, string>([
  ['', 'Questions management'],
  ['new', 'Create question'],
  ['edit', 'Edit question'],
  ['lists', 'Lists of questions'],
]);
