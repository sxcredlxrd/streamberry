import type { FormEventHandler, ReactNode } from "react";

export type RegisterFormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};
