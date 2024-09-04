import React from "react";
import * as Styles from "../BookMarksKitchens/BookMarksKitchensStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookmarksDishesItem } from "../../../Configs/BookmarksDishesItems";
import { Tag } from "antd";
import { primaryColor } from "../../../Configs/GlobalColour";
import ReEmpty from "../../../reusable-antd-components/ReEmpty";
import ReCard from "../../../reusable-antd-components/ReCard";
import { Icons } from "../../../Assets/Icons/Icons";
export default function BookMarksDishes() {
  return (
    <Styles.Container
      className={`${!BookmarksDishesItem?.length && "make-it-center"}`}
    >
      {!BookmarksDishesItem.length ? (
        <div className="cards">
          {BookmarksDishesItem?.map((item: any) => {
            const { key, rating, tittle, address } = item;
            return (
              <ReCard className="card" key={key}>
                <div className="header">
                  <h4>{tittle}</h4>
                  <Tag color={primaryColor} style={{ padding: "2px 3px" }}>
                    {rating} <FontAwesomeIcon icon={Icons?.faStar} />
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
