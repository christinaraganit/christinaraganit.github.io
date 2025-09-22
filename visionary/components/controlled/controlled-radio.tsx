import React from 'react';
import { useController, Control, FieldValues, Path } from "react-hook-form";
import InputLabel from "@/components/decision-modal/ui/input-label";
import HelperText from "@/components/decision-modal/ui/helper-text";

type Option<T> = {
  label: string;
  value: T;
}

type Props<T extends FieldValues, V> = {
  name: Path<T>;
  control: Control<T>;
  options: Option<V>[];
  onValueChange?: (value: V) => void;
  description?: string;
};

function ControlledRadio<T extends FieldValues, V>({ name, control, options, onValueChange, description }: Props<T, V>) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className="flex flex-col gap-[16px]">
      {options.map((opt) => (
        <div className="flex flex-col">
          <label key={String(opt.value)} className="flex gap-[8px]">
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
            <InputLabel>{opt.label}</InputLabel>
          </label>
          <div className="pl-[22px]">
            {description && <HelperText>{description}</HelperText>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ControlledRadio;
