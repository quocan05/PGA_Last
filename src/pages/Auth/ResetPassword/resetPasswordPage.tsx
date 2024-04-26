import { Form, notification, Typography } from "antd";
import { AuthLayout } from "../../../layouts/Auth/authLayout";
import "./resetPasswordPage.scss";
import { IResetPasswordParam } from "../../../interfaces/value";
import { LogouAPI, ResetPasswordAPI } from "../../../services/Auth/Auth";
import { openNotification } from "../../../utils/openNotification";
import { deleteLocalStorageItem } from "../../../services/localStorage";
import { useNavigate } from "react-router";
import { FormResetPassword } from "../../../components/form/formResetPassword";

export const ResetPasswordPage = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const handleResetPassword = async () => {
    const url = new URL(window.location.href);
    const comp_id = url.searchParams.get("company_id") as string;
    const email = url.searchParams.get("email") as string;
    const token = url.searchParams.get("token") as string;
    const data: IResetPasswordParam = {
      company_id: comp_id,
      email: email,
      password: form.getFieldValue("password"),
      password_confirmation: form.getFieldValue("password_confirmation"),
      token: token,
    };

    try {
      const res = await ResetPasswordAPI(data);
      if (res) {
        openNotification(
          api,
          "success",
          "Success",
          "Your password was reset, wait for direct to login page!"
        );

        setTimeout(async () => {
          deleteLocalStorageItem("token");
          navigate("/auth/login");
        }, 1000);
      }
    } catch (error: any) {
      console.log("err", error);
      openNotification(api, "error", error.response.data.message, "");
    }
  };
  return (
    <>
      {contextHolder}
      <Typography.Title
        level={2}
        //style={{ textAlign: "center", fontWeight: 500 }}
      >
        Reset Password
      </Typography.Title>
      <div className="wrapper-form-reset">
        <FormResetPassword form={form} onFinish={() => handleResetPassword()} />
      </div>
    </>
  );
};
