import React from "react";

interface Ipros {
  children: React.ReactNode;
}

const MainContentLayout: React.FC<Ipros> = ({ children }) => {
  return <div className="w-full h-full flex justify-center  flex-wrap  mt-12 overflow-scroll">{children}</div>;
};

export default MainContentLayout;
