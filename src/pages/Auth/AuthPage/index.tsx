import { Outlet } from "react-router";
import { AuthLayout } from "../../../layouts/Auth/authLayout";

export const AuthPage = () => {
  return (
    <>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </>
  );
};
