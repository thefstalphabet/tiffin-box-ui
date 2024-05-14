import { kitchenImg } from "../../Assets";
import { Button } from "antd";
export default function Landing() {
  return (
    <div className="subContainer my-10 h-89.5vh grid grid-cols-1 justify-items-center gap-10 items-center md:grid-cols-2 lg:gap-0">
      <div className="grid gap-6 justify-items-center md:justify-items-start text-center lg:text-left md:text-left">
        <div>
          <h1 className="h1 font-semibold">Join Our Kitchen Network</h1>
          <h3>Deliver Delicious Meals to Busy Customers.</h3>
        </div>
        <Button type="primary" size="large">
          Start Today
        </Button>
      </div>
      <div className="grid justify-center items-center">
        <img style={{ width: "35vw" }} src={kitchenImg} alt="Banner" />
      </div>
    </div>
  );
}
