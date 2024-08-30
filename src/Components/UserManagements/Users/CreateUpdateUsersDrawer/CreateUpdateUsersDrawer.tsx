import React, { useEffect } from "react";
import * as Styles from "./CreateUpdateUsersDrawerStyle";
import { Form, Button } from "antd";
import ReDrawer from "../../../../reusable-antd-components/ReDrawer";
import { capitalizeFirstLetter } from "../../../../Helper/Methods";
import { IComponentProps } from "../../../../Interfaces/Components/EditUpdateDrawer.interface";
import { useAppDispatch } from "../../../../Redux/Hooks";
import {
  addUser,
  updateUser,
} from "../../../../Redux/Slices/UserManagementSlices";
import { ReNotification } from "../../../../reusable-antd-components/ReNotification";
import { user } from "../../../../Apis/User";
import dayjs from "dayjs";
import UsersForm from "../UserForm/UsersForm";

export default function CreateUpdateUsersDrawer(props: IComponentProps) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { visibility, setVisibility, type, selectedRecordData } = props;

  async function handleFormSubmit(values: any) {
    values.status = values.status ? 1 : 0;
    if (type === "create") {
      const res = await user.create(values);
      dispatch(addUser(res));
    } else {
      await user.update(selectedRecordData?._id, values);
      dispatch(
        updateUser({ id: selectedRecordData?._id, newUserData: values })
      );
    }
    ReNotification({
      header: "User Management Say's",
      description: `User ${capitalizeFirstLetter(type)} Successfully`,
      duration: 2,
      placement: "topRight",
      type: "success",
    });
    setVisibility(false);
  }

  useEffect(() => {
    if (type === "update") {
      const newData = {
        ...selectedRecordData,
        dateOfBirth: dayjs(selectedRecordData?.dateOfBirth),
      };
      form.setFieldsValue(newData);
    } else {
      form.resetFields();
    }
  }, [type]);

  return (
    <Styles.Container>
      <ReDrawer
        title={`${capitalizeFirstLetter(type)} User`}
        visibility={visibility}
        onCancel={() => {
          setVisibility(false);
        }}
        width={600}
        closable={true}
        extraContent={
          <Button
            className="create-btn"
            type="primary"
            onClick={() => {
              form.submit();
            }}
          >
            {capitalizeFirstLetter(type)}
          </Button>
        }
      >
        <UsersForm formInstance={form} handleFormSubmit={handleFormSubmit} />
      </ReDrawer>
    </Styles.Container>
  );
}
