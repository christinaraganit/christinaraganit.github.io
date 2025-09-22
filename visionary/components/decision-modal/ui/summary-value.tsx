"use client";

import React from 'react';

const SummaryValue: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p className="font-normal text-xs text-[#1E1F21]">{children}</p>
  )
};

export default SummaryValue;