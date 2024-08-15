import React, { useEffect } from "react";
import ReCard from "../../../reusable-antd-components/ReCard";
import * as Styles from "./BookMarksKitchensStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "antd";
import { primaryColor } from "../../../Configs/GlobalColour";
import ReEmpty from "../../../reusable-antd-components/ReEmpty";
import { user as userApi } from "../../../Apis/User";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { setBookmarks } from "../../../Redux/Slices/Bookmarks/KichensBookmarksSlices";
export default function BookMarksKitchen() {
  const { bookmarks } = useAppSelector((store) => store.KichensBookmarks);
  const dispatch = useAppDispatch();

  async function fetchBookmarkData() {
    const bookmarkedKitchens = await userApi.getBookmark("kitchen");
    dispatch(setBookmarks(bookmarkedKitchens));
  }

  useEffect(() => {
    fetchBookmarkData();
  }, []);

  return (
    <Styles.Container className={`${!bookmarks?.length && "make-it-center"}`}>
      {bookmarks?.length ? (
        <div className="cards">
          {bookmarks?.map((bookmark: any) => {
            const { _id, name, rating, address } = bookmark;
            return (
              <ReCard
                className="card"
                key={_id}
                actions={[
                  <FontAwesomeIcon icon={faBookmark} />,
                  <FontAwesomeIcon icon={faEye} />,
                ]}
              >
                <div className="header">
                  <h4>{name}</h4>
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
        <ReEmpty description="You don't have kichens." />
      )}
    </Styles.Container>
  );
}
