import "./loginPage.scss";
import { Form, notification, Typography } from "antd";
import { ILoginParams } from "../../../interfaces/value";
import { LoginAPI } from "../../../services/Auth/Auth";
import { useNavigate } from "react-router";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../services/localStorage";
import { useEffect } from "react";
import { openNotification } from "../../../utils/openNotification";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { FormLogin } from "../../../components/form/formLogin";
export const LoginPage = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleLogin = async () => {
    const dataLogin: ILoginParams = form.getFieldsValue();
    try {
      const res = await LoginAPI(dataLogin);
      if (res && res.data.token) {
        await setLocalStorage(res.data.token);
        openNotification(
          api,
          "success",
          "Login Success, Wait for direct to home",
          ""
        );
        setTimeout(() => {
          navigate("/employee");
          window.location.reload();
        }, 1000);
      }
      if (res) {
        console.log("res", res);
      }
    } catch (err: any) {
      openNotification(api, "error", err.response.data.message, "");
    }
  };
  useEffect(() => {
    if (getLocalStorage("token")) {
      navigate("/employee");
    } else {
      return;
    }
  }, []);
  return (
    <>
      {contextHolder}
      <Typography.Title level={2}>Sign In</Typography.Title>
      <div className="wrapper-form-login">
        <FormLogin form={form} onFinish={() => handleLogin()} />
      </div>
    </>
  );
};
