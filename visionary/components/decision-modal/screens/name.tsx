"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";

const Name: React.FC = () => {
  const {control} = useFormContext();

  return (
    <div className="grow py-[24px] px-[32px]">
      <h2>Name</h2>
      <p>Give your custom onboarding a name</p>
      <ControlledInput name={'name'} control={control} />
    </div>
  )
};
export default Name;