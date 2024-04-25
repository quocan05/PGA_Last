import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Auth/Login/loginPage";
import ErrorPage from "../pages/Error/error";
import { HomePage } from "../pages/Home/homePage";
import { FormInfoEmployee } from "../containers/FormInfo/formInfo";
import { ManageEmployee } from "../containers/ManageEmployee/ManageEmployee";
import { ChangePasswordForm } from "../containers/ChangePassword/changePassword";
import { AuthLayout } from "../layouts/Auth/authLayout";
import { AuthPage } from "../pages/Auth/AuthPage";
import { ForgotPassword } from "../pages/Auth/ForgotPassword/forgotPassword";
import { ResetPasswordPage } from "../pages/Auth/ResetPassword/resetPasswordPage";

export const routers = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
    ],
  },

  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "employee",
        element: <ManageEmployee />,
      },
      {
        path: "employee/create-or-update/:id",
        element: <FormInfoEmployee />,
      },
      {
        path: "employee/create-or-update",
        element: <FormInfoEmployee />,
      },
      {
        path: "settings/change-password",
        element: <ChangePasswordForm />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
