import type { FormEventHandler, ReactNode } from "react";

export type AuthFormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export type AuthFormData = {
  email: string;
  password: string;
};

export type AuthFormErrors = Partial<{
  email: string;
  password: string;
}>;
