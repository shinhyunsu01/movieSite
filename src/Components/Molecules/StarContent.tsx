import React from "react";
import { ReactComponent as Star } from "../../Assets/Star.svg";

interface Iprops {
  popular: number;
}

const StarContent: React.FC<Iprops> = ({ popular }) => {
  return (
    <div className="flex font-bold space-x-2 mt-2">
      <Star className="h-6 w-6 stroke-red-400" />
      <div>{popular}</div>
    </div>
  );
};

export default StarContent;
