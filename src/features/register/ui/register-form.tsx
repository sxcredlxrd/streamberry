import type { RegisterFormProps } from "@/features/register/model/types.ts";

function RegisterForm({ onSubmit, children }: RegisterFormProps) {
  return (
    <form
      className="flex flex-col gap-[20px] min-w-[450px] min-h-[350px] justify-between bg-color-2 text-n-1 rounded-[16px] px-[20px] py-[20px]"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default RegisterForm;
