import { Button } from "antd";
import { UnorderedListOutlined, CloseOutlined } from "@ant-design/icons";
import { IProps } from "../../Interfaces/Components/Header.interface";
export default function Header(props: IProps) {
  const { setSideMenuVisibility, visibilitymenu } = props;
  return (
    <div className="flex justify-between items-center bg-white text-white p-4 px-20 border-b-2">
      <div className="items-center">
        <h1 className="text-xl font-bold text-black">TiffinBox</h1>
      </div>
      <div className="items-center  space-x-8 md:flex hidden">
        <li className="text-black font-bold text-sm text-end list-none">
          Home
        </li>
        <li className="text-black font-bold text-sm text-end list-none">
          About
        </li>
        <li className="text-black font-bold text-sm text-end list-none">
          Contact us
        </li>
      </div>
      <div className="flex items-center space-x-4">
        <h1 className="mr-4 text-black font-bold text-xl">Log In</h1>
        <Button
          className=" bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none cursor-pointer  text-center  md:flex hidden"
          type="primary"
        >
          Sign up
        </Button>
        <button
          onClick={() => {
            setSideMenuVisibility(!visibilitymenu);
          }}
          className="flex md:hidden"
        >
          {visibilitymenu ? (
            <CloseOutlined className="text-xl text-black" />
          ) : (
            <UnorderedListOutlined className="text-xl text-black" />
          )}
        </button>
      </div>
    </div>
  );
}
