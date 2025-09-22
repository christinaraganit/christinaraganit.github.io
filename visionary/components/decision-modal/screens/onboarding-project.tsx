"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledRadio from "@/components/controlled/controlled-radio";
import ControlledInput from "@/components/controlled/controlled-input";
import FormRow from "@/components/decision-modal/ui/form-row";
import ScreenLabel from "@/components/decision-modal/ui/screen-label";
import Description from "@/components/decision-modal/ui/description";
import Label from "@/components/decision-modal/ui/label";
import FormScreen from "@/components/decision-modal/ui/form-screen";

const OnboardingProject: React.FC = () => {
  const {control, watch, setValue} = useFormContext();
  const hasOnboardingProject = watch('hasOnboardingProject');
  const [projectTemplate, setProjectTemplate] = React.useState<'existing' | 'new'>('existing');

  return (
    <FormScreen>
      <FormRow>
        <ScreenLabel>Onboarding project (optional)</ScreenLabel>
        <Description>You need guest access to view or edit assigned onboarding projects. Users with view-only access can't be assigned onboarding projects</Description>
      </FormRow>
      <FormRow>
        <ControlledRadio
          name="hasOnboardingProject"
          control={control}
          options={[
            {
              label: 'No onboarding project',
              value: false,
            },
            {
              label: 'Add onboarding project',
              value: true,
            }
          ]}
          onValueChange={() => setValue('onboardingProject', null)}
        />
      </FormRow>
      {hasOnboardingProject && (
        <React.Fragment>
          <FormRow>
            <Label>Team ID</Label>
            <ControlledInput name="onboardingProject.teamId" control={control} />
          </FormRow>
          <FormRow>
            <Label>Select project template</Label>
            <label className="block">
              <input
                type="radio"
                name="projectTemplate"
                value="existing"
                onChange={() => {
                  setProjectTemplate('existing')
                  setValue('onboardingProject.projectTemplate', null)
                }}
                checked={projectTemplate === 'existing'}
              />
              Use existing project template
            </label>
            {projectTemplate === 'existing' && (
              <ControlledInput name={'onboardingProject.projectTemplate'} control={control} />
            )}
            <label className="block">
              <input
                type="radio"
                name="projectTemplate"
                value="new"
                onChange={() => {
                  setProjectTemplate('new')
                  setValue('onboardingProject.projectTemplate', null)
                }}
                checked={projectTemplate === 'new'}
              />
              Create new project template
            </label>
            {projectTemplate === 'new' && (
              <ControlledInput name={'onboardingProject.projectTemplate'} control={control} />
            )}
          </FormRow>
          <FormRow>
            <Label>Project name</Label>
            <ControlledInput name="onboardingProject.projectName" control={control} />
          </FormRow>
        </React.Fragment>
      )}
    </FormScreen>
  )
};
export default OnboardingProject;