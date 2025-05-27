import { UIInput } from "@/shared/ui";
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

type FormInputWithErrorProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
  fieldState: ControllerFieldState;
  placeholder: string;
  type?: string;
};

function FormInputWithError<T extends FieldValues>({
  field,
  fieldState,
  placeholder,
  type,
}: FormInputWithErrorProps<T>) {
  return (
    <>
      <UIInput {...field} type={type} placeholder={placeholder} />
      {fieldState.error && (
        <span className="text-color-3">{fieldState.error.message}</span>
      )}
    </>
  );
}

export default FormInputWithError;
