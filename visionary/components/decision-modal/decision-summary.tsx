"use client";

import {useFormContext} from "react-hook-form";
import OnboardingFlow from "@/components/decision-modal/type";
import DecisionDropdown from "@/components/decision-modal/decision-dropdown";

const DecisionSummary = () => {
  const {watch} = useFormContext<OnboardingFlow>();

  const [
    name,
    teamMemberships,
    hasOnboardingProject,
    hasCustomWelcomeScreen,
    customStartScreen
  ] = watch(
    [
      'name',
      'teamMemberships',
      'hasOnboardingProject',
      'hasCustomWelcomeScreen',
      'customStartScreen'
    ]
  );

  return (
    <div className="bg-[#F5F3F3] py-[24px] px-[32px] overflow-y-auto h-full w-[384px] min-w-[384px]">
      <h2>Summary of {name ? name : 'Untitled custom onboarding flow'}</h2>
      <div className="flex flex-col gap-4">
        <DecisionDropdown title={"Onboarding group"} titleValue={''} decisionKey={"onboardingGroup"} />
        <DecisionDropdown title={"Has team membership(s)"} titleValue={teamMemberships ? 'Yes' : 'No'} decisionKey={"teamMemberships"} />
        <DecisionDropdown title={"Has onboarding project"} titleValue={hasOnboardingProject ? 'Yes' : 'No'} decisionKey={"onboardingProject"} />
        <DecisionDropdown title={"Has custom welcome screen"} titleValue={hasCustomWelcomeScreen ? 'Yes' : 'No'} decisionKey={"customWelcomeScreen"} />
        <DecisionDropdown title={"Custom start screen"} titleValue={customStartScreen.label} decisionKey={"customStartScreen"} />
      </div>
    </div>
  )
}

export default DecisionSummary;