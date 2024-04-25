import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import React from "react";
import { datePickerStyle } from "../../constants/scss";

export const DatePickerDialog: React.FC<DatePickerProps> = (props) => {
  return (
    <>
      <ConfigProvider
        theme={{
          // components: {
          //   DatePicker: {
          //     colorBorderBg: "transparent",
          //     colorBorder: "transparent",
          //   },
          // },
          token: {
            colorBorder: "transparent",
          },
        }}
      >
        <DatePicker style={datePickerStyle} {...props} />
      </ConfigProvider>
    </>
  );
};
