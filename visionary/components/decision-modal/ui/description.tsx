"use client";

import React from 'react';

const Description: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p className="font-normal text-sm text-[#6D6E6F]">{children}</p>
  )
};

export default Description;