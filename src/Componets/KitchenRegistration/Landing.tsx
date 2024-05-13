import { kitchenImg } from "../../Assets";
import { Button } from "antd";
export default function Landing() {
  return (
    <div
      className="subContainer items-center justify-center  grid grid-cols-1 sm:grid-cols-2 gap-2 sm:justify-center sm:items-center"
      style={{ height: "89.5vh" }}
    >
      <div className="grid gap-6 justify-center ">
        <div className="sm:flex sm:flex-col">
          <h1 className="h1 font-semibold text-center">
            Join Our Kitchen Network
          </h1>
          <div className="flex justify-center sm:justify-start">
            <p>Deliver Delicious Meals to Busy Customers.</p>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start">
          <Button className="w-40 " type="primary" size="large">
            Start Today
          </Button>
        </div>
      </div>
        <img
          className="w-50 md:w-25 h-4/5"
          // style={{ height: "80vh" }}
          src={kitchenImg}
          alt="Banner"
        />
    </div>
  );
}
