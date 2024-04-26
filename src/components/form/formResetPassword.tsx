import { Button, Form } from "antd";
import { InputTypePassword } from "../input/input";
import { CustomFormProps } from "../../interfaces/form";
import "./form.scss";

export const FormResetPassword: React.FC<CustomFormProps> = (props) => {
  return (
    <>
      <Form {...props} layout="vertical">
        <Form.Item
          name={"password"}
          label={<p>New password</p>}
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <InputTypePassword />
        </Form.Item>
        <Form.Item
          name={"password_confirmation"}
          label={<p>Confirm password</p>}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The passwords do not match"));
              },
            }),
          ]}
        >
          <InputTypePassword />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: "100%", marginTop: "40px" }}
          >
            <span>Confirm</span>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
