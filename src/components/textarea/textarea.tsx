import { TextAreaProps } from "antd/es/input";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { inputTextStyle, textAreaStyle } from "../../constants/scss";
import { ConfigProvider } from "antd";

export const TextAreaRemark: React.FC<TextAreaProps> = (props) => {
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
      <TextArea {...props} style={textAreaStyle} rows={3} autoSize={false} />
    </ConfigProvider>
  );
};
