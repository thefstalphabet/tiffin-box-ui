import { useEffect } from "react";
import { user } from "../../Apis/User";
import { auth } from "../../Apis/Auth";

const Home = () => {
  const call = async () => {
    // await user.find("0f4dc1d4-f0e5-4b7d-b899-c2e273266e75");
    // await user.create({
    //   email: "dev1@gamil.com",
    //   name: "Developer",
    //   password: "123456789",
    //   phoneNumber: "1234567892",
    //   city: "Jabalpur",
    //   address: "Golbazar"
    // });
    // await auth.refreshToken()
    await auth.login({
      email: "dev@gamil.com",
      password: "123456789",
    });
    // auth.logout()
  };
  useEffect(() => {
    call();
  }, []);

  return <div></div>;
};

export default Home;
