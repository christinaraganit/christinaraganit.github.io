"use client";

import React from 'react';
import DecisionModal from "@/components/decision-modal/decision-modal";

const OpenModalButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Decision Modal
      </button>
      <DecisionModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Create new custom onboarding flow"} />
    </>
  );
}

export default OpenModalButton;