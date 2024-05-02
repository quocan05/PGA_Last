import {
  Avatar,
  Button,
  ConfigProvider,
  Dropdown,
  Image,
  Layout,
  MenuProps,
  Space,
  Typography,
} from "antd";
import { HomeLayoutProps } from "../../interfaces/layout";
import "./homeLayout.scss";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import {
  buttonStyle,
  buttonUploadStyle,
  headerPageStyle,
  headerTextStyle,
  textHeadingStyle,
} from "../../constants/scss";
import { ButtonMenuSider } from "../../components/button/button";
import { UploadIcon } from "../../assets/icons/icons";
import { MainHeader } from "../Header/header";
import { Footer } from "../Footer/footer";
export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#000",
    backgroundColor: "#F8F9FA",
    padding: "30px 46px",
    overflow: "auto",
    width: "80%",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "60px",
    padding: 24,
    color: "#000",
    backgroundColor: "#fff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#000",
    backgroundColor: "#fff",
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    height: "100vh",
  };
  return (
    <Layout style={layoutStyle}>
      <div className="wrapper-shadow">
        <MainHeader />
      </div>
      <Layout>
        <Sider width="329px" style={siderStyle}>
          <Typography style={textHeadingStyle}>General</Typography>
          <ButtonMenuSider />
        </Sider>
        <Content style={contentStyle}>
          <div style={{ width: "85%" }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};
