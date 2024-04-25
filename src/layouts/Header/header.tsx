import {
  Avatar,
  Button,
  ConfigProvider,
  Dropdown,
  Flex,
  Image,
  MenuProps,
  Popover,
  Select,
  Space,
  Typography,
} from "antd";
import "./header.scss";
import { Header } from "antd/es/layout/layout";
import { headerPageStyle, headerTextStyle } from "../../constants/scss";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/images/Rectangle 4.png";
import { deleteLocalStorageItem } from "../../services/localStorage";
import { useNavigate } from "react-router";
import { useState } from "react";
import { ModalConfirm } from "../../components/modal/modal";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <>
        <Typography.Title level={3}>Username: admin</Typography.Title>
        <Typography>Staff ID: </Typography>
      </>
    ),
  },

  {
    key: "2",
    label: (
      <a type="primary" style={{ color: "white" }}>
        Log out
      </a>
    ),
  },
];
export const AuthHeader = () => {
  return (
    <Flex vertical justify="center" align="center">
      <Image
        className="logo-img"
        src="http://web-qa.hrm.div4.pgtest.co/static/media/HR_Logo.7c93eebe8886301b470d6d7131b23a95.svg"
        preview={false}
        width={100}
      />
      <Typography.Title level={3}>HR Management System</Typography.Title>
    </Flex>
  );
};

export const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOk = () => {
    deleteLocalStorageItem("token");
    setTimeout(() => {
      setOpen(false);
    }, 1000);
    navigate("/auth/login");
  };
  const popoverStyle: React.CSSProperties = {
    minWidth: "320px",
    background: "#000",
  };
  const navigate = useNavigate();

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Header style={headerPageStyle}>
        <Space>
          <Image src={logo} preview={false} />
          <Typography style={headerTextStyle}>HR Management System</Typography>
        </Space>
        <div
          style={{ display: "flex", alignItems: "center", height: 60, gap: 10 }}
        >
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorText: "#0091FF",
                  colorBorder: "#0091FF",
                },
              },
            }}
          >
            <Button type="dashed" icon={<UploadOutlined />} size="middle">
              Import employee
            </Button>
          </ConfigProvider>
          <Select
            style={{ width: 98, height: 32 }}
            options={[
              {
                label: "EN",
                value: "eng",
              },
              {
                label: "BA",
                value: "ba",
              },
            ]}
            defaultValue={"eng"}
          />
          <Popover
            placement="bottomRight"
            trigger={["click"]}
            arrow={false}
            content={
              <div style={{ width: 272, height: 209, padding: "8px 12px" }}>
                <Space
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar icon={<UserOutlined />} />
                  <Typography
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                    }}
                  >
                    Username
                  </Typography>
                </Space>
                <Typography
                  style={{
                    fontWeight: 400,
                    fontSize: 16,
                    padding: "20px 0px 20px 0px",
                  }}
                >
                  Staff ID:{" "}
                </Typography>
                <Button
                  size="large"
                  type="primary"
                  style={{ width: "100%", marginTop: 10 }}
                  onClick={() => setOpen(true)}
                >
                  Log out
                </Button>
                <br />
                <div style={{ margin: "25px 0px 10px 0px" }}>
                  <a onClick={() => navigate("settings/change-password")}>
                    Reset password
                  </a>
                </div>
              </div>
            }
          >
            <Avatar icon={<UserOutlined />} size={"default"}></Avatar>
          </Popover>
        </div>
        <ModalConfirm
          open={open}
          message="Do you wish to sign out?"
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </Header>
    </>
  );
};
