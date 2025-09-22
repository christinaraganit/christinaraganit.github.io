"use client"

import {Control, FieldValues, Path, useController} from "react-hook-form";

type Option = {
  label: string;
  value: string;
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
    <>
      {options.map((opt) => (
        <label key={opt.value} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={field.value?.includes(opt.value) ?? false}
            onChange={() => toggleValue(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </>
  );
}

export default ControlledCheckboxes;
