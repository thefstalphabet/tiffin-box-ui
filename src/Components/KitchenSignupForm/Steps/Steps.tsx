import { Button, message, theme, Steps as AntdStep } from "antd";
import React, { useState } from "react";

export default function Steps() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState<number>(0);
  const stepsItems = [
    {
      title: "Sign Up Info",
      content: <>Sign Up Info</>,
    },
    {
      title: "Personal Info",
      content: <>Personal Info</>,
    },
    {
      title: "Account Setup",
      content: <>Account Setup</>,
    },
  ];
  const items = stepsItems.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div>
      <AntdStep current={current} items={items} />
      <div style={contentStyle}>{stepsItems[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < stepsItems.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === stepsItems.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}
