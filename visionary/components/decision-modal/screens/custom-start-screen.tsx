"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";
import ControlledRadio from "@/components/controlled/controlled-radio";
import FormScreen from "@/components/decision-modal/ui/form-screen";
import FormRow from "@/components/decision-modal/ui/form-row";
import ScreenLabel from "@/components/decision-modal/ui/screen-label";
import Label from "../ui/label";

const CustomStartScreen: React.FC = () => {
  const {control, watch} = useFormContext();

  const customStartScreenLabel = watch('customStartScreen.label');

  return (
    <FormScreen>
      <FormRow>
        <ScreenLabel>Custom start screen (optional)</ScreenLabel>
      </FormRow>
      <div className="flex flex-col gap-[16px]">
        <ControlledRadio name="customStartScreen.label" control={control} options={[{label: 'Default', value: 'Default'}]} />
        <ControlledRadio
          name="customStartScreen.label"
          control={control}
          options={[{label: 'Onboarding project', value: 'Onboarding project'}]}
          description="An onboarding project is required to set this as the start screen. Users with view-only access can't be assigned onboarding projects."
        />
        {customStartScreenLabel === 'Onboarding project' && (
          <div className="flex flex-col gap-[8px] pl-[22px]">
            <Label>Onboarding project</Label>
            <ControlledInput name="customStartScreen.value" control={control} />
          </div>
        )}
        <ControlledRadio
          name="customStartScreen.label"
          control={control}
          options={[{label: 'Team page', value: 'Team page'}]}
          description="Users must be added to this team to set its page as their start screen"
        />
        {customStartScreenLabel === 'Team page' && (
          <div className="flex flex-col gap-[8px] pl-[22px]">
            <Label>Team ID</Label>
            <ControlledInput name="customStartScreen.value" control={control} />
          </div>
        )}
        <ControlledRadio
          name="customStartScreen.label"
          control={control}
          options={[{label: 'Another Asana page', value: 'Another Asana page'}]}
          description="Any non-private team page or project can be used as a start screen"
        />
        <ControlledRadio
          name="customStartScreen.label"
          control={control}
          options={[{label: 'Home', value: 'Home'}]}
          description="View-only users don't have access to home and will start on their inbox instead"
        />
      </div>
    </FormScreen>
  )
};
export default CustomStartScreen;