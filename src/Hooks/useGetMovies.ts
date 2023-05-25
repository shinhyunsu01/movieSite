import { useRecoilState } from "recoil";
import { fetcher } from "../Apis/api";
import { moviesInfo, lastPageNum, Imovies } from "../Atoms/atom";

type UseGetMovies = [(data: number) => Promise<boolean>, Imovies[]];

export default function useGetMovies(): UseGetMovies {
  const [movies, setMovies] = useRecoilState(moviesInfo);
  const [lastPageNumber, setLastPageNumber] = useRecoilState(lastPageNum);

  async function onPaginationFn(pageNum: number) {
    try {
      const res = await fetcher(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNum}`);

      if (res.results) {
        const resMovies = res.results.map((data: any, index: number) => {
          return {
            img: data.poster_path,
            title: data.title,
            vote_average: data.vote_average,
            overview: data.overview,
          };
        });
        if (pageNum === 1) setMovies(resMovies);
        else if (pageNum > lastPageNumber && pageNum < res.total_pages) setMovies(movies.concat(resMovies));

        setLastPageNumber(pageNum);
      }
      return true;
    } catch (error) {
      return false;
    }
  }
  return [onPaginationFn, movies];
}
