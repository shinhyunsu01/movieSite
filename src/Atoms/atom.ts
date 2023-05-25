import { atom, selector } from "recoil";

export interface Imovies {
  img: string;
  title: string;
  vote_average: number;
  overview: string;
}

export const moviesInfo = atom<Imovies[]>({
  key: "moviesInfo",
  default: [],
});

export const LastPageNum = atom({
  key: "LastPageNum",
  default: 1,
});

export const filterMovies = selector({
  key: "FilterMovies",
  get: ({ get }) => {
    const movies = get(moviesInfo);

    movies.filter((item) => item);
  },
});
