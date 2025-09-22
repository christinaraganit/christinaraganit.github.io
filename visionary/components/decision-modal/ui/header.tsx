"use client";

import React from 'react';

const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h4 className="font-medium text-xl text-[#1E1F21]">{children}</h4>
  )
};

export default Header;