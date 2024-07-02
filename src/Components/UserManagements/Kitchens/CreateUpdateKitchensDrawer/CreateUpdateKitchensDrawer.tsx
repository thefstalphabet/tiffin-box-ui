import React, { useEffect } from "react";
import * as Styles from "./CreateUpdateKitchensDrawerStyle";
import { Form, Button } from "antd";
import ReDrawer from "../../../../reusable-antd-components/ReDrawer";
import { capitalizeFirstLetter } from "../../../../Helper/Methods";
import { IComponentProps } from "../../../../Interfaces/Components/EditUpdateDrawer.interface";
import { kitchen } from "../../../../Apis/Kitchen";
import { useAppDispatch } from "../../../../Redux/Hooks";
import {
  addKitchen,
  updateKitchen,
} from "../../../../Redux/Slices/UserManagementSlices";
import { ReNotification } from "../../../../reusable-antd-components/ReNotification";
import dayjs from "dayjs";
import KitchenForm from "../KitchenForm/KitchenForm";
export default function CreateUpdateKitchensDrawer(props: IComponentProps) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { visibility, setVisibility, type, selectedRecordData } = props;

  async function handleFormSubmit(values: any) {
    values["openingTime"] = values?.availability[0];
    values["closingTime"] = values?.availability[1];
    delete values?.availability;
    if (type === "create") {
      const res = await kitchen.create(values);
      dispatch(addKitchen(res));
    } else {
      await kitchen.update(selectedRecordData?._id, values);
      dispatch(
        updateKitchen({ id: selectedRecordData?._id, newKitchenData: values })
      );
    }
    ReNotification({
      header: "User Management Say's",
      description: `Kitchen ${capitalizeFirstLetter(type)} Sucessfully`,
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
        availability: [
          dayjs(selectedRecordData?.openingTime),
          dayjs(selectedRecordData?.closingTime),
        ],
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
        <KitchenForm formInstance={form} handleFormSubmit={handleFormSubmit} />
      </ReDrawer>
    </Styles.Container>
  );
}
