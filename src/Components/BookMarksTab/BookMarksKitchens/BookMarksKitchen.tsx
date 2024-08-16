import React, { useEffect } from "react";
import * as Styles from "./BookMarksKitchensStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEye,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Space } from "antd";
import ReEmpty from "../../../reusable-antd-components/ReEmpty";
import { user as userApi } from "../../../Apis/User";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import {
  setBookmarks,
  unbookmark,
} from "../../../Redux/Slices/Bookmarks/KichensBookmarksSlices";
import { useNavigate } from "react-router-dom";
import { ReNotification } from "../../../reusable-antd-components/ReNotification";
import { KichensImg } from "../../../Assets";
import ReCard from "../../../reusable-antd-components/ReCard";
export default function BookMarksKitchen() {
  const { bookmarks } = useAppSelector((store) => store.KichensBookmarks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function fetchBookmarkData() {
    const bookmarkedKitchens = await userApi.getBookmark("kitchen");
    dispatch(setBookmarks(bookmarkedKitchens));
  }

  async function handleCardActionClicks(
    type: "unBookmark" | "view",
    id: string
  ) {
    if (type === "unBookmark") {
      const res = await userApi.unBookmark(id, "kitchen");
      if (res) {
        ReNotification({
          header: "Profile",
          description: `Succesfully unbookmarked`,
          duration: 2,
          placement: "topRight",
          type: "success",
        });
        dispatch(unbookmark(id));
      }
    } else {
      navigate(`/kitchen/${id}`);
    }
  }

  useEffect(() => {
    fetchBookmarkData();
  }, []);

  return (
    <Styles.Container className={`${!bookmarks?.length && "make-it-center"}`}>
      {bookmarks?.length ? (
        <div className="cards">
          {bookmarks?.map((bookmark: any) => {
            const { _id, name, address, city } = bookmark;
            return (
              <ReCard
                size="small"
                className="card"
                key={_id}
                cover={<img alt="Kitchen Banner" src={KichensImg}/>}
                actions={[
                  <FontAwesomeIcon
                    icon={faBookmark}
                    onClick={() => {
                      handleCardActionClicks("unBookmark", _id);
                    }}
                  />,
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => {
                      handleCardActionClicks("view", _id);
                    }}
                  />,
                ]}
              >
                <Space direction="vertical">
                  <h4>{name}</h4>
                  <Space direction="horizontal">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{`${address},  ${city}`}</p>
                  </Space>
                </Space>
              </ReCard>
            );
          })}
        </div>
      ) : (
        <ReEmpty description="You don't have any bookmarked kitchens." />
      )}
    </Styles.Container>
  );
}
