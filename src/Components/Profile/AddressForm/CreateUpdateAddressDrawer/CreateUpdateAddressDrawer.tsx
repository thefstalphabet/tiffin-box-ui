import React, { useEffect, useState } from "react";
import * as Styles from "./CreateUpdateAddressStyle";
import ReDrawer from "../../../../reusable-antd-components/ReDrawer";
import { Button } from "antd";
import AddressForm from "../AddressForm";
import { IaddressProps } from "../../../../Interfaces/Components/CreateUpdateAddressDrawer";
import {
  addaddress,
  updateaddress,
} from "../../../../Redux/Slices/AddressSlices";
import { useAppDispatch } from "../../../../Redux/Hooks";
import { ReNotification } from "../../../../reusable-antd-components/ReNotification";
import { capitalizeFirstLetter } from "../../../../Helper/Methods";
import { user } from "../../../../Apis/User";

export default function CreateUpdateAddressDrawer(props: IaddressProps) {
  const { type, visibility, setVisibility, currentlyEditingAddress, formInstance } = props;
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  async function handleFormSubmit(values: any) {
    setLoading(true);
    if (type === "create") {
      const res = await user.createAddress(values);
      dispatch(addaddress(res));
    } else {
      await user.updateAddress(currentlyEditingAddress?._id, values);
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
    setVisibility(false);
    formInstance.resetFields();
    setLoading(false);
  }

  useEffect(() => {
    if (currentlyEditingAddress && type === "update") {
      formInstance.setFieldsValue(currentlyEditingAddress);
    } else {
      formInstance.resetFields()
    }
  }, [currentlyEditingAddress, formInstance, type]);

  return (
    <Styles.Container>
      <ReDrawer
        title={<h3>Edit Address</h3>}
        visibility={visibility}
        onCancel={() => {
          setVisibility(false);
        }}
        placement="right"
        closable
        width={600}
        extraContent={
          <Button
            className="create-btn"
            type="primary"
            onClick={() => {
              formInstance.submit();
            }}
            loading={loading}
          >
            {capitalizeFirstLetter(type)}
          </Button>
        }
      >
        <AddressForm formInstance={formInstance} handleFormSubmit={handleFormSubmit} />
      </ReDrawer>
    </Styles.Container>
  );
}
