import React, { useEffect, useRef } from "react";
import { Imovies } from "../../Atoms/atom";
import Modal from "../Atoms/Modal";

interface Iprops {
  closeModal: () => void;
  movie: Imovies;
}

const ModalDetailMovie: React.FC<Iprops> = ({ closeModal, movie }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalRef]);

  return (
    <Modal>
      <div className=" w-80 h-80  opacity-100 z-10 flex  p-4 flex-col overflow-scroll items-center bg-white rounded-md border" ref={modalRef}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.img}`} alt={movie.title} className="w-full  h-40 px-4  rounded-md" />
        <div>{movie.overview}</div>
      </div>
    </Modal>
  );
};

export default ModalDetailMovie;
