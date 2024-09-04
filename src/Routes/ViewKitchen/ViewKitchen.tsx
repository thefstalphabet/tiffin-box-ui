import { useEffect } from "react";
import * as Styles from "./ViewKitchenStyles";
import { Button, Image, Space, Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Icons } from "../../Assets/Icons/Icons";
import { useParams } from "react-router-dom";
import { kitchen } from "../../Apis/Kitchen";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setData } from "../../Redux/Slices/Kitchen/ViewKitchenSlices";
import {
  formatTime,
  isCurrentTimeInRange,
} from "../../Helper/Methods";
import { veganMapping } from "../../Helper/Mappings";
import { primaryColor } from "../../Configs/GlobalColour";
import { user as userApi } from "../../Apis/User";
import { addBookmark, unbookmark } from "../../Redux/Slices/Bookmarks/KichensBookmarksSlices";

export default function ViewKitchen() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.viewKitchen);
  const { bookmarks } = useAppSelector((store) => store.KichensBookmarks);

  async function getKitchenData(id: string) {
    const data = await kitchen.findOne(id);
    dispatch(setData(data));
  }

  async function bookmarkKitchen(id: string, type: "bookmark" | "unBookmark") {
    if (type === "bookmark") {
      await userApi.bookmark(id, "kitchen");
      dispatch(addBookmark(data))
    } else {
      await userApi.unBookmark(id, "kitchen");
      dispatch(unbookmark(data))
    }
  }

  const statsData = [
    {
      raiting: 5.1,
      totalRating: "20k",
      title: "Dining Rating",
    },
    {
      raiting: 4.2,
      totalRating: "25k",
      title: "Dilivery Rating",
    },
  ];

  const isKitchenOpen = () => {
    const status = isCurrentTimeInRange(
      formatTime(data?.openingTime, true),
      formatTime(data?.closingTime, true)
    );
    return status;
  };

  useEffect(() => {
    if (id) {
      getKitchenData(id);
    }
  }, [id]);

  return id ? (
    <Styles.Container className="container">
      <Styles.Banner>
        <Image
          width={1200}
          height={400}
          src="https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?t=st=1719478311~exp=1719481911~hmac=fe4751568dd3edd8dc2aa81c377ebfba887c1d1a93b58fcf9149b0687720d7b6&w=1060"
        />
        <div className="right">
          <Image
            width={400}
            height={195}
            src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?t=st=1719478396~exp=1719481996~hmac=5d62e9222e34bb5708e891be464155c8ddd2d256b59291fdf6354c8a7ded7d6d&w=900"
          />
          <Image
            width={400}
            height={195}
            src="https://img.freepik.com/free-photo/beef-stew-with-potato-chestnuts-tomato-sauce-with-rice-garnish-cabbage-carrot-salad-takeaway_114579-892.jpg?t=st=1719478202~exp=1719481802~hmac=c55d03cd592cc1f2ec177896e8d8a959f9b9fa02c933c121811097b3f3072249&w=996"
          />
        </div>
      </Styles.Banner>
      <Styles.Header>
        <Space align="center" style={{ justifyContent: "space-between" }}>
          <h1>{data?.name}</h1>
          <div className="stats">
            {statsData?.map((ele: any) => {
              return (
                <div className="stat">
                  <Tag color={primaryColor} style={{ padding: "2px 3px" }}>
                    {ele?.raiting} <FontAwesomeIcon icon={Icons?.faStar} />
                  </Tag>
                  <div className="stat-text">
                    <span>{ele?.totalRating}</span>
                    <p>{ele?.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Space>
        <Space direction="vertical" size="small">
          <p>Pure Vegeterian, {veganMapping[data?.vegan]}</p>
          <p>
            {data?.address}, {data?.city}
          </p>
          <p>
            <Tag color={isKitchenOpen() ? "green" : "red"}>
              {isKitchenOpen() ? "Open" : "Closed"}
            </Tag>
            - {formatTime(data?.openingTime)} - {formatTime(data?.closingTime)}
          </p>
        </Space>
        <Space>
          {!bookmarks?.find((id: string) => id === data._id)?.length ? (
            <Button
              onClick={() => {
                bookmarkKitchen(id, "bookmark");
              }}
            >
              Bookmark
            </Button>
          ) : (
            <Button
              onClick={() => {
                bookmarkKitchen(id, "unBookmark");
              }}
            >
              Unbookmarked
            </Button>
          )}
          <Button>Share</Button>
        </Space>
      </Styles.Header>
      {/* menu */}
      {/* menu item data (container) */}
    </Styles.Container>
  ) : (
    <>Kitchen id not found!</>
  );
}
