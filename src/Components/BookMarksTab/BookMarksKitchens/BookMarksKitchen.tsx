import React from "react";
import ReCard from "../../../reusable-antd-components/ReCard";
import * as Styles from "./BookMarksKitchensStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BookmarksKitchensItem } from "../../../Configs/BookmarksKichensItems";
import { Tag } from "antd";
import { primaryColor } from "../../../Configs/GlobalColour";
export default function BookMarksKitchen() {
  return (
    <Styles.Container>
      {BookmarksKitchensItem?.map((item: any) => {
        const { key, img, rating, tittle, address } = item;
        return (
          <ReCard className="card" key={key}>
            <img
              src={img}
              alt="Kichens Image"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="header">
              <h4>{tittle}</h4>
              <Tag color={primaryColor} style={{ padding: "2px 3px" }}>
                {rating} <FontAwesomeIcon icon={faStar} />
              </Tag>
            </div>
            <p>{address}</p>
          </ReCard>
        );
      })}
    </Styles.Container>
  );
}
