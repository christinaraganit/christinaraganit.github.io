"use client";

import React from 'react';

const ScreenLabel: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h5 className="font-medium text-base">{children}</h5>
  )
};

export default ScreenLabel;