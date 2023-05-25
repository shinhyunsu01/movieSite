import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchWord } from "../../Atoms/atom";

interface Iprops {
  title: string;
}
const Highlight: React.FC<Iprops> = ({ title }) => {
  const search = useRecoilValue(searchWord);

  if (search !== "" && title.toLowerCase().includes(search.toLowerCase())) {
    const parts = title.split(new RegExp(`(${search})`, "gi"));

    return (
      <div className="flex">
        {parts.map((part: string, index: number) => (part.toLowerCase() === search.toLowerCase() ? <mark key={index}>{part}</mark> : part))}
      </div>
    );
  }

  return <div>{title}</div>;
};
export default Highlight;
