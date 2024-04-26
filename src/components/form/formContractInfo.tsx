import { Card, DatePickerProps, Form } from "antd";
import { CustomFormProps } from "../../interfaces/form";
import { validateMessages } from "../../utils/validate";
import { DatePickerDialog } from "../datePicker/datePicker";
import { SelectTypeEmployee } from "../select/select";
import { useState } from "react";
import "./form.scss";

export const FormContractInformation: React.FC<CustomFormProps> = ({
  mode,
  ...props
}) => {
  const [contract_start_date, setContract_start_date] = useState<any>();
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setContract_start_date(dateString);
  };
  return (
    <>
      <Card title={<p>Contract information</p>}>
        <div style={{ padding: "0px 20px 20px 20px" }}>
          <Form
            layout="horizontal"
            labelCol={{ span: 8 }}
            size="large"
            style={{ width: "50%" }}
            {...props}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={"contract_start_date"}
              rules={[{ required: true, message: "" }]}
              label={<p>Date start</p>}
            >
              <DatePickerDialog
                value={contract_start_date}
                onChange={onChange}
                format={"YYYY-MM-DD"}
              />
            </Form.Item>
            <Form.Item
              name={"type"}
              rules={[{ required: true, message: "Please choose type" }]}
              label={<p>Employee Type</p>}
            >
              <SelectTypeEmployee
                allowClear
                disabled={mode === "edit" ? true : false}
              />
            </Form.Item>
          </Form>
        </div>
      </Card>
    </>
  );
};
