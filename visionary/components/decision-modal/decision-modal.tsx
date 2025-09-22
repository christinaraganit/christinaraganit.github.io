"use client";

import React from 'react';
import {useForm, FormProvider} from "react-hook-form";
import OnboardingFlow, {DefaultOnboardingFlow} from "@/components/decision-modal/type";
import DecisionSummary from "@/components/decision-modal/decision-summary";
import Name from "@/components/decision-modal/screens/name";
import OnboardingGroup from "@/components/decision-modal/screens/onboarding-group";
import TeamMemberships from "@/components/decision-modal/screens/team-memberships";
import OnboardingProject from "@/components/decision-modal/screens/onboarding-project";
import CustomWelcomeScreen from "@/components/decision-modal/screens/custom-welcome-screen";
import CustomStartScreen from "@/components/decision-modal/screens/custom-start-screen";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const DecisionModal: React.FC<Props> = ({ isOpen, setIsOpen, title }) => {

  const methods = useForm<OnboardingFlow>({
    defaultValues: DefaultOnboardingFlow
  });

  const [step, setStep] = React.useState(1);

  const screens: Record<number, React.ReactNode> = {
    1: <Name />,
    2: <OnboardingGroup />,
    3: <TeamMemberships />,
    4: <OnboardingProject />,
    5: <CustomWelcomeScreen />,
    6: <CustomStartScreen />
  };

  const selectedScreen = screens[step];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`flex flex-col rounded-[12px] w-[960px] h-[640px] bg-white`}>
        <header className="flex justify-between items-center py-[18px]  px-[32px] border-b">
          <div>
            {title}
          </div>
          <button onClick={() => setIsOpen(false)}>X</button>
        </header>
        <FormProvider {...methods}>
          <div className="flex grow overflow-hidden">
            {selectedScreen}
            <DecisionSummary />
          </div>
        </FormProvider>
        <footer className="flex justify-between py-[14px] align-center border-t px-[32px]">
          <p>Step {step} of 6</p>
          <div className="flex gap-4">
            <button disabled={step === 1} onClick={() => setStep((prev) => prev-1)}>Back</button>
            <button disabled={step === 6} onClick={() => setStep((prev) => prev + 1)}>Next</button>
          </div>
        </footer>
      </div>
    </div>
  )
};

export default DecisionModal;