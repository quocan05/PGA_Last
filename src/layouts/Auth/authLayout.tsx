import React from "react";
import "./authLayout.scss";
import { AuthLayoutProps } from "../../interfaces/layout";
import { AuthHeader } from "../Header/header";
import { Col, Row } from "antd";

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <Row justify={"center"}>
        <Col span={4}>{children}</Col>
      </Row>
    </>
  );
};
