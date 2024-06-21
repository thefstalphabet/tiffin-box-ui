import * as Styles from "./EditProfileStyle";
import React, { useState } from "react";
import { Button, Form } from "antd";
import ProfileOption from "./ProfileOption/ProfileOption";
import ReModal from "../../reusable-antd-components/ReModal";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import UsersForm from "../UserManagements/Users/UserForm/UsersForm";
import { IComponentProps } from "../../Interfaces/Components/EditUpdateDrawer.interface";
import { user } from "../../Apis/User";
import { ReNotification } from "../../reusable-antd-components/ReNotification";
import { capitalizeFirstLetter } from "../../Helper/Methods";
import { addUser, updateUser } from "../../Redux/Slices/UserManagementSlices";
export default function EditProfile(props: IComponentProps) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userData = useAppSelector((store) => store.user);
  const handleEditProfileClick = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  async function handleFormSubmit(values: any) {}

  return (
    <Styles.Container>
      <div className="header">
        <div>
          <h3>{userData?.data?.name}</h3>
          <div className="email_container">
            <p>{userData?.data?.email}</p>
          </div>
        </div>
        <div className="primary-button-container">
          <Button
            type="primary"
            className="primary-button"
            onClick={handleEditProfileClick}
          >
            Edit profile
          </Button>
        </div>
      </div>
      <ProfileOption />
      <ReModal
        title="Edit Profile"
        visibility={isModalVisible}
        onOkay={handleModalOk}
        onCancel={handleModalCancel}
        onOkayBtnTitle="Save"
        footer={null}
      >
        <div className="update-btn"></div>
        <UsersForm formInstance={form} handleFormSubmit={handleFormSubmit} />
        <Button
          type="primary"
          onClick={() => {
            form.submit();
          }}
        >
          Update
        </Button>
      </ReModal>
    </Styles.Container>
  );
}
