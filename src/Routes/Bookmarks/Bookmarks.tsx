import React, { useState } from "react";
import ReTab from "../../reusable-antd-components/ReTab";
import { BookmarkstabItems } from "../../Configs/BookMarksItem";
export default function Bookmarks() {
  const [activeTab, setActiveTab] = useState<string>("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };
  return (
    <ReTab
      items={BookmarkstabItems}
      onChange={handleTabChange}
      activeKey={activeTab}
      defaultOpenTab="1"
    />
  );
}
