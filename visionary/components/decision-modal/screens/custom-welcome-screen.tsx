"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledRadio from "@/components/controlled/controlled-radio";
import ControlledInput from "@/components/controlled/controlled-input";

const CustomWelcomeScreen: React.FC = () => {
  const {control, watch, setValue} = useFormContext();
  const hasCustomWelcomeScreen = watch('hasCustomWelcomeScreen');

  return (
    <div className="grow py-[24px] px-[32px] overflow-y-auto">
      <h2>Custom Welcome Screen (optional)</h2>
      <ControlledRadio name="hasCustomWelcomeScreen" control={control} options={[
        {
          label: 'No welcome screen',
          value: false,
        },
        {
          label: 'Add custom welcome screen',
          value: true,
        }
      ]}
      onValueChange={() => setValue('customWelcomeScreen', null)}
      />
      {hasCustomWelcomeScreen && (
        <React.Fragment>
          <p>Title</p>
          <ControlledInput name="customWelcomeScreen.title" control={control} />
          <p>Message</p>
          <ControlledInput name="customWelcomeScreen.message" control={control} />
          <p>Logo</p>
          <ControlledInput name="customWelcomeScreen.logo" control={control} />
        </React.Fragment>
      )}
    </div>
  )
};
export default CustomWelcomeScreen;