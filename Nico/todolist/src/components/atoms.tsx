import { atom, selector } from 'recoil';

export interface ITodo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

export const todoState = atom<ITodo[]>({
  key: 'todo',
  default: [],
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const todos = get(todoState);
    return todos;
  },
});
