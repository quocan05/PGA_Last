import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";
import { UploadFile } from "antd";
import { ReactNode } from "react";

export interface DataTypeColumnFile extends UploadFile {
  key: React.Key;
  no: string;
  name: string;
  createdAt: string;
  ok: string;
}
//No	Contract Namse	Sign Date	Action

export interface PropsMenu {
  setSelectedKey: (key: string) => void;
}

export interface DataFileDisplayTable {
  key: React.Key;
  no: number;
  name: string;
  createdAt: string;
}

export interface ILoginParams {
  email: string;
  password: string;
  company_id: number;
}

export interface IEmployeeData {
  key?: React.Key;
  id?: number;
  old_staff_id?: string;
  staff_id?: string;
  name?: string;
  gender?: number;
  department_id?: number;
  company_id?: number;
  marriage_id?: number;
  position_id?: null | string;
  type?: string;
  mother_name?: string;
  dob?: string | Date | any;
  pob?: string;
  ktp_no?: string;
  nc_id?: string;
  home_address_1?: string;
  home_address_2?: string;
  mobile_no?: string;
  tel_no?: null | string;
  bank_account_no?: string;
  bank_name?: string;
  card_number?: null | string;
  family_card_number?: null | string;
  health_insurance_no?: string;
  safety_insurance_no?: string;
  education_background?: string;
  emergency_contract?: string;
  emergency_relationship?: string;
  emergency_name?: string;
  basic_salary?: string;
  audit_salary?: string;
  health_insurance?: string;
  safety_insurance?: string;
  safety_insurance_audit?: string;
  health_insurance_audit?: string;
  meal_allowance?: string;
  entitle_ot?: number;
  meal_allowance_paid?: number;
  operational_allowance_paid?: number;
  attendance_allowance_paid?: number;
  minimum_salary_used?: string;
  hidden_on_payroll?: string | boolean;
  contract_start_date?: Date | string | any;
  resign_reason?: null;
  resign_effective_date?: null;
  resign_date?: null;
  shift?: string;
  grade_id?: string | null | number;
  remark?: string | null;
  created_at?: string;
  department_name?: string;
  marriage_code?: number;
  position_name?: null;
  grade_prefix?: null;
  grade_name?: null;
  benefits?: [];
  contracts?: [];
  users?: [];
  allowed_to_view_salary?: number;
}

export interface IInitData {
  listData: IEmployeeData[];
  info: IEmployeeData;
  isLoading: boolean;
  isError: boolean;
  current: number | null;
  pageSize: number;
  total: number;
  position: ICompanyItem[];
  department: ICompanyItem[];
  marriage: ICompanyItem[];
  benefits: ICompanyItem[];
  grade: ICompanyItem[];
}

export type NotificationType = "success" | "info" | "warning" | "error";

export interface ICompanyItem {
  label: string;
  value: string;
}

export interface IMultipleIds {
  record_ids: React.Key[];
}

export interface IResetPasswordParam {
  company_id: string;
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}

export interface SearchParams {
  search: string | null;
  page: string;
}
