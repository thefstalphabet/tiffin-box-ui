import { useEffect, useState } from "react";
import * as Styles from "./AddressStyle";
import { Form, Popconfirm } from "antd";
import { ReNotification } from "../../reusable-antd-components/ReNotification";
import { TDrawerType } from "../../Interfaces/Components/EditUpdateDrawer.interface";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { deleteaddress, setaddress } from "../../Redux/Slices/AddressSlices";
import ReCard from "../../reusable-antd-components/ReCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ReEmpty from "../../reusable-antd-components/ReEmpty";
import CreateUpdateAddressDrawer from "../../Components/Profile/AddressForm/CreateUpdateAddressDrawer/CreateUpdateAddressDrawer";
import { user } from "../../Apis/User";

export default function Address() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { address } = useAppSelector((store) => store.address);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [drawerType, setDrawerType] = useState<TDrawerType>("create");
  const [currentlyEditingAddress, setCurrentlyEditingAddress] = useState<any>(
    {}
  );

  async function deleteAddress(id: string) {
    const res = await user.deleteAddress(id);
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
    const Address = await user.findAllAddress();
    dispatch(setaddress(Address));
  }

  const handleCardClicks = (type: "update" | "create", item?: any) => {
    setIsModalVisible(true);
    setDrawerType(type);
    if (type === "update") {
      setCurrentlyEditingAddress(item);
    }
  };

  useEffect(() => {
    fetchAddressData();
  }, []);

  return (
    <Styles.Container className={`${!address?.length && "make-it-center"}`}>
      {address?.length ? (
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
                      deleteAddress(item?._id);
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
          <ReCard
            className="plus-card card"
            onClick={() => {
              handleCardClicks("create");
            }}
          >
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
          </ReCard>
        </div>
      ) : (
        <ReEmpty
          description="You don't have address."
          onClick={() => {
            handleCardClicks("create");
          }}
        />
      )}
      <CreateUpdateAddressDrawer
        formInstance={form}
        visibility={isModalVisible}
        setVisibility={setIsModalVisible}
        type={drawerType}
        currentlyEditingAddress={currentlyEditingAddress}
      />
    </Styles.Container>
  );
}
