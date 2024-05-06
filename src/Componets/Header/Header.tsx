import { Button } from "antd";
import { RightOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { IProps } from "../../Interfaces/Components/Header.interface";

export default function Header(props: IProps) {
  const { setSideMenuVisibility } = props;
  return (
    <div className="flex justify-between items-center bg-white text-white p-4 px-20">
      <div className="items-center">
        <h1 className="text-xl font-bold text-black">TiffinBox</h1>
      </div>
      <div className="flex items-center space-x-4">
        <h1 className="mr-4 text-black font-bold text-xl">Log In</h1>
        <Button
          className=" bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none cursor-pointer  text-center"
          type="primary"
          icon={<RightOutlined />}
        >
          Sign up
        </Button>
        <button
          onClick={() => {
            setSideMenuVisibility(true);
          }}
        >
          <UnorderedListOutlined className="text-xl text-black" />
        </button>
      </div>
    </div>
  );
}
