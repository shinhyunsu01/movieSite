import React from "react";

interface Iprops {
  children: React.ReactNode;
}

const Modal: React.FC<Iprops> = ({ children }) => {
  return (
    <div className=" fixed z-100 w-full h-full bg-opacity-70 bg-white top-0  left-0 ">
      <div className="flex items-center justify-center w-full h-full absolute ">{children}</div>
    </div>
  );
};

export default Modal;
