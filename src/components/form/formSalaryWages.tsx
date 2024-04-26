import { CustomFormProps } from "../../interfaces/form";
import { Card, Form, Typography } from "antd";
import { validateNumber } from "../../utils/validate";
import { InputTypeNumber } from "../input/input";
import "./form.scss";

export const FormSalaryWages: React.FC<CustomFormProps> = ({ ...props }) => {
  return (
    <>
      <Card title={<p>Salary & Wages</p>}>
        <div style={{ padding: "0px 20px 20px 20px" }}>
          <Form labelCol={{ span: 10 }} {...props} style={{ width: "60%" }}>
            <Form.Item
              label={<p>Basic Salary</p>}
              name="basic_salary"
              rules={[
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputTypeNumber />
            </Form.Item>
            <Form.Item
              label={<p>Basic Salary (Audit)</p>}
              name="audit_salary"
              rules={[
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputTypeNumber />
            </Form.Item>
            <Form.Item
              label={<p>Safety Insurance Amount</p>}
              name="safety_insurance"
              rules={[
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputTypeNumber />
            </Form.Item>
            <Form.Item
              label={<p>Healthy Insurance Amount</p>}
              name="health_insurance"
              rules={[
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputTypeNumber />
            </Form.Item>
            <Form.Item
              label={<p>Safety Insurance Amount (Audit)</p>}
              name="safety_insurance_audit"
              rules={[
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputTypeNumber />
            </Form.Item>
            <Form.Item
              label={<p>Healthy Insurance Amount (Audit)</p>}
              name="health_insurance_audit"
              rules={[
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputTypeNumber />
            </Form.Item>
            <Form.Item
              label={<p>Meal Allowance</p>}
              name="meal_allowance"
              rules={[
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputTypeNumber />
            </Form.Item>
          </Form>
          <Typography>
            <b>Note:</b> If leave empty, these fields will be calculated
            automatically by system
          </Typography>
        </div>
      </Card>
    </>
  );
};
