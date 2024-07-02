import React from "react";
import * as Styles from "./BookMarksDishesStyle";
import ReCard from "../../../reusable-antd-components/ReCard";
import { kitchenImg } from "../../../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BookmarksDishesItem } from "../../../Configs/BookmarksDishesItems";
export default function BookMarksDishes() {
  return (
    <Styles.Container>
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
              <div className="tittle-style">
                <h4>{tittle}</h4>
                <div className="rating">
                  <h3>{rating}</h3>
                  <FontAwesomeIcon icon={faStar} color="white" />
                </div>
              </div>
              <p>{address}</p>
            </ReCard>
          );
        })}
      </div>
    </Styles.Container>
  );
}
