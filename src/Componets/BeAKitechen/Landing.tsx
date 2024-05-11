import landingImg from "../../Assets/Images/landingImg.jpg";
import { landingPage } from "../../Assets";
import { Button } from "antd";
export default function Landing() {
  return (
    // <div className="flex bg-white">
    //   <div className="flex md:flex-col md:items-center md:justify-center text-left ">
    //     <div className="flex  flex-col sm:flex-row">
    //       <div className="w-full sm:w-10/12 lg:w-8/10 xl:w-7/10 mb-8 sm:mb-0 items-center justify-center">
    //         <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center">
    //           Join Our Kitchen Network: Deliver Delicious Meals to Busy
    //           Customers
    //         </h2>
    //         <div className="flex h-full mx-20">
    //           <Button className="my-4 md:mx-0" type="primary" size="large">
    //             Registration
    //           </Button>
    //         </div>
    //       </div>
    //       <div className="items-end">
    //         <img
    //           className="w-50 h-50"
    //           src={landingPage}
    //           alt="Image not found"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="items-center justify-center grid grid-cols-2 gap-4 bg-red-4000 h-screen">
      <div>
        <h1>Join Our Kitchen Network:</h1>
        <p> Deliver Delicious Meals to BusyCustomers</p>
      </div>
      <img className="w-50 h-50" src={landingPage} alt="Image not found" />
    </div>
  );
}
