import { Outlet } from "react-router";
import { AuthBackground } from "@/shared/assets";

function AuthLayout() {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center">
      <img
        className="brightness-50 bg-cover pointer-events-none absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={AuthBackground}
        alt="Layout background"
      />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
