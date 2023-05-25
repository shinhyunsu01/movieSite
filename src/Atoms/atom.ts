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

export const lastPageNum = atom<number>({
  key: "LastPageNum",
  default: 1,
});

export const searchWord = atom<string>({
  key: "SearchWord",
  default: "",
});

export const filterMovies = selector({
  key: "FilterMovies",
  get: ({ get }) => {
    const movies = get(moviesInfo);
    const search = get(searchWord).toUpperCase();

    const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;

    return movies.filter((item) => item.title.replace(reg, "").toUpperCase().includes(search));
  },
});
