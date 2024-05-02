import { Card, Form, notification } from "antd";
import { FormChangePassword } from "../../components/form/formChangePassword";
import { ChangePassword } from "../../services/Auth/Auth";
import { useEffect } from "react";
import { getLocalStorage } from "../../services/localStorage";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { HeaderSettings } from "../Headers/headerSetting";

export const ChangePasswordForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleChangePassword = async () => {
    console.log("form value: ", form.getFieldsValue());
    try {
      const data = form.getFieldsValue();
      const res = await ChangePassword(data);
      if (res) {
        toast.success("Change password successfully!");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if (!getLocalStorage("token")) {
      navigate("/auth/login");
    }
  }, []);
  return (
    <>
      <HeaderSettings />
      <br />
      <Card title={<p>Change password</p>}>
        <FormChangePassword
          form={form}
          onFinish={() => handleChangePassword()}
        />
      </Card>
    </>
  );
};
