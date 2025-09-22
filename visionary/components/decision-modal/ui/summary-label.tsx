"use client";

import React from 'react';

const SummaryLabel: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p className="font-medium text-xs text-[#1E1F21]">{children}</p>
  )
};

export default SummaryLabel;