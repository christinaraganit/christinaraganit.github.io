"use client";

import React from 'react';

const Label: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p className="font-medium text-xs text-[#6D6E6F]">{children}</p>
  )
};

export default Label;