import React from "react";

interface Iprops {
  [key: string]: any;
}

const Input: React.FC<Iprops> = ({ ...props }) => {
  return <input className="w-40 border rounded-md pl-2 py-1" {...props} />;
};

export default Input;
