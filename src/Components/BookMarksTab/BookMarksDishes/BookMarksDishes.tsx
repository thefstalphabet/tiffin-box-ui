import React from "react";
import * as Styles from "./BookMarksDishesStyle";
import ReCard from "../../../reusable-antd-components/ReCard";
import { kitchenImg } from "../../../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BookmarksDishesItem } from "../../../Configs/BookmarksDishesItems";
import { Tag } from "antd";
import { primaryColor } from "../../../Configs/GlobalColour";
import ReEmpty from "../../../reusable-antd-components/ReEmpty";
export default function BookMarksDishes() {
  return (
    <Styles.Container
      className={`${!BookmarksDishesItem?.length && "make-it-center"}`}
    >
      {!BookmarksDishesItem.length ? (
        <div className="cards">
          {BookmarksDishesItem?.map((item: any) => {
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
        </div>
      ) : (
        <ReEmpty description="You don't have Dishes." />
      )}
    </Styles.Container>
  );
}
