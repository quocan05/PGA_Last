import { Header } from "antd/es/layout/layout";
import { HomeLayout } from "../../layouts/Home/homeLayout";
import Search from "antd/es/transfer/search";
import { Input } from "antd";
import { HeaderManage } from "../../containers/Headers/headers";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { getLocalStorage } from "../../services/localStorage";
import { ToastContainer } from "react-toastify";
import { ToastComponent } from "../../components/Toast/toast";

export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getLocalStorage("token")) {
      navigate("/auth/login");
    }
  });
  return (
    <HomeLayout>
      <Outlet />
      <ToastComponent />
    </HomeLayout>
  );
};
