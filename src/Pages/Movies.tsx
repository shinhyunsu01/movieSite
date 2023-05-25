import React, { useEffect, useState } from "react";

import Header from "../Components/Organisms/Header";
import Main from "../Components/Organisms/Main";
import useGetMovies from "../Hooks/useGetMovies";

const Movies = () => {
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState<string>();

  const [onPaginationFn, moviesInfo] = useGetMovies();

  const onInfinitePageNation = async () => {
    if (await onPaginationFn(pageNum)) setPageNum(pageNum + 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log("search", search);
  }, [search]);

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center m-auto ">
      <Header onChange={onChange} />
      <Main onInfinitePageNation={onInfinitePageNation} movies={moviesInfo} />
    </div>
  );
};

export default Movies;
