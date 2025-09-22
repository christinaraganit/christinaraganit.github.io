import React from 'react';
import { useController, Control } from "react-hook-form";

type Props = {
  name: string;
  control: Control;
};

const ControlledInput: React.FC<Props> = ({ name, control }) => {
  const { field } = useController({
    name,
    control
  });

  return (
    <input {...field} className="border p-2 rounded" value={field.value ?? ""}/>
  )
};

export default ControlledInput;