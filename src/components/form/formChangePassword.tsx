import { Button, Form } from "antd";
import { CustomFormAuthProps } from "../../interfaces/form";
import { InputTypePassword } from "../input/input";
import "./form.scss";
export const FormChangePassword: React.FC<CustomFormAuthProps> = (props) => {
  return (
    <>
      <div style={{ width: "24%" }}>
        <Form {...props} layout="vertical">
          <Form.Item
            label={<p>New Password</p>}
            name="password"
            rules={[{ required: true }]}
          >
            <InputTypePassword />
          </Form.Item>
          <Form.Item
            label={<p>Confirm Password</p>}
            name="password_confirmation"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords do not match")
                  );
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
      </div>
    </>
  );
};
