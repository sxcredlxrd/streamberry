import { type SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";
import { EmailInput, PasswordInput, UIButton } from "@/shared/ui";
import { AuthForm } from "@/features";

type FormInputs = {
  email: string;
  password: string;
};

function Login() {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-2xl">Авторизация</h1>
      <div className="flex flex-col gap-[15px]">
        <EmailInput control={control} name="email" />
        <PasswordInput control={control} name="password" />
      </div>
      <p>
        У вас ещё нет аккаунта?&nbsp;
        <Link className="underline" to="/register">
          Зарегистрироваться.
        </Link>
      </p>
      <UIButton type="submit">Войти</UIButton>
    </AuthForm>
  );
}

export default Login;
