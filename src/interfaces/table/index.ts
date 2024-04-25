import { TableProps, UploadFile, UploadProps } from "antd";
import { DataFileDisplayTable } from "../value";

export interface CustomTableProps extends TableProps {
  listFile: any[];
  idEmp: string;
  setFiles: (state: UploadFile[]) => void;
  setIsModified: (state: boolean) => void;
  setDeletedIds: (state: number[]) => void;
}
