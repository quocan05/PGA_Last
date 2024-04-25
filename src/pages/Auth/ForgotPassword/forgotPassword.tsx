import { Form, notification, Typography } from "antd";
import { FormForgotPassword } from "../../../components/form/form";
import { AuthLayout } from "../../../layouts/Auth/authLayout";
import "./forgotPassword.scss";
import { openNotification } from "../../../utils/openNotification";
import { ForgotpasswordAPI } from "../../../services/Auth/Auth";
import { useNavigate } from "react-router";
export const ForgotPassword = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const handleForgot = async () => {
    const data = form.getFieldsValue();
    try {
      const res = await ForgotpasswordAPI(data);
      if (res) {
        openNotification(
          api,
          "success",
          res.message,
          "Check your inbox mail to reset your password"
        );
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      }
    } catch (error: any) {
      console.log("errr>>>", error);
      openNotification(api, "error", error.response.data.message, "");
    }
  };
  return (
    <>
      {contextHolder}
      <Typography.Title
        level={2}
        style={{ textAlign: "center", fontWeight: 500 }}
      >
        Forgot Password
      </Typography.Title>

      <div className="wrapper-form-forgot">
        <FormForgotPassword form={form} onFinish={() => handleForgot()} />
      </div>
    </>
  );
};
