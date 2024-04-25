import { ConfigProvider, Input, InputProps } from "antd";
import { inputTextStyle } from "../../constants/scss";

export const InputText: React.FC<InputProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: "transparent",
          },
        },
      }}
    >
      <div>
        <Input style={inputTextStyle} {...props} />
      </div>
    </ConfigProvider>
  );
};
export const InputTypePassword: React.FC<InputProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: "transparent",
          },
        },
      }}
    >
      <div>
        <Input.Password style={inputTextStyle} {...props} />
      </div>
    </ConfigProvider>
  );
};

export const InputTypeNumber: React.FC<InputProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: "transparent",
          },
        },
      }}
    >
      <div>
        <Input
          size="large"
          prefix={<p style={{ color: "#006ADC" }}>Rp</p>}
          type="number"
          style={inputTextStyle}
          {...props}
        />
      </div>
    </ConfigProvider>
  );
};
