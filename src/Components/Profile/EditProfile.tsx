import * as Styles from "./EditProfileStyle";
import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import ProfileOption from "./ProfileOption/ProfileOption";
import ReModal from "../../reusable-antd-components/ReModal";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import UsersForm from "../UserManagements/Users/UserForm/UsersForm";
import dayjs from "dayjs";
import { user } from "../../Apis/User";
import { ReNotification } from "../../reusable-antd-components/ReNotification";
import { updateData } from "../../Redux/Slices/UserSlices";
import { auth } from "../../Apis/Auth";
export default function EditProfile() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  async function handleFormSubmit(values: any) {
    await user.update(data?._id, values);
    dispatch(updateData(values));
    auth.updateSessionStorage({ _id: data?._id, ...values });
    ReNotification({
      header: "Profile Say's",
      description: `User Updated Successfully`,
      duration: 2,
      placement: "topRight",
      type: "success",
    });
    setIsModalVisible(false);
  }

  useEffect(() => {
    if (Object.keys(data).length && isModalVisible) {
      const newData = {
        ...data,
        dateOfBirth: dayjs(data?.dateOfBirth),
      };
      form.setFieldsValue(newData);
    }
  }, [isModalVisible]);

  return (
    <Styles.Container>
      <div className="header">
        <div>
          <h3>{data?.name}</h3>
          <p>{data?.email}</p>
        </div>
        <Button
          type="primary"
          className="primary-button"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Edit profile
        </Button>
      </div>
      <ProfileOption />
      <ReModal
        title={<h3>Edit Profile</h3>}
        onOkayBtnTitle="Update"
        visibility={isModalVisible}
        width="800px"
        onOkay={() => {
          form.submit();
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <UsersForm
          formInstance={form}
          handleFormSubmit={handleFormSubmit}
        />
      </ReModal>
    </Styles.Container>
  );
}
