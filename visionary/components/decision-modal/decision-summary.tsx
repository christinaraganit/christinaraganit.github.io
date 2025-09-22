"use client";

import {useFormContext} from "react-hook-form";
import OnboardingFlow from "@/components/decision-modal/type";
import DecisionDropdown from "@/components/decision-modal/decision-dropdown";
import Header from "@/components/decision-modal/ui/header";

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
      <Header>Summary of {name ? name : 'Untitled custom onboarding flow'}</Header>
      <div className="flex flex-col gap-[24px] mt-[16px]">
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