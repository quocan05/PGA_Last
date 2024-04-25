import axios from "axios";
import { ILoginParams, IResetPasswordParam } from "../../interfaces/value";
import { API_PGA } from "../../constants/value";
import { AuthHeader } from "../../configs/APIConfigs";

export const LoginAPI = async (param: ILoginParams) => {
  const response = await axios.post(API_PGA.LOGIN, param);
  if (response) {
    return response.data;
  }
};

export const ChangePassword = async (param: {
  password: string;
  password_confirmation: string;
}) => {
  const response = await axios.post(API_PGA.CHANGE_PASSWORD, param, {
    headers: AuthHeader,
  });
  if (response) {
    return response.data;
  }
};

export const LogouAPI = async () => {
  const response = await axios.post(API_PGA.LOGOUT);
  return response.data;
};

export const ForgotpasswordAPI = async (email: string) => {
  const response = await axios.post(API_PGA.FORGOT_PASSWORD, email);
  return response.data;
};

export const ResetPasswordAPI = async (param :IResetPasswordParam) => {
  const response = await axios.post(API_PGA.RESET_PASSWORD, param);
  return response.data;
}