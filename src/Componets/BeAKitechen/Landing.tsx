import { landingPage, hero } from "../../Assets";
import { Button } from "antd";
export default function Landing() {
  return (
    <div
      className="subContainer items-center justify-center grid grid-cols-2 gap-3"
      style={{ height: "89.5vh" }}
    >
      <div className="grid gap-6 justify-center">
        <div>
        <h1 className="h1 font-semibold">Join Our Kitchen Network</h1>
        <p> Deliver Delicious Meals to Busy Customers.</p>
        </div>
        <Button className="w-40" type="primary" size="large">
          Registration
        </Button>
      </div>
      <img className="w-50" style={{height: "80vh"}} src={hero} alt="Image not found" />
    </div>
  );
}
