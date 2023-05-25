import React from "react";

interface Iprops {
  children: React.ReactNode;
}

const HeaderLayout: React.FC<Iprops> = ({ children }) => {
  return <div className="fixed z-10 top-0 w-full flex justify-center h-14 items-center bg-white">{children}</div>;
};

export default HeaderLayout;
