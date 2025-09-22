import React from 'react';
import { useController, Control, FieldValues, Path } from "react-hook-form";

type Option<T> = {
  label: string;
  value: T;
}

type Props<T extends FieldValues, V> = {
  name: Path<T>;
  control: Control<T>;
  options: Option<V>[];
  onValueChange?: (value: V) => void;
};

function ControlledRadio<T extends FieldValues, V>({ name, control, options, onValueChange }: Props<T, V>) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <>
      {options.map((opt) => (
        <label key={String(opt.value)} className="block">
          <input
            type="radio"
            name={field.name}
            value={String(opt.value)}
            checked={field.value === opt.value}
            onChange={() => {
              field.onChange(opt.value);
              onValueChange?.(opt.value);
            }}
          />
          {opt.label}
        </label>
      ))}
    </>
  );
}

export default ControlledRadio;
