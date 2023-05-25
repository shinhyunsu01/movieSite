import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterMovies, searchWord } from "../Atoms/atom";
import Modal from "../Components/Atoms/Modal";

import Header from "../Components/Organisms/Header";
import Main from "../Components/Organisms/Main";
import useGetMovies from "../Hooks/useGetMovies";

const Movies = () => {
  const [pageNum, setPageNum] = useState(1);

  const [search, setSearch] = useRecoilState(searchWord);
  const filterMoviesInfo = useRecoilValue(filterMovies);
  const [error, setError] = useState<boolean>(false);

  const [onPaginationFn, moviesInfo] = useGetMovies();

  const onInfinitePageNation = async () => {
    const res = await onPaginationFn(pageNum);
    if (res) {
      setPageNum(pageNum + 1);
    }
    setError(!res);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className=" w-full h-full flex flex-col items-center justify-center m-auto  overflow-hidden fixed ">
        <Header onChange={onChange} />
        {error && (
          <Modal>
            <div>API 에러</div>
          </Modal>
        )}
        <Main onInfinitePageNation={onInfinitePageNation} movies={search !== "" ? filterMoviesInfo : moviesInfo} />
      </div>
    </>
  );
};

export default Movies;
