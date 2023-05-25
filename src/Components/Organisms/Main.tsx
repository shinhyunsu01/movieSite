import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import { Imovies, searchWord } from "../../Atoms/atom";

import MainContentLayout from "../Molecules/MainContentLayout";
import StarContent from "../Molecules/StarContent";

interface Iprops {
  movies: Imovies[];
  onInfinitePageNation: () => Promise<void>;
}

const Main: React.FC<Iprops> = ({ movies, onInfinitePageNation }) => {
  const { ref, inView } = useInView();
  const search = useRecoilValue(searchWord);

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

  return (
    <MainContentLayout>
      {movies.map((data, index) => (
        <div key={index} className="h-80 w-80  m-4 hover:cursor-pointer flex flex-col font-bold">
          <img className="w-full h-60 object-fill hover:scale-105 transition-all " src={`https://image.tmdb.org/t/p/original/${data.img}`} alt={data.title} />
          <div>{data.title}</div>
          <StarContent popular={data.vote_average} />
        </div>
      ))}
      {search === "" && <div ref={ref}></div>}
    </MainContentLayout>
  );
};

export default Main;
