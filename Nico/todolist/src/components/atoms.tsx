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

export const categoryState = atom({
  key: 'category',
  default: 'TO_DO',
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState) as ITodo['category'];

    if (category === 'TO_DO') return todos.filter((todo) => todo.category === 'TO_DO');
    if (category === 'DOING') return todos.filter((todo) => todo.category === 'DOING');
    if (category === 'DONE') return todos.filter((todo) => todo.category === 'DONE');
  },
});
