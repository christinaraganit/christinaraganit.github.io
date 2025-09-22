"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledRadio from "@/components/controlled/controlled-radio";
import ControlledInput from "@/components/controlled/controlled-input";
import FormScreen from "@/components/decision-modal/ui/form-screen";
import FormRow from "@/components/decision-modal/ui/form-row";
import ScreenLabel from "@/components/decision-modal/ui/screen-label";
import Label from "@/components/decision-modal/ui/label";

const CustomWelcomeScreen: React.FC = () => {
  const {control, watch, setValue} = useFormContext();
  const hasCustomWelcomeScreen = watch('hasCustomWelcomeScreen');

  return (
    <FormScreen>
      <FormRow>
        <ScreenLabel>Custom welcome screen (optional)</ScreenLabel>
      </FormRow>
      <FormRow>
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
      </FormRow>
      {hasCustomWelcomeScreen && (
        <React.Fragment>
          <FormRow>
            <Label>Title</Label>
            <ControlledInput name="customWelcomeScreen.title" control={control} />
          </FormRow>
          <FormRow>
            <Label>Message</Label>
            <ControlledInput name="customWelcomeScreen.message" control={control} />
          </FormRow>
          <FormRow>
            <Label>Logo</Label>
            <ControlledInput name="customWelcomeScreen.logo" control={control} />
          </FormRow>
        </React.Fragment>
      )}
    </FormScreen>
  )
};
export default CustomWelcomeScreen;