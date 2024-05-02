import { Checkbox, CheckboxProps, ConfigProvider } from "antd";
import "./checkbox.scss";

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
