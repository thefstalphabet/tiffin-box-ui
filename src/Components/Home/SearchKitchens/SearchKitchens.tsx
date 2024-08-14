import * as Styles from "./SearchKitchensStyle";
import { appName } from "../../../Configs/GlobalText";
import ReSearchbar from "../../../reusable-antd-components/ReSearchbar";
import { kitchen } from "../../../Apis/Kitchen";
import { Rate, Select, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { mpCities } from "../../../Configs/MadhyaPradeshCities";
import { useState } from "react";
import ReList from "../../../reusable-antd-components/ReList";
import NewHomeBg from "../../../Assets/Images/NewHomeBg.svg";
import { veganMapping } from "../../../Helper/Mappings";

export default function SearchKitchens() {
  const [selectedCity, setSelectedCity] = useState<string>();
  const [isSearchBarFocused, setIsSearchBarFocused] = useState<boolean>(false);
  const [searchedKitchens, setSearchedKitchens] = useState<any[]>([]);

  async function handleSearchbarSubmit(searchTerm: string) {
    if (searchTerm !== "") {
      setIsSearchBarFocused(true);
    } else {
      setIsSearchBarFocused(false);
      return;
    }
    const res = await kitchen.findAll({ name: searchTerm, city: selectedCity });
    setSearchedKitchens(res);
  }

  return (
    <Styles.Container className="container">
      <Styles.Content>
        <div className="taglines">
          <h1>{appName}</h1>
          <p>
            Discover the Best Daily Food Service in your City with Tiffin Box
          </p>
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
          <div className="search-bar-and-list">
            <ReSearchbar
              className="search-bar"
              size="large"
              onSubmit={() => {}}
              onChange={handleSearchbarSubmit}
            />
            {isSearchBarFocused && (
              <ReList
                itemLayout="horizontal"
                bordered
                className="list"
                data={searchedKitchens.map((kitchen) => {
                  const { _id, name, city, address, vegan, rating } =
                    kitchen;
                  return {
                    href: `kitchen/${_id}`,
                    title: name,
                    description: (
                      <Space direction="vertical">
                        <p>{`${address} | ${city} | ${veganMapping[vegan]}`}</p>
                        <Rate disabled count={5} value={rating}/>
                      </Space>
                    ),
                    className: "list-item",
                  };
                })}
              />
            )}
          </div>
        </Space.Compact>
      </Styles.Content>
      <Styles.Image>
        <img style={{ width: "27vw" }} src={NewHomeBg} alt="Banner" />
      </Styles.Image>
    </Styles.Container>
  );
}
