"use client";

import React from 'react';

const HelperText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p className="font-normal text-xs text-[#6D6E6F]">{children}</p>
  )
};

export default HelperText;