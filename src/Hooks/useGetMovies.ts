import { useRecoilState } from "recoil";
import { fetcher } from "../Apis/api";
import { moviesInfo, LastPageNum, Imovies } from "../Atoms/atom";

type UseGetMovies = [(data: number) => Promise<boolean>, Imovies[]];

export default function useGetMovies(): UseGetMovies {
  const [movies, setMovies] = useRecoilState(moviesInfo);
  const [lastPageNum, setLastPageNum] = useRecoilState(LastPageNum);

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
        else if (pageNum > lastPageNum && pageNum < res.total_pages) setMovies(movies.concat(resMovies));

        setLastPageNum(pageNum);
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  return [onPaginationFn, movies];
}
