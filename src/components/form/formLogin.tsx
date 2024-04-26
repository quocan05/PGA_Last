import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CustomFormProps } from "../../interfaces/form";
import { ICompanyItem } from "../../interfaces/value";
import { getCompany } from "../../services/Employee/employee";
import { Button, Form } from "antd";
import { InputText } from "../input/input";
import { SelectFactory } from "../select/select";
import "./form.scss";

export const FormLogin: React.FC<CustomFormProps> = (props) => {
  const navigate = useNavigate();
  const [company, setCompany] = useState<ICompanyItem[]>([]);
  const getListCompany = async () => {
    const res = await getCompany();
    if (res) {
      const list = res.data.map((item: any) => {
        return { value: item.id, label: item.name };
      });
      setCompany(list);
    }
  };

  useEffect(() => {
    getListCompany();
  }, []);
  return (
    <Form {...props} size="large" layout="vertical">
      <Form.Item
        label={<p>Username</p>}
        name="username"
        rules={[
          { required: true, message: "Please input your Username!" },

          { max: 30, message: "Username must be maximum 30 characters." },
        ]}
      >
        <InputText />
      </Form.Item>

      <Form.Item
        label={<p>Password</p>}
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <InputText type="password" />
      </Form.Item>
      <Form.Item
        label={<p>Factory</p>}
        name="company_id"
        rules={[{ required: true, message: "Please choose a factory!" }]}
      >
        <SelectFactory options={company} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%" }}
        >
          Log in
        </Button>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <a
            onClick={() => navigate("/auth/forgot-password")}
            style={{
              fontSize: 14,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {" "}
            Forgot your password?{" "}
          </a>
        </div>
      </Form.Item>
    </Form>
  );
};
