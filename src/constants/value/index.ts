import { TableColumnsType } from "antd";
import { IEmployeeData } from "../../interfaces/value";

export enum KEY_NAV {
  EMPLOYEE_INFORMATION = "EMPLOYEE_INFORMATION",
  CONTRACT_INFORMATION = "ContractInformation",
  EMPLOYMENT_DETAILS = "EmploymentDetails",
  SALARY_WAGES = "Salary&Wages",
  OTHERS = "Others",
  ANNUAL_LEAVE = "AnnualLeave",
}

export enum API_PGA {
  LOGIN = "https://api-training.hrm.div4.pgtest.co/api/v1/login",
  LOGOUT = "https://api-training.hrm.div4.pgtest.co/api/v1/logout",
  FORGOT_PASSWORD = "https://api.hrm.div4.pgtest.co/api/v1/forgot-password",
  RESET_PASSWORD = "https://api.hrm.div4.pgtest.co/api/v1/reset-password",
  EMPLOYEE = "https://api-training.hrm.div4.pgtest.co/api/v1/employee",
  EMPLOYEE_DEL = "https://api-training.hrm.div4.pgtest.co/api/v1/employee/multiple-delete",
  CHANGE_PASSWORD = "https://api.hrm.div4.pgtest.co/api/v1/change-password",
  COMPANY = "https://api-training.hrm.div4.pgtest.co/api/v1/company",
  MARRIAGE = "https://api-training.hrm.div4.pgtest.co/api/v1/marriage",
  POSITION = "https://api-training.hrm.div4.pgtest.co/api/v1/position",
  DEPARTMENT = "https://api-training.hrm.div4.pgtest.co/api/v1/department",
  GRADE = "https://api-training.hrm.div4.pgtest.co/api/v1/grade",
  BENEFIT = "https://api-training.hrm.div4.pgtest.co/api/v1/benefit",
  UPLOAD = "https://api-training.hrm.div4.pgtest.co/api/v1/employee-document/upload",
}

export const columnsInfoEmployee: TableColumnsType<IEmployeeData> = [
  {
    title: "NIK",
    dataIndex: "staff_id",
    width: 95,
    key: "staff_id",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
    key: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: 70,
    key: "gender",
  },
  {
    title: "Marriage Status",
    dataIndex: "marriage_code",
    width: 130,
    key: "marriage_code",
  },
  {
    title: "Mother Name",
    dataIndex: "mother_name",
    width: 150,
    key: "mother_name",
  },
  {
    title: "Tax ID",
    dataIndex: "nc_id",
    width: 170,
    key: "nc_id",
  },
  {
    title: "Date Start",
    dataIndex: "created_at",
    width: 90,
    key: "created_at",
  },
  {
    title: "Department",
    dataIndex: "department_name",
    width: 150,
    key: "department_name",
  },
  {
    title: "Position",
    dataIndex: "position_name",
    width: 150,
    key: "position_name",
  },
  {
    title: "KTP No.",
    dataIndex: "ktp_no",
    width: 130,
    key: "position_name",
  },
  {
    title: "Mobile No.",
    dataIndex: "mobile_no",
    width: 100,
    key: "mobile_no",
  },
  {
    title: "Tel No.",
    dataIndex: "tel_no",
    width: 85,
    key: "tel_no",
  },
  {
    title: "Entitled OT",
    dataIndex: "entitle_ot",
    width: 100,
    key: "entitle_ot",
  },
  {
    title: "Resigned",
    dataIndex: "resign_reason",
    width: 120,
    key: "resign_reason",
  },
  {
    title: "Grading",
    dataIndex: "grade_name",
    width: 80,
    key: "grade_name",
  },

  {
    title: "Old NIK",
    dataIndex: "old_staff_id",
    width: 95,
    key: "old_staff_id",
  },
];

export enum ACTION_REDUX {
  GET_ALL_EMPLOYEE = "getallemployee",
  GET_EMPLOYEE_BY_PAGE = "getemployyebypage",
  GET_DEPARTMENT = "getdepartment",
  GET_POSITION = "getposition",
  GET_MARRIAGE = "getmarriage",
  GET_GRADE = "getgrade",
  GET_BENEFIT = "getbenefit",
  GET_EMPLOYEE_BY_PAGE_SEARCH = "getemployyebypagesearch",
}

export const notifySuccessLogin = {
  message: "Success",
  description: "Hang on awhile to go to home!",
};
