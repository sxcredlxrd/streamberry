import { type SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";
import { RegisterForm } from "@/features";
import {
  EmailInput,
  PasswordInput,
  UIButton,
  UserNameInput,
} from "@/shared/ui";

type FormInputs = {
  username: string;
  email: string;
  password: string;
};

function Register() {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-2xl">Регистрация</h1>
      <div className="flex flex-col gap-[15px]">
        <UserNameInput control={control} name="username" />
        <EmailInput control={control} name="email" />
        <PasswordInput control={control} name="password" />
      </div>
      <p>
        Уже есть аккаунт?&nbsp;
        <Link className="underline" to="/login">
          Авторизоваться.
        </Link>
      </p>
      <UIButton type="submit">Зарегистрироваться</UIButton>
    </RegisterForm>
  );
}

export default Register;
