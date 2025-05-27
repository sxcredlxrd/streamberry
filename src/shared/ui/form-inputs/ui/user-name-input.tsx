import { type Control, Controller, type Path } from "react-hook-form";
import { FormInputWithError } from "@/shared/ui";

type FormValues = {
  username?: string;
  email: string;
  password: string;
};

type UserNameInputProps<T extends FormValues = FormValues> = {
  control: Control<T>;
  name: Path<T>;
};

function UserNameInput<T extends FormValues>({
  control,
  name,
}: UserNameInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "Имя пользователя обязательно",
        minLength: {
          value: 4,
          message: "Имя не должно быть короче 4 символов",
        },
      }}
      render={({ field, fieldState }) => (
        <FormInputWithError
          placeholder="Имя пользователя"
          field={field}
          fieldState={fieldState}
        />
      )}
    />
  );
}

export default UserNameInput;
