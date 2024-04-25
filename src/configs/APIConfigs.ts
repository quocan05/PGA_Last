import { getLocalStorage } from "../services/localStorage";

export const AuthHeader = {
  Authorization: `Bearer ${getLocalStorage("token")}`,
};

export const AuthHeaderUpload = {
  Authorization: `Bearer ${getLocalStorage("token")}`,
  "Content-Type": "multipart/form-data",
};
