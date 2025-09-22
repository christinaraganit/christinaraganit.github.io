"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import {getOptionsFor, OptionsMapKey} from "@/components/decision-modal/type";
import SummaryLabel from "@/components/decision-modal/ui/summary-label";
import SummaryValue from "@/components/decision-modal/ui/summary-value";
import HelperText from "@/components/decision-modal/ui/helper-text";

type Props = {
  title: string;
  titleValue: string;
  decisionKey: OptionsMapKey;
};

const DecisionDropdown: React.FC<Props> = ({ title, titleValue, decisionKey }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [autoExpand, setAutoExpand] = React.useState(false);
  const {watch} = useFormContext();
  const watchedValues = watch(decisionKey);
  const options = getOptionsFor(decisionKey);
  const getValues = React.useCallback((key: string) => {
    if (typeof watchedValues === 'string') {
      return watchedValues;
    }
    if (watchedValues) {
      const value = watchedValues[key];
      if (Array.isArray(value)) {
        return value.join(', ');
      }
      return value ?? '-';
    }
    return  '-';
  }, [watchedValues]);

  React.useEffect(() => {
    if (
      !autoExpand &&
      typeof watchedValues === 'object' &&
      watchedValues &&
      Object.entries(watchedValues).every(([_, v]) => v === undefined)) {
      setIsExpanded(true);
      setAutoExpand(true);
      console.log(watchedValues);
    }
  }, [watchedValues]);

  return (
    <div className="grid grid-cols-2 gap-x-[20px] gap-y-[16px]  cursor-pointer" onClick={() => setIsExpanded((prev) => !prev)}>
      <SummaryLabel>{title}</SummaryLabel>
      <SummaryValue>{titleValue}</SummaryValue>
      {isExpanded && options?.map((value) => (
        <>
          <HelperText key={value.label + value.key}>{value.label}</HelperText>
          <SummaryValue key={value.label + value.key + "-value"}>
            {getValues(value.key)}
          </SummaryValue>
        </>
      ))}
    </div>
  )
}

export default DecisionDropdown;