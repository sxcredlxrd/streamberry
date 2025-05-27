import { Controller, useFormContext } from "react-hook-form";
import { UISelect } from "@/shared/ui";

type Option = { label: string; value: string };

export type FormSelectProps = {
  name: string;
  label: string;
  options: Option[];
};

function FormSelect({ name, label, options }: FormSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <UISelect label={label} options={options} {...field} />
      )}
    />
  );
}

export default FormSelect;
