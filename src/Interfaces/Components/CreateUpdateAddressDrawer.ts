export interface IaddressProps {
  isModalVisible: boolean;
  setIsModalVisible: Function;
  currentlyEditingAddress: any;
  type: TDrawerType;
  createUpdateFormSubmitLoading: boolean;
  setCreateUpdateFormSubmitLoading: Function;
}
export type TDrawerType = "create" | "update";
