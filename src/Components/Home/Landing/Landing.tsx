import * as Styles from "./LandingStyle";
import { appName } from "../../../Configs/GlobalText";
import TopKitchens from "../TopKitchens/TopKitchens";
import Footer from "../../Footer/Footer";
import { kitchen as kitchenImage } from "../../../Assets";
import ReSearchbar from "../../../reusable-antd-components/ReSearchbar";
import { kitchen } from "../../../Apis/Kitchen";
import { Select, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { mpCities } from "../../../Configs/MadhyaPradeshCities";
import { useState } from "react";
export default function Landing() {
  const [selectedCity, setSelectedCity] = useState<string>("jabalpur");
  async function handleSearchbarSubmit(searchTerm: string) {
    const res = await kitchen.findAll({ name: searchTerm, city: selectedCity });
    console.log(res);
  }

  return (
    <Styles.MainContainer>
      <Styles.Container className="container">
        <Styles.Content>
          <div className="taglines">
            <h1>{appName}</h1>
            <p>Discover the best food & drinks in your city</p>
          </div>
          <Space.Compact>
            <Select
              onSelect={(value: string) => setSelectedCity(value)}
              suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
              defaultValue={selectedCity}
              size="large"
              showSearch
              options={mpCities.map((city: string) => {
                return {
                  label: city,
                  value: city.toLowerCase(),
                };
              })}
            />
            <ReSearchbar
              className="search-bar"
              size="large"
              placeholder="Search Nearest Kitchen"
              onSubmit={handleSearchbarSubmit}
            />
          </Space.Compact>
        </Styles.Content>
        <Styles.Image>
          <img style={{ width: "28vw" }} src={kitchenImage} alt="Banner" />
        </Styles.Image>
      </Styles.Container>
      <TopKitchens />
      <Footer />
    </Styles.MainContainer>
  );
}
