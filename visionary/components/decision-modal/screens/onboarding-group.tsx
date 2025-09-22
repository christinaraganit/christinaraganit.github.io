"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";
import ControlledDropdown from "@/components/controlled/controlled-dropdown";
import ControlledCheckboxes from "@/components/controlled/controlled-checkboxes";

const OnboardingGroup: React.FC = () => {
  const {control} = useFormContext();

  return (
    <div className="grow py-[24px] px-[32px] overflow-y-auto">
      <h2>Onboarding group (optional)</h2>
      <p>If a user is eligible for multiple custom onboarding flows, they'll see the one that best matches them based on these specifications</p>
      <p>Associated email domain</p>
      <ControlledInput name="onboardingGroup.email" control={control} />
      <p>Guest users won't be targeted if you add an email domain.</p>
      <p>License type</p>
      <ControlledCheckboxes name="onboardingGroup.licenseType" control={control}
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
      <p>Browser Language</p>
      <ControlledDropdown name="onboardingGroup.browserLanguage" control={control} options={[
          {
            label: 'English',
          },
          {
            label: 'Spanish',
          },
        ]}
      />
    </div>
  )
};
export default OnboardingGroup;