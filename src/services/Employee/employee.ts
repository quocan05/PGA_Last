import axios from "axios";
import { API_PGA } from "../../constants/value";
import { AuthHeader } from "../../configs/APIConfigs";
import React from "react";
import { convertDataSelect } from "../../utils/convertDataSelect";
import {
  IEmployeeData,
  IMultipleIds,
  SearchParams,
} from "../../interfaces/value";

export const deleteMultipleEmployee = async (ids: IMultipleIds) => {
  return await axios.delete(API_PGA.EMPLOYEE_DEL, {
    headers: AuthHeader,
    data: ids,
  });
};

export const getCompany = async () => {
  try {
    const res = await axios.get(API_PGA.COMPANY);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMarriageStatus = async () => {
  try {
    const res = await axios.get(API_PGA.MARRIAGE, { headers: AuthHeader });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getPosition = async () => {
  try {
    const res = await axios.get(API_PGA.POSITION, { headers: AuthHeader });
    return res.data;
  } catch (error) {
    return error;
  }
};
export const getDepartment = async () => {
  try {
    const res = await axios.get(API_PGA.DEPARTMENT, { headers: AuthHeader });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getGrade = async () => {
  try {
    const res = await axios.get(API_PGA.GRADE, { headers: AuthHeader });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getBenefit = async () => {
  try {
    const res = await axios.get(API_PGA.BENEFIT, { headers: AuthHeader });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const addNewEmployee = async (param: IEmployeeData) => {
  const res = await axios.post(API_PGA.EMPLOYEE, param, {
    headers: AuthHeader,
  });
  return res.data;
};

export const getInfoEmployeeByID = async (id: string) => {
  const res = await axios.get(`${API_PGA.EMPLOYEE}/${id}`, {
    headers: AuthHeader,
  });
  return res.data;
};

export const searchEmployee = async (param: SearchParams) => {
  const res = await axios.get(API_PGA.EMPLOYEE, {
    params: param,
    headers: AuthHeader,
  });
  return res.data;
};
export const updateEmployeeByID = async (
  id?: string,
  param?: IEmployeeData
) => {
  const res = await axios.put(`${API_PGA.EMPLOYEE}/${id}`, param, {
    headers: AuthHeader,
  });
  return res;
};
