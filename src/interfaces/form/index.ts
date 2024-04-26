import { FormProps, UploadFile } from "antd";
import { IEmployeeData } from "../value";

export interface CustomFormProps extends FormProps {
  setError?: (state: boolean) => void;
  isOk?: boolean;
  mode?: string;
  idEmp?: any;
}

export interface CustomFormAuthProps extends FormProps {}

export interface CustomFormOthersProps extends FormProps {
  setError?: (state?: boolean) => void;
  isOk?: boolean;
  mode?: string;
  idEmp?: any;
  setFiles: (state: UploadFile[]) => void;
  setIsModified: (state: boolean) => void;
  setDeletedIds: (state: number[]) => void;
}
