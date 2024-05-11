import landingImg from "../../Assets/Images/landingImg.jpg";
import { landingPage } from "../../Assets";
import { Button } from "antd";
export default function Landing() {
  return (
    <div className="flex bg-white">
      <div className="flex md:flex-col md:items-center md:justify-center text-left mx-10">
        <div className="flex items-center flex-col sm:flex-row">
          <div className="w-full sm:w-10/12 lg:w-8/10 xl:w-7/10 mb-8 sm:mb-0">
            <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center">
              Join Our Kitchen Network: Deliver Delicious Meals to Busy
              Customers
            </h2>
            <div className="flex items-center justify-center mx-12 h-full">
              <Button className="my-4 md:mx-0" type="primary" size="large">
                Registration
              </Button>
            </div>
          </div>
          <div className="items-end">
            <img
              className="w-full h-auto"
              src={landingPage}
              alt="Image not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
