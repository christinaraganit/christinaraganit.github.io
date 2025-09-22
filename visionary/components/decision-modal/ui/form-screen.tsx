"use client";

import React from 'react';

const FormScreen: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="grow py-[24px] px-[32px] flex flex-col gap-[24px] overflow-y-auto">
      {children}
    </div>
  )
};

export default FormScreen;