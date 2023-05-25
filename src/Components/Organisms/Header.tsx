import React from "react";

import Input from "../Atoms/Input";
import HeaderLayout from "../Molecules/HeaderLayout";

interface Iprops {
  [key: string]: any;
}

const Header: React.FC<Iprops> = ({ ...props }) => {
  return (
    <HeaderLayout>
      <Input placeholder="Movie Search" {...props} />
    </HeaderLayout>
  );
};

export default Header;
