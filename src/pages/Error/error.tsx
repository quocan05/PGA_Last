import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="500"
      title="Error"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={() => navigate("/login")}>
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorPage;
