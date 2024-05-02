import moment from "moment";
import { IEmployeeData } from "../interfaces/value";
import { convertDataSelect } from "./convertDataSelect";
import dayjs from "dayjs";

export const convertEmployeeData = (employeeData: IEmployeeData) => {
  return {
    key: employeeData.id,
    staff_id: employeeData.staff_id,
    name: employeeData.name,
    gender: employeeData.gender === 0 ? "Male" : "Female",
    marriage_code: employeeData.marriage_code,
    mother_name: employeeData.mother_name,
    contract_start_date: employeeData.contract_start_date,
    nc_id: employeeData.nc_id,
    department_name: employeeData.department_name,
    position_name: employeeData.position_name,
    ktp_no: employeeData.ktp_no,
    mobile_no: employeeData.mobile_no,
    tel_no: employeeData.tel_no,
    entitle_ot: employeeData.entitle_ot === 0 ? "No" : "Yes",
    resign_reason: employeeData.resign_reason,
    grade_name: employeeData.grade_name,
    old_staff_id: employeeData.old_staff_id,
  };
};

export const convertDataToUpdate = (data: any) => {
  return {
    ...data,
    dob: dayjs(data.dob),
    contract_start_date: dayjs(data.contract_start_date),
    hidden_on_payroll: data.hidden_on_payroll === "1" ? true : false,
    entitle_ot: data.entitle_ot === 1 ? true : false,
    meal_allowance_paid: data.meal_allowance_paid === 1 ? true : false,
    benefits: data.benefits.map((item: any) => convertDataSelect(item)),
  };
};

export const convertDataToAdd = (data: any) => {
  return {
    ...data,
    hidden_on_payroll: data.hidden_on_payroll === true ? "1" : "0",
    contract_start_date: moment(data.contract_start_date).format("YYYY-MM-DD"),
    dob: moment(data.dob).format("YYYY-MM-DD"),
  };
};
