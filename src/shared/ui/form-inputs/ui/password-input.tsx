import { type Control, Controller, type Path } from "react-hook-form";
import { FormInputWithError } from "@/shared/ui";

type FormValues = {
  username?: string;
  email: string;
  password: string;
};

type PasswordInputProps<T extends FormValues = FormValues> = {
  control: Control<T>;
  name: Path<T>;
};

function PasswordInput<T extends FormValues>({
  control,
  name,
}: PasswordInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: "Введите пароль" }}
      render={({ field, fieldState }) => (
        <FormInputWithError
          type="password"
          placeholder="Пароль"
          field={field}
          fieldState={fieldState}
        />
      )}
    />
  );
}

export default PasswordInput;
