"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import ControlledInput from "@/components/controlled/controlled-input";
import FormRow from "@/components/decision-modal/ui/form-row";
import ScreenLabel from "@/components/decision-modal/ui/screen-label";
import Description from "@/components/decision-modal/ui/description";
import Label from "@/components/decision-modal/ui/label";
import HelperText from "@/components/decision-modal/ui/helper-text";
import FormScreen from "@/components/decision-modal/ui/form-screen";

const TeamMemberships: React.FC = () => {
  const {control} = useFormContext();

  return (
    <FormScreen>
      <FormRow>
        <ScreenLabel>Team memberships (optional)</ScreenLabel>
        <Description>Only teams you have invite permission for can be added to this onboarding flow</Description>
      </FormRow>
      <FormRow>
        <Label>Team ID(s)</Label>
        <ControlledInput name="teamMemberships" control={control} />
        <HelperText>Enter multiple team IDs, separated by commas (e.g. ID_1, ID_2)</HelperText>
      </FormRow>
    </FormScreen>
  )
};
export default TeamMemberships;