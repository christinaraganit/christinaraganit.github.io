"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";
import ControlledRadio from "@/components/controlled/controlled-radio";

const CustomStartScreen: React.FC = () => {
  const {control, watch} = useFormContext();

  const customStartScreenLabel = watch('customStartScreen.label');

  return (
    <div className="grow py-[24px] px-[32px] overflow-y-auto">
      <h2>Custom start screen (optional)</h2>
      <ControlledRadio name="customStartScreen.label" control={control} options={[{label: 'Default', value: 'Default'}]} />
      <ControlledRadio name="customStartScreen.label" control={control} options={[{label: 'Onboarding project', value: 'Onboarding project'}]} />
      {customStartScreenLabel === 'Onboarding project' && (
        <>
          <p>Onboarding project</p>
          <ControlledInput name="customStartScreen.value" control={control} />
        </>
      )}
      <ControlledRadio name="customStartScreen.label" control={control} options={[{label: 'Team page', value: 'Team page'}]} />
      {customStartScreenLabel === 'Team page' && (
        <>
          <p>Team ID</p>
          <ControlledInput name="customStartScreen.value" control={control} />
        </>
      )}
      <ControlledRadio name="customStartScreen.label" control={control} options={[{label: 'Another Asana page', value: 'Another Asana page'}]} />
      <ControlledRadio name="customStartScreen.label" control={control} options={[{label: 'Home', value: 'Home'}]} />
    </div>
  )
};
export default CustomStartScreen;