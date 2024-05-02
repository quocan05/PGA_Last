import { useSelector } from "react-redux";
import { CustomFormProps } from "../../interfaces/form";
import { RootState } from "../../redux/store";
import { convertDataSelect } from "../../utils/convertDataSelect";
import { Card, Form } from "antd";
import { SelectDepartMent, SelectPosiiton } from "../select/select";
import { CheckboxEmployment } from "../checkbox/checkbox";
import "./form.scss";

export const FormEmploymentDetails: React.FC<CustomFormProps> = ({
  ...props
}) => {
  const dataDepartment = useSelector(
    (state: RootState) => state.employee.department
  );
  const dataPosition = useSelector(
    (state: RootState) => state.employee.position
  );

  const dataConvertDepartment = dataDepartment
    ? dataDepartment.map((item: any) => {
        return convertDataSelect(item);
      })
    : [];

  const dataConvertPosition = dataPosition
    ? dataPosition.map((item: any) => {
        return convertDataSelect(item);
      })
    : [];

  return (
    <>
      <Card title={<p>Employment Details</p>}>
        <div style={{ padding: "0px 20px 20px 20px" }}>
          <Form
            {...props}
            labelCol={{ span: 6 }}
            style={{ width: "50%" }}
            initialValues={{
              department_id: null,
              position_id: null,
              hidden_on_payroll: false,
              entitle_ot: false,
              meal_allowance_paid: false,
            }}
          >
            <Form.Item name={"department_id"} label={<p>Department</p>}>
              <SelectDepartMent
                placeholder="Choose department"
                options={dataConvertDepartment}
              />
            </Form.Item>
            <Form.Item name={"position_id"} label={<p>Position</p>}>
              <SelectPosiiton
                placeholder="Choose position"
                options={dataConvertPosition}
              />
            </Form.Item>
            <Form.Item valuePropName="checked" name={"hidden_on_payroll"}>
              <CheckboxEmployment name="hidden_on_payroll">
                <p>Hidden on payroll</p>
              </CheckboxEmployment>
            </Form.Item>
            <Form.Item valuePropName="checked" name={"entitle_ot"}>
              <CheckboxEmployment
                name={"entitle_ot"}
              >
                <p>Entitled OT</p>
              </CheckboxEmployment>
            </Form.Item>
            <Form.Item valuePropName="checked" name={"meal_allowance_paid"}>
              <CheckboxEmployment name={"meal_allowance_paid"}>
                <p>Meal Allowance Paid</p>
              </CheckboxEmployment>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </>
  );
};
