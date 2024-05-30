import { useEffect } from "react";
import { user } from "../../Apis/User";
import { auth } from "../../Apis/Auth";
import { SearchKitchen } from "../../Components";
import * as Styles from "./HomeStyle"
import { kitchen } from "../../Apis/Kitchen";
const Home = () => {
  const call = async () => {
    // await user.findOne("0f4dc1d4-f0e5-4b7d-b899-c2e273266e75");
    await kitchen.findAll();
    // await user.create({
    //   email: "dev1@gamil.com",
    //   name: "Developer",
    //   password: "123456789",
    //   phoneNumber: "1234567892",
    //   city: "Jabalpur",
    //   address: "Golbazar"
    // });
    // await auth.refreshToken()
    // await auth.login({
    //   email: "dev@gamil.com",
    //   password: "123456789",
    // });
    // auth.logout()
  };
  useEffect(() => {
    call();
  }, []);

  return (
    <Styles.Container>
      <SearchKitchen />
    </Styles.Container>
  );
};

export default Home;
