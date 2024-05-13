import { kitchenImg } from "../../Assets";
import { Button } from "antd";
export default function Landing() {
  return (
    <div
      className="subContainer my-10 h-89.5vh grid grid-cols-auto-flow justify-evenly items-center"
      style={{}}
    >
      <div className="grid gap-6" style={{ justifyItems: "left" }}>
        <div>
          <h1 className="h1 font-semibold">Join Our Kitchen Network</h1>
          <div>
            <p>Deliver Delicious Meals to Busy Customers.</p>
          </div>
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
