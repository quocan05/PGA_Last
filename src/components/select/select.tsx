import { ConfigProvider, Select, SelectProps } from "antd";
import { selectStyle } from "../../constants/scss";
import "./select.scss";

export const SelectGender: React.FC<SelectProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBorderBg: "transparent",
          },
        },
        token: {},
      }}
    >
      <div style={{ width: "100%" }}>
        <Select
          {...props}
          options={[
            {
              label: "Male",
              value: 0,
            },
            {
              label: "Female",
              value: 1,
            },
          ]}
          placeholder="Choose gender"
          style={selectStyle}
        />
      </div>
    </ConfigProvider>
  );
};

export const SelectMarriage: React.FC<SelectProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBorderBg: "transparent",
          },
        },
        token: {},
      }}
    >
      <div style={{ width: "100%" }}>
        <Select {...props} placeholder="Choose Marriage" style={selectStyle} />
      </div>
    </ConfigProvider>
  );
};

export const SelectTypeEmployee: React.FC<SelectProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBgTextHover: "transparent",
            colorBorderBg: "transparent",
          },
        },
        token: {},
      }}
    >
      <div style={{ width: "100%" }}>
        <Select
          {...props}
          options={[
            {
              label: "Permanent",
              value: "0",
            },
            {
              label: "Part-time",
              value: "1",
            },
            {
              label: "Contract",
              value: "2",
            },
          ]}
          placeholder="Choose type"
          style={selectStyle}
        />
      </div>
    </ConfigProvider>
  );
};

export const SelectDepartMent: React.FC<SelectProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBgTextHover: "transparent",
            colorBorderBg: "transparent",
            fontSize: 16,
          },
        },
        token: {},
      }}
    >
      <div style={{ width: "100%" }}>
        <Select
          size="large"
          {...props}
          placeholder="Choose department"
          style={selectStyle}
        />
      </div>
    </ConfigProvider>
  );
};

export const SelectPosiiton: React.FC<SelectProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBgTextHover: "transparent",
            colorBorderBg: "transparent",
            fontSize: 16,
          },
        },
        token: {},
      }}
    >
      <div style={{ width: "100%" }}>
        <Select
          size="large"
          {...props}
          placeholder="Choose position"
          style={selectStyle}
        />
      </div>
    </ConfigProvider>
  );
};

export const SelectGrade: React.FC<SelectProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBgTextHover: "transparent",
            colorBorderBg: "transparent",
            fontSize: 16,
          },
        },
        token: {},
      }}
    >
      <div style={{ width: "100%" }}>
        <Select
          size="large"
          style={selectStyle}
          {...props}
          optionFilterProp="children"
        />
      </div>
    </ConfigProvider>
  );
};

export const SelectBenefit: React.FC<SelectProps> = (props) => {
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBgTextHover: "transparent",
            colorBorderBg: "transparent",
            fontSize: 16,
          },
        },
      }}
    >
      <div style={{ width: "100%" }}>
        <Select size="large" mode="multiple" style={selectStyle} {...props} />
      </div>
    </ConfigProvider>
  );
};

export const SelectHRMUserAccount: React.FC<SelectProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionFontSize: 16,
            selectorBg: "#F1F3F5",
            lineWidthFocus: 0,
            colorBorder: "transparent",
            colorBgTextHover: "transparent",
            colorBorderBg: "transparent",
            fontSize: 16,
          },
        },
        token: {},
      }}
    >
      <div style={{ width: "100%" }}>
        <Select size="large" disabled {...props} style={selectStyle} />
      </div>
    </ConfigProvider>
  );
};

export const SelectFactory: React.FC<SelectProps> = (props) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              optionFontSize: 16,
              selectorBg: "#F1F3F5",
              lineWidthFocus: 0,
              colorBorder: "transparent",
              colorBgTextHover: "transparent",
              colorBorderBg: "transparent",
              fontSize: 16,
            },
          },
          token: {},
        }}
      >
        <Select
          {...props}
          placeholder="Select Factory"
          // options={[
          //   {
          //     label: "SBM",
          //     value: 1,
          //   },
          //   {
          //     label: "DMF",
          //     value: 2,
          //   },
          // ]}
          style={selectStyle}
        />
      </ConfigProvider>
    </>
  );
};
