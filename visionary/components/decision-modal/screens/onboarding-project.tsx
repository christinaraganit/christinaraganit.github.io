"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledRadio from "@/components/controlled/controlled-radio";
import ControlledInput from "@/components/controlled/controlled-input";

const OnboardingProject: React.FC = () => {
  const {control, watch, setValue} = useFormContext();
  const hasOnboardingProject = watch('hasOnboardingProject');
  const [projectTemplate, setProjectTemplate] = React.useState<'existing' | 'new'>('existing');

  return (
    <div className="grow py-[24px] px-[32px] overflow-y-auto">
      <h2>Onboarding project (optional)</h2>
      <p>You need guest access to view or edit assigned onboarding projects. Users with view-only access can't be assigned onboarding projects</p>
      <ControlledRadio name="hasOnboardingProject" control={control} options={[
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
      {hasOnboardingProject && (
        <React.Fragment>
          <p>Team ID</p>
          <ControlledInput name="onboardingProject.teamId" control={control} />
          <p>Select project template</p>
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
          <p>Project name</p>
          <ControlledInput name="onboardingProject.projectName" control={control} />
        </React.Fragment>
      )}
    </div>
  )
};
export default OnboardingProject;