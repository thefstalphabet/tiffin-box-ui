import React, { useEffect, useState } from "react";
import ReCard from "../../reusable-antd-components/ReCard/ReCard";
import * as Styles from "./AddressStyle";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import ReDrawer from "../../reusable-antd-components/ReDrawer";
import { Button, Form } from "antd";
import { AddressForm } from "../../Components";
import { ReNotification } from "../../reusable-antd-components/ReNotification";
import { TDrawerType } from "../../Interfaces/Components/EditUpdateDrawer.interface";
import { addres } from "../../Apis/Address";
import { capitalizeFirstLetter } from "../../Helper/Methods";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import {
  addaddress,
  deleteaddress,
  setaddress,
  updateaddress,
} from "../../Redux/Slices/AddressSlices";
import { IReCardProps } from "../../reusable-antd-components/Interfaces/ReComponents.interface";
import { IaddressProps } from "../../Interfaces/Components/Address.interface";
export default function Address() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [drawerType, setDrawerType] = useState<TDrawerType>("create");
  const [addressLoading, setAddressLoading] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { address } = useAppSelector((store) => store.addressResponse);
  async function handleFormSubmit(values: any) {
    if (drawerType === "create") {
      const res = await addres.create(values);
      dispatch(addaddress(res));
    } else if (editingId) {
      await addres.update(editingId, values);
      dispatch(updateaddress({ id: editingId, addressData: values }));
    }
    ReNotification({
      header: "Address Say's",
      description: `Address ${capitalizeFirstLetter(drawerType)} Successfully`,
      duration: 2,
      placement: "topRight",
      type: "success",
    });
    setIsModalVisible(false);
    setEditingId(null);
    form.resetFields();
  }
  async function handleAddressDelete(id: string) {
    const res = await addres.delete(id);
    if (res) {
      dispatch(deleteaddress(id));
      return ReNotification({
        header: "User Management Say's",
        description: "Address Deleted Sucessfully",
        duration: 2,
        placement: "topRight",
        type: "success",
      });
    }
  }
  async function fetchAddressData() {
    setAddressLoading(true);
    const Address = await addres.findAll();
    dispatch(setaddress(Address));
    setAddressLoading(false);
  }
  useEffect(() => {
    fetchAddressData();
  }, []);
  return (
    <Styles.Container>
      <div className="card-grid">
        {address.map((item: IReCardProps) => {
          const { address, state, pinCode, city, _id } = item;
          return (
            <ReCard
              key={_id}
              city={city}
              address={address}
              pinCode={pinCode}
              state={state}
              actions={[
                <DeleteOutlined
                  key="delete"
                  onClick={() => {
                    if (_id) {
                      handleAddressDelete(_id);
                    }
                  }}
                />,
                <EditOutlined
                  key="edit"
                  onClick={() => {
                    setIsModalVisible(true);
                    setDrawerType("update");
                    setEditingId(_id || null);
                    form.setFieldsValue(item);
                  }}
                />,
              ]}
            />
          );
        })}
        <div className="plus-icon">
          <ReCard
            actions={[<PlusOutlined key="plus" />]}
            onClick={() => {
              setIsModalVisible(true);
              setDrawerType("create");
            }}
          />
        </div>
      </div>
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
          >
            {drawerType}
          </Button>
        }
      >
        <AddressForm formInstance={form} handleFormSubmit={handleFormSubmit} />
      </ReDrawer>
    </Styles.Container>
  );
}
