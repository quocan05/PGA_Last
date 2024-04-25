import axios from "axios";
import { API_PGA } from "../../constants/value";
import { AuthHeaderUpload } from "../../configs/APIConfigs";
import { IUploadParams } from "../../interfaces/upload";

export const UploadDocuments = async (param: IUploadParams) => {
  const res = await axios.post(API_PGA.UPLOAD, param, {
    headers: AuthHeaderUpload,
  });
  return res.data;
};
