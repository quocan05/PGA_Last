import { Checkbox, CheckboxProps, ConfigProvider } from "antd";
import { useState } from "react";
import "./checkbox.scss";

export const CheckBoxEmploymentDetails: React.FC<CheckboxProps> = (props) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([
    "operational_allowance_paid",
    "attendance_allowance_paid",
  ]);

  const onChange = (newCheckedValues: string[]) => {
    // Nếu "Entitled OT" được chọn, bỏ chọn hai checkbox khác
    if (newCheckedValues.includes("entitle_ot")) {
      newCheckedValues = newCheckedValues.filter(
        (value) =>
          value !== "operational_allowance_paid" &&
          value !== "attendance_allowance_paid"
      );
    } else {
      // Nếu "Entitled OT" không được chọn, chọn hai checkbox khác
      if (!newCheckedValues.includes("operational_allowance_paid")) {
        newCheckedValues.push("operational_allowance_paid");
      }
      if (!newCheckedValues.includes("attendance_allowance_paid")) {
        newCheckedValues.push("attendance_allowance_paid");
      }
    }
    setCheckedValues(newCheckedValues);
    console.log("checked : >>", newCheckedValues);
  };

  const options = [
    { label: <p>Hidden on payroll</p>, value: "hidden_on_payroll" },
    { label: <p>Entitled OT</p>, value: "entitle_ot" },
    { label: <p>Meal Allowance Paid</p>, value: "meal_allowance_paid" },
    {
      label: <p>Operational Allowance Paid</p>,
      value: "operational_allowance_paid",
      disabled: true,
    },
    {
      label: <p>Attendance Allowance Paid</p>,
      value: "attendance_allowance_paid",
      disabled: true,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#30A46C",
          fontSize: 16,
        },
      }}
    >
      <Checkbox.Group
        {...props}
        options={options}
        value={checkedValues}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};

export const CheckboxEmployment: React.FC<CheckboxProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#30A46C",
          fontSize: 16,
        },
      }}
    >
      <Checkbox {...props} />
    </ConfigProvider>
  );
};
