import type { AuthFormProps } from "@/features/auth/model/types";

function AuthForm({ onSubmit, children }: AuthFormProps) {
  return (
    <form
      className="flex flex-col gap-[20px] min-w-[450px] min-h-[350px] justify-between bg-color-2 text-n-1 rounded-[16px] px-[20px] py-[20px]"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default AuthForm;
