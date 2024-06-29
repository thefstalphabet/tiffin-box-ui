import React, { useEffect } from "react";
import * as Styles from "./CreateUpdateAddressStyle";
import ReDrawer from "../../../../reusable-antd-components/ReDrawer";
import { Button, Form } from "antd";
import AddressForm from "../AddressForm";
import { IaddressProps } from "../../../../Interfaces/Components/CreateUpdateAddressDrawer";
import { addres } from "../../../../Apis/Address";
import {
  addaddress,
  updateaddress,
} from "../../../../Redux/Slices/AddressSlices";
import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks";
import { ReNotification } from "../../../../reusable-antd-components/ReNotification";
import { capitalizeFirstLetter } from "../../../../Helper/Methods";

export default function CreateUpdateAddressDrawer(props: IaddressProps) {
  const {
    type,
    isModalVisible,
    setIsModalVisible,
    currentlyEditingAddress,
    createUpdateFormSubmitLoading,
    setCreateUpdateFormSubmitLoading,
  } = props;
  const { data } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  async function handleFormSubmit(values: any) {
    setCreateUpdateFormSubmitLoading(true);

    if (type === "create") {
      const res = await addres.create({ ...values, user: data?._id });
      dispatch(addaddress(res));
    } else {
      await addres.update(currentlyEditingAddress?._id, values);
      dispatch(
        updateaddress({ id: currentlyEditingAddress?._id, addressData: values })
      );
    }

    ReNotification({
      header: "Address Say's",
      description: `Address ${capitalizeFirstLetter(type)} Successfully`,
      duration: 2,
      placement: "topRight",
      type: "success",
    });

    setIsModalVisible(false);
    form.resetFields();
    setCreateUpdateFormSubmitLoading(false);
  }
  useEffect(() => {
    if (currentlyEditingAddress && type === "update") {
      form.setFieldsValue(currentlyEditingAddress);
    }
  }, [currentlyEditingAddress, form, type]);

  return (
    <Styles.Container>
      <ReDrawer
        title={<h3>Edit Address</h3>}
        visibility={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        placement="right"
        closable
        width={600}
        extraContent={
          <Button
            className="create-btn"
            type="primary"
            onClick={() => {
              form.submit();
            }}
            loading={createUpdateFormSubmitLoading}
          >
            {capitalizeFirstLetter(type)}
          </Button>
        }
      >
        <AddressForm formInstance={form} handleFormSubmit={handleFormSubmit} />
      </ReDrawer>
    </Styles.Container>
  );
}
