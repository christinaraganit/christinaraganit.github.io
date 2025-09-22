"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";
import ScreenLabel from "@/components/decision-modal/ui/screen-label";
import Description from "@/components/decision-modal/ui/description";
import FormRow from "@/components/decision-modal/ui/form-row";
import FormScreen from "@/components/decision-modal/ui/form-screen";

const Name: React.FC = () => {
  const {control} = useFormContext();

  return (
    <FormScreen>
      <FormRow>
        <ScreenLabel>Name</ScreenLabel>
        <Description>Give your custom onboarding a name</Description>
      </FormRow>
      <ControlledInput name={'name'} control={control} />
    </FormScreen>
  )
};
export default Name;