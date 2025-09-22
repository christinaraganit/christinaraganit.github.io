"use client"

import {Control, FieldValues, Path, useController} from "react-hook-form";
import InputLabel from "@/components/decision-modal/ui/input-label";
import HelperText from "@/components/decision-modal/ui/helper-text";

type Option = {
  label: string;
  value: string;
  description?: string;
};

type MultiCheckboxProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  options: Option[];
};

const ControlledCheckboxes = <T extends FieldValues>({ name, control, options,}: MultiCheckboxProps<T>) =>  {
  const { field } = useController({ name, control });

  const toggleValue = (val: string) => {
    const current: string[] = field.value || [];
    if (current.includes(val)) {
      field.onChange(current.filter((v) => v !== val));
    } else {
      field.onChange([...current, val]);
    }
  };

  return (
    <div className="flex flex-col gap-[16px]">
      {options.map((opt) => (
        <label key={opt.value} className="flex gap-[8px]">
          <input
            type="checkbox"
            checked={field.value?.includes(opt.value) ?? false}
            onChange={() => toggleValue(opt.value)}
          />
          <div className="flex flex-col">
            <InputLabel>{opt.label}</InputLabel>
            {opt.description && <HelperText>{opt.description}</HelperText>}
          </div>
        </label>
      ))}
    </div>
  );
}

export default ControlledCheckboxes;
