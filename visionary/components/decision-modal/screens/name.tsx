"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";
import ScreenLabel from "@/components/decision-modal/ui/screen-label";
import Description from "@/components/decision-modal/ui/description";

const Name: React.FC = () => {
  const {control} = useFormContext();

  return (
    <div className="grow py-[24px] px-[32px]">
      <ScreenLabel>Name</ScreenLabel>
      <Description>Give your custom onboarding a name</Description>
      <ControlledInput name={'name'} control={control} />
    </div>
  )
};
export default Name;