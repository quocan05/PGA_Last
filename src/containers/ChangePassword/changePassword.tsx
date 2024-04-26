import { Card, Form, notification } from "antd";
import { HeaderSettings } from "../Headers/headers";
import { FormChangePassword } from "../../components/form/formChangePassword";
import { ChangePassword } from "../../services/Auth/Auth";
import { openNotification } from "../../utils/openNotification";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../../services/localStorage";
import { useNavigate } from "react-router";

export const ChangePasswordForm = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const handleChangePassword = async () => {
    console.log("form value: ", form.getFieldsValue());
    try {
      const data = form.getFieldsValue();
      const res = await ChangePassword(data);
      if (res) {
        openNotification(api, "success", res.message, "");
      }
    } catch (error: any) {
      console.log("err", error);
      openNotification(api, "error", error.response.data.message, "");
    }
  };
  useEffect(() => {
    if (!getLocalStorage("token")) {
      navigate("/auth/login");
    }
  }, []);
  return (
    <>
      {contextHolder}
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
