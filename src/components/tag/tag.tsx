import { ConfigProvider, TabsProps, Tag } from "antd";
import { CustomTagProps } from "../../interfaces/tag";
import "./tag.scss";
import { tagStyle } from "../../constants/scss";
export const TagTabs: React.FC<CustomTagProps> = ({
  type,
  label,
  ...props
}) => {
  let tagTheme = {};
  switch (type) {
    case "active":
      tagTheme = {
        defaultBg: "#0091FF",
        defaultColor: "#FBFDFF",
      };
      break;
    case "error":
      tagTheme = {
        defaultBg: "#FFEFEF",
        defaultColor: "#E5484D",
      };
      break;
    case "error_active":
      tagTheme = {
        defaultBg: "#EF6165",
        defaultColor: "#FFEFEF",
      };
      break;
    default:
      tagTheme = {
        defaultBg: "#E1F0FF",
        defaultColor: "#0091FF",
      };
  }
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Tag: tagTheme,
          },
        }}
      >
        <Tag style={tagStyle} {...props} bordered={false}>
          <a>{label}</a>
        </Tag>
      </ConfigProvider>
    </>
  );
};
