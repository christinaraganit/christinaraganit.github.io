import React from "react";
import { useController, Control, FieldValues, Path } from "react-hook-form";

type Option = {
  label: string;
};

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  options: Option[];
  placeholder?: string;
};

const ControlledDropdown = <T extends FieldValues>({ name, control, options, placeholder }: Props<T>) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <select {...field}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.label} value={opt.label}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default ControlledDropdown;
