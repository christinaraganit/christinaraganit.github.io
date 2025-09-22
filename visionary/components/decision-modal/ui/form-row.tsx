"use client";

import React from 'react';

const FormRow: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-[8px]">{children}</div>
  )
};

export default FormRow;