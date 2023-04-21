import { atom, selector } from 'recoil';

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const todoState = atom<ITodo[]>({
  key: 'todo',
  default: [],
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState) as ITodo['category'];

    if (category === Categories.TO_DO)
      return todos.filter((todo) => todo.category === Categories.TO_DO);
    if (category === Categories.DOING)
      return todos.filter((todo) => todo.category === Categories.DOING);
    if (category === Categories.DONE)
      return todos.filter((todo) => todo.category === Categories.DONE);
  },
});
