import * as Styles from "./SearchKitchensStyle";
import { appName } from "../../../Configs/GlobalText";
import { kitchen as kitchenImage } from "../../../Assets";
import ReSearchbar from "../../../reusable-antd-components/ReSearchbar";
import { kitchen } from "../../../Apis/Kitchen";
import { Select, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { mpCities } from "../../../Configs/MadhyaPradeshCities";
import { useState } from "react";
import ReList from "../../../reusable-antd-components/ReList";
import NewHomeBg from '../../../Assets/Images/NewHomeBg.svg';

export default function SearchKitchens() {
  const [selectedCity, setSelectedCity] = useState<string>();
  const [isSearchBarFocused, setIsSearchBarFocused] = useState<boolean>(false);
  const [searchedKitchens, setSearchedKitchens] = useState<any[]>([]);

  async function handleSearchbarSubmit(searchTerm: string) {
    const res = await kitchen.findAll({ name: searchTerm, city: selectedCity });
    setSearchedKitchens(res);
  }

  async function handleSearchbarChanges(searchTerm: string) {
    if (searchTerm !== "") {
      setIsSearchBarFocused(true);
    } else {
      setIsSearchBarFocused(false);
    }
  }

  return (
      <Styles.Container className="container">
        <Styles.Content>
          <div className="taglines">
            <h1>{appName}</h1>
            <p>Discover the Best Daily Food Service in your City with Tiffin Box</p>
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
                onSubmit={handleSearchbarSubmit}
                onChange={handleSearchbarChanges}
              />
              {isSearchBarFocused && (
                <ReList
                  itemLayout="horizontal"
                  className="list"
                  data={searchedKitchens.map((kitchen) => {
                    const { _id, email, name, city, address, vegan } = kitchen;
                    return {
                      href: _id,
                      title: name,
                      description: `${address} | ${address} | ${email} | ${city} | ${vegan}`,
                      className: "list-item",
                    };
                  })}
                />
              )}
            </div>
          </Space.Compact>
        </Styles.Content>
        <Styles.Image>
          <img style={{ width: "27vw", }} src={NewHomeBg} alt="Banner" />
        </Styles.Image>
      </Styles.Container>
  );
}
