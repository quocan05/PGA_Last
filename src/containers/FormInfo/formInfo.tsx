import "./formInfo.scss";
import { TabsEmployee } from "../../components/tabs/tabs";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  fetchBenefit,
  fetchDepartment,
  fetchGrade,
  fetchMarriageStatus,
  fetchPosition,
} from "../../redux/reducers/employeeReducer";
import { useNavigate } from "react-router";
import { getLocalStorage } from "../../services/localStorage";
export const FormInfoEmployee = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  dispatch(fetchDepartment());
  dispatch(fetchPosition());
  dispatch(fetchBenefit());
  dispatch(fetchGrade());
  dispatch(fetchMarriageStatus());
  useEffect(() => {
    if (!getLocalStorage("token")) {
      navigate("/auth/login");
    }
  }, []);
  return (
    <>
      <TabsEmployee />
    </>
  );
};
