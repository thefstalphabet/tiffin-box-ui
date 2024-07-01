import React from "react";
import ReCard from "../../../reusable-antd-components/ReCard";
import * as Styles from "./BookMarksKitchensStyle";
import { kitchenImg } from "../../../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function BookMarksKitchen() {
  return (
    <Styles.Container>
      <ReCard className="card">
        <img
          src={kitchenImg}
          alt="Tripuri Restaurant"
          style={{ width: "100%", height: "auto" }}
        />
        <h4>{"Tripuri Restaurant"}</h4>
        <div className="rating">
          <h3>4.5</h3>
          <FontAwesomeIcon icon={faStar} color="white" />
        </div>
        <p>{"Shastri Nagar"}</p>
      </ReCard>
    </Styles.Container>
  );
}
