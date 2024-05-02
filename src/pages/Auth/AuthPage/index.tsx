import { Outlet } from "react-router";
import { AuthLayout } from "../../../layouts/Auth/authLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastComponent } from "../../../components/Toast/toast";

export const AuthPage = () => {
  return (
    <>
      <AuthLayout>
        <Outlet />
        <ToastComponent />
      </AuthLayout>
    </>
  );
};
