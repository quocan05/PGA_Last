import { TagProps } from "antd";
import { ReactNode } from "react";

export interface CustomTagProps extends TagProps {
  label: string;
  type: string;
}
