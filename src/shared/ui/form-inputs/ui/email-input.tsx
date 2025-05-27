import { type Control, Controller, type Path } from "react-hook-form";
import { FormInputWithError } from "@/shared/ui";

type FormValues = {
  username?: string;
  email: string;
  password: string;
};

type EmailInputProps<T extends FormValues = FormValues> = {
  control: Control<T>;
  name: Path<T>;
};

function EmailInput<T extends FormValues>({
  control,
  name,
}: EmailInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "Введите Email",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Неверный формат Email",
        },
      }}
      render={({ field, fieldState }) => (
        <FormInputWithError
          type="email"
          placeholder="Email"
          field={field}
          fieldState={fieldState}
        />
      )}
    />
  );
}

export default EmailInput;
