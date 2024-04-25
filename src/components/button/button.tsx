import {
  Button,
  ButtonProps,
  ConfigProvider,
  message,
  Upload,
  UploadProps,
} from "antd";
import {
  EmployeeManageIcon,
  FilePlusIcon,
  Trash,
} from "../../assets/icons/icons";
import {
  buttonMenuStyle,
  buttonStyle,
  buttonTabStyle,
} from "../../constants/scss";
import { UploadOutlined } from "@ant-design/icons";
import "./button.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchEmployeesByPage } from "../../redux/reducers/employeeReducer";

export const ButtonAddNewEmployee: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorBgContainer: "#EDF6FF",
              defaultHoverBorderColor: "none",
              defaultHoverColor: "none",
              colorPrimary: "#0091FF",
              colorText: "#0091FF",
              colorBorder: "none",
            },
          },
          token: {
            colorTextDisabled: "#C1C8CD",
          },
        }}
      >
        <Button {...props} icon={<FilePlusIcon />} style={buttonStyle}>
          Add
        </Button>
      </ConfigProvider>
    </>
  );
};

export const ButtonDeleteEmployee: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorBgContainer: "#FFEFEF",
              defaultHoverBorderColor: "none",
              defaultHoverColor: "none",
              colorPrimary: "#E5484D",
              colorText: "#E5484D",
              colorBorder: "none",
            },
          },
          token: {
            colorTextDisabled: "#C1C8CD",
          },
        }}
      >
        <Button {...props} icon={<Trash />} style={buttonStyle}>
          Delete
        </Button>
      </ConfigProvider>
    </>
  );
};

export const ButtonMenuSider: React.FC<ButtonProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorText: "#11181C",
              defaultHoverColor: "#11181C",
              defaultHoverBg: "#D6EDFF",
            },
          },
        }}
      >
        <Button
          {...props}
          style={buttonMenuStyle}
          icon={<EmployeeManageIcon />}
          onClick={async () => {
            //await dispatch(fetchEmployeesByPage(1));
            navigate("/employee");
          }}
        >
          Employee Management
        </Button>
      </ConfigProvider>
    </>
  );
};

export const ButtonUpload: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorText: "#0091FF",
              colorBorder: "#0091FF",
              textHoverBg: "#0091FF",
            },
          },
          token: {
            colorPrimaryTextHover: "#0091FF",
          },
        }}
      >
        <Button {...props} icon={<UploadOutlined />} type="dashed">
          Upload
        </Button>
      </ConfigProvider>
    </>
  );
};

export const ButtonTabs: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorBgContainer: "#E1F0FF",
              colorText: "#0091FF",
              colorPrimaryBg: "#000",
            },
          },
        }}
      >
        <Button style={buttonTabStyle} size="large" {...props}></Button>
      </ConfigProvider>
    </>
  );
};
