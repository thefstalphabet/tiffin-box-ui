import { Button } from "antd";
import { IProps } from "../../Interfaces/Components/Header.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { items } from "../../Configs/MenuItems";
import { Link } from "react-router-dom";
export default function Header(props: IProps) {
  const { setSideMenuVisibility, visibilitymenu } = props;
  return (
    <div className="flex justify-between items-center bg-white text-white p-4 px-20 border-b-2">
      <div className="items-center flex">
        <h1 className="text-xl font-bold text-black">TiffinBox</h1>
        <div className="items-center  space-x-8 md:flex hidden mx-10">
          <li className=" text-sm text-end list-none font-semibold text-stone-400">
            <Link to="/about">About</Link>
          </li>
          <li className="text-stone-400 font-semibold text-sm text-end list-none ">
            Contact Us
          </li>
          <li className="text-stone-400 font-semibold text-sm text-end list-none">
            Profile
          </li>
          {/* {items.map((data) => (
            <div key={data?.key}>
              <h1 className="text-black font-semibold text-sm text-end list-none">
                {data?.label}
              </h1>
            </div>
          ))} */}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button type="text" block className="text-blue-500 font-bold">
          Log In
        </Button>
        <Button
          className="text-white rounded focus:outline-none cursor-pointer  text-center  md:flex hidden"
          type="primary"
        >
          Sign up
        </Button>
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-black flex md:hidden "
          onClick={() => {
            setSideMenuVisibility(true);
          }}
        />
      </div>
    </div>
  );
}
