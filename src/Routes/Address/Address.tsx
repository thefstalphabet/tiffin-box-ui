import React, { useEffect, useState } from "react";
import * as Styles from "./AddressStyle";
import ReDrawer from "../../reusable-antd-components/ReDrawer";
import { Button, Form, Popconfirm } from "antd";
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
import ReCard from "../../reusable-antd-components/ReCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
export default function Address() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { address } = useAppSelector((store) => store.address);
  const { data } = useAppSelector((store) => store.user);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [drawerType, setDrawerType] = useState<TDrawerType>("create");
  const [addressLoading, setAddressLoading] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  async function handleFormSubmit(values: any) {
    if (drawerType === "create") {
      const res = await addres.create({ ...values, user: data?._id });
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
  async function deleteAddress(id: string) {
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
    const Address = await addres.findAll({ user: data?._id });
    dispatch(setaddress(Address));
    setAddressLoading(false);
  }

  const handleCardClicks = (
    type: "update" | "create" | "delete",
    extra?: any
  ) => {
    if (type !== "delete") {
      setIsModalVisible(true);
      setDrawerType(type);
    }
    switch (type) {
      case "create":
        setEditingId(null);
        form.resetFields();
        break;
      case "update":
        setEditingId(extra?._id || null);
        form.setFieldsValue(extra);
        break;
      case "delete":
        deleteAddress(extra?._id);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchAddressData();
  }, []);

  return (
    <Styles.Container>
      <div className="cards">
        {address?.map((item: any) => {
          const { address, state, pinCode, city } = item;
          return (
            <ReCard
              className="card"
              actions={[
                <Popconfirm
                  title="Delete the Address"
                  description="Are you sure to delete this Address?"
                  onConfirm={() => {
                    handleCardClicks("delete", item);
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <FontAwesomeIcon key="delete" icon={faTrashCan} />
                </Popconfirm>,
                <FontAwesomeIcon
                  key="edit"
                  onClick={() => {
                    handleCardClicks("update", item);
                  }}
                  icon={faPenToSquare}
                />,
              ]}
            >
              <h4>{city}</h4>
              <p>{state}</p>
              <p>{address}</p>
              <p>{pinCode}</p>
            </ReCard>
          );
        })}
        <div className="plus-icon">
          <ReCard
            className="plus-card card"
            onClick={() => {
              handleCardClicks("create");
            }}
          >
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
          </ReCard>
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
