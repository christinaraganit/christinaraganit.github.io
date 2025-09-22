"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";
import ControlledDropdown from "@/components/controlled/controlled-dropdown";
import ControlledCheckboxes from "@/components/controlled/controlled-checkboxes";
import ScreenLabel from "@/components/decision-modal/ui/screen-label";
import Description from "@/components/decision-modal/ui/description";
import FormRow from "@/components/decision-modal/ui/form-row";
import Label from "@/components/decision-modal/ui/label";
import HelperText from "@/components/decision-modal/ui/helper-text";
import FormScreen from "@/components/decision-modal/ui/form-screen";

const OnboardingGroup: React.FC = () => {
  const {control} = useFormContext();

  return (
    <FormScreen>
      <FormRow>
        <ScreenLabel>Onboarding group (optional)</ScreenLabel>
        <Description>If a user is eligible for multiple custom onboarding flows, they'll see the one that best matches them based on these specifications</Description>
      </FormRow>
      <FormRow>
        <Label>Associated email domain</Label>
        <ControlledInput name="onboardingGroup.email" control={control} />
        <HelperText>Guest users won't be targeted if you add an email domain</HelperText>
      </FormRow>
      <FormRow>
        <Label>License type</Label>
        <ControlledCheckboxes
          name="onboardingGroup.licenseType"
          control={control}
          options={[
            {
              label: 'Paid license',
              value: 'Paid license'
            },
            {
              label: 'View only',
              value: 'View only'
            },
            {
              label: 'Guest',
              value: 'Guest'
            }
          ]}
        />
      </FormRow>
      <FormRow>
        <Label>Browser Language</Label>
        <ControlledDropdown name="onboardingGroup.browserLanguage" control={control} options={[
          {
            label: 'English',
          },
          {
            label: 'Spanish',
          },
        ]}
        />
      </FormRow>
    </FormScreen>
  )
};
export default OnboardingGroup;