import dayjs from "dayjs";
import moment from "moment";

export const formatDate = (date: Date): string => {
  return moment(date).format("YYYY-DD-MM");
};
export const formatDateCreatedAt = (date: string): string => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const formatDateUploadedAt = (date: number): string => {
  return moment(date).format("YYYY-MM-DD");
};

export const formatDateToAddNew = (date?: Date): string => {
  return dayjs(date).format("YYYY-MM-DD");
};
