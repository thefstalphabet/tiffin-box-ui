import * as Styles from "./LandingStyle";
import { appName } from "../../../Configs/GlobalText";
import { kitchen as kitchenImage } from "../../../Assets";
import ReSearchbar from "../../../reusable-antd-components/ReSearchbar";
import { kitchen } from "../../../Apis/Kitchen";
import { Select, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { mpCities } from "../../../Configs/MadhyaPradeshCities";
import { useState } from "react";
export default function Landing() {
  const [selectedCity, setSelectedCity] = useState<string>();

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
            <p>Discover the Best Tiffin Food Service in your City</p>
          </div>
          <Space.Compact className="search-bar">
            <Select
              onSelect={(value: string) => setSelectedCity(value)}
              suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
              defaultValue={selectedCity}
              placeholder="Select City"
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
              onSubmit={handleSearchbarSubmit}
            />
          </Space.Compact>
        </Styles.Content>
        <Styles.Image>
          <img style={{ width: "28vw" }} src={kitchenImage} alt="Banner" />
        </Styles.Image>
      </Styles.Container>
    </Styles.MainContainer>
  );
}
