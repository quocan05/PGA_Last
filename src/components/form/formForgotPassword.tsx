import { useNavigate } from "react-router";
import { CustomFormProps } from "../../interfaces/form";
import { Button, Form } from "antd";
import { InputText } from "../input/input";
import { validateMessages } from "../../utils/validate";
import "./form.scss";

export const FormForgotPassword: React.FC<CustomFormProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Form
      {...props}
      size="large"
      layout="vertical"
      validateMessages={validateMessages}
    >
      <span>Your work email</span>
      <Form.Item name="email">
        <InputText type="email" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Confirm & Send OTP
        </Button>
      </Form.Item>
      <Form.Item>
        <div style={{ width: "100%", textAlign: "center" }}>
          <a onClick={() => navigate("/auth/login")}>Back to Sign In</a>
        </div>
      </Form.Item>
    </Form>
  );
};
