import React from "react";
import landingImg from "../../Assets/Images/landingImg.jpg"; 
import { Button } from "antd";
export default function Landing() {
  return (
    <div className="flex h-screen">
      <div
        className="bg-cover bg-center flex justify-center w-full"
        style={{ backgroundImage: `url(${landingImg})`, height: "100%" }}
      >
        <div className="flex items-center">
          <div className="text-left  w-3/6">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mx-10 font-bold">
            Join Our Kitchen Network: Deliver Delicious Meals to Busy Customers
            </h2>
            <Button className="mx-10 my-5" type="primary" size="large">Registration</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
