import { UploadFile } from "antd";
import { IEmployeeData } from "../value";

export interface TabsEmployeeProps {
  setCanAddNew: (value: boolean) => void;
}

export interface HeaderAddNewProps {
  canAdd: boolean;
  dataAddNew: IEmployeeData;
  id: number;
  setId: (id: number) => void;
  files: UploadFile[];
  // finish: (data: any) => void;
}

export interface HeaderUpdateProps {
  canUpdate?: boolean;
  dataUpdate: IEmployeeData;
  id?: string;
  files: UploadFile[];
  isModified: boolean;
  deletedIds: number[];

  // finish: (data: any) => void;
}
