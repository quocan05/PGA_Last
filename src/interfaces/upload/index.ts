import { UploadFile, UploadProps } from "antd";
import { DataFileDisplayTable } from "../value";

export interface CustomUploadProps extends UploadProps {
  setListFile: (fileList: DataFileDisplayTable[]) => void;
  listFile: DataFileDisplayTable[];
}

export interface IUploadParams {
  employee_id: any;
  documents: UploadFile[];
  deleted_ids?: number[];
}

export interface IInitUpload {
  listFile: any[];
}

export interface UploadFileCustom extends UploadFile {
  id: number;
}
