import { NotificationInstance } from "antd/es/notification/interface";
import { notifySuccessLogin } from "../constants/value";
import { notification } from "antd";
import { NotificationType } from "../interfaces/value";

export const openNotification = (
  api: NotificationInstance,
  type: NotificationType,
  message: string,
  description: string
) => {
  api[type]({
    message: message,
    description: description,
  });
};
