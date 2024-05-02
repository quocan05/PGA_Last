import { Form, notification, Typography } from "antd";
import "./forgotPassword.scss";
import { openNotification } from "../../../utils/openNotification";
import { ForgotpasswordAPI } from "../../../services/Auth/Auth";
import { useNavigate } from "react-router";
import { FormForgotPassword } from "../../../components/form/formForgotPassword";
import { toast } from "react-toastify";
export const ForgotPassword = () => {
  const [form] = Form.useForm();
  //const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const handleForgot = async () => {
    const data = form.getFieldsValue();
    try {
      const res = await ForgotpasswordAPI(data);
      if (res) {
        toast.success(
          "Success !! Check your inbox mail to reset your password"
        );
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      }
    } catch (error: any) {
      // openNotification(api, "error", error.response.data.message, "");
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {/* //{contextHolder} */}
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
