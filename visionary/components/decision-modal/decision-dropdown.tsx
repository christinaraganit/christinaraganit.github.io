"use client";

import React from 'react';
import {useFormContext} from "react-hook-form";
import {getOptionsFor, OptionsMapKey} from "@/components/decision-modal/type";

type Props = {
  title: string;
  titleValue: string;
  decisionKey: OptionsMapKey;
};

const DecisionDropdown: React.FC<Props> = ({ title, titleValue, decisionKey }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
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
  return (
    <div className="grid grid-cols-2 gap-[20px] cursor-pointer" onClick={() => setIsExpanded((prev) => !prev)}>
      <p>{title}</p>
      <p>{titleValue}</p>
      {isExpanded && options?.map((value) => (
        <>
          <p key={value.label + value.key} className="text-gray-500">{value.label}</p>
          <p key={value.label + value.key + "-value"} className="text-gray-500">{getValues(value.key)}
          </p>
        </>
      ))}
    </div>
  )
}

export default DecisionDropdown;