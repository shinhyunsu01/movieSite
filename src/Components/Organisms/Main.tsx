import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import { Imovies, searchWord } from "../../Atoms/atom";
import { cls } from "../../Utils/util";
import Highlight from "../Atoms/Highlight";

import MainContentLayout from "../Molecules/MainContentLayout";
import ModalDetailMovie from "../Molecules/ModalDetailMovie";
import StarContent from "../Molecules/StarContent";

interface Iprops {
  movies: Imovies[];
  onInfinitePageNation: () => Promise<void>;
}

const Main: React.FC<Iprops> = ({ movies, onInfinitePageNation }) => {
  const { ref, inView } = useInView();
  const search = useRecoilValue(searchWord);
  const [isModal, setIsModal] = useState(false);

  const [movie, setMovie] = useState<Imovies>();

  useEffect(() => {
    onInfinitePageNation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) {
      onInfinitePageNation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const onClick = (movie: Imovies) => {
    setIsModal(true);
    setMovie(movie);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  return (
    <MainContentLayout>
      {isModal && movie && <ModalDetailMovie closeModal={onCloseModal} movie={movie} />}
      {movies.map((data, index) => (
        <button key={index} className="h-80 w-80  m-4 hover:cursor-pointer flex flex-col font-bold" onClick={() => onClick(data)}>
          <img
            className={cls(`w-full h-60 object-fill  transition-all`, isModal ? "" : `hover:scale-105 `)}
            src={`https://image.tmdb.org/t/p/original/${data.img}`}
            alt={data.title}
          />
          <Highlight title={data.title} />

          <StarContent popular={data.vote_average} />
        </button>
      ))}
      {search === "" && <div ref={ref}></div>}
    </MainContentLayout>
  );
};

export default Main;
