import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterMovies, searchWord } from "../Atoms/atom";

import Header from "../Components/Organisms/Header";
import Main from "../Components/Organisms/Main";
import useGetMovies from "../Hooks/useGetMovies";

const Movies = () => {
  const [pageNum, setPageNum] = useState(1);

  const [search, setSearch] = useRecoilState(searchWord);
  const filterMoviesInfo = useRecoilValue(filterMovies);

  const [onPaginationFn, moviesInfo] = useGetMovies();

  const onInfinitePageNation = async () => {
    if (await onPaginationFn(pageNum)) setPageNum(pageNum + 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className=" w-full h-full flex flex-col items-center justify-center m-auto  overflow-hidden fixed ">
        <Header onChange={onChange} />

        <Main onInfinitePageNation={onInfinitePageNation} movies={search !== "" ? filterMoviesInfo : moviesInfo} />
      </div>
    </>
  );
};

export default Movies;
