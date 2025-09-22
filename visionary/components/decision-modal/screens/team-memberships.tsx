"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";

const TeamMemberships: React.FC = () => {
  const {control} = useFormContext();

  return (
    <div className="grow py-[24px] px-[32px] overflow-y-auto">
      <h2>Team memberships (optional)</h2>
      <p>Only teams you have invite permission for can be added to this onboarding flow</p>
      <p>Team ID(s)</p>
      <ControlledInput name="teamMemberships" control={control} />
      <p>Enter multiple team IDs, separated by commas (e.g. ID_1, ID_2)</p>
    </div>
  )
};
export default TeamMemberships;