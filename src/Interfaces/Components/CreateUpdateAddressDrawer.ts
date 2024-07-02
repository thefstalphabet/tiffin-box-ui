import { FormInstance } from "antd";

export interface IaddressProps {
  formInstance: FormInstance
  visibility: boolean;
  setVisibility: Function;
  currentlyEditingAddress: any;
  type: TDrawerType;
}
export type TDrawerType = "create" | "update";
