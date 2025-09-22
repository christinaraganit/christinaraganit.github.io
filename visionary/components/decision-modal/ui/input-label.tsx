"use client";

import React from 'react';

const InputLabel: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p className="font-normal text-sm text-[#1E1F21]">{children}</p>
  )
};

export default InputLabel;