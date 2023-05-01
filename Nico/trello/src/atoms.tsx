import { atom, selector } from 'recoil';

export const minutesState = atom({
  key: 'minutesState',
  default: 0,
});

export const hourSelector = selector({
  key: 'hours',
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  },
});
