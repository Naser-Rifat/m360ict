import React, { useState } from "react";
import { Space, Tag } from "antd";

const { CheckableTag } = Tag;

interface Props {
  selectedTag: any;
  handleChange: any;
}
const CustomFilterComponents: React.FC<Props> = ({
  selectedTag,

  handleChange,
}) => {
  return (
    <>
      <Space size={[0, 8]} wrap>
        <CheckableTag
          style={{
            border: "1px solid gray",
          }}
          checked={selectedTag.includes("Last Week")}
          onChange={(checked) => handleChange("Last Week", checked)}
        >
          Last Week
        </CheckableTag>
        <CheckableTag
          style={{
            border: "1px solid gray",
          }}
          checked={selectedTag.includes("Last Month")}
          onChange={(checked) => handleChange("Last Month", checked)}
        >
          Last Month
        </CheckableTag>
        <CheckableTag
          style={{
            border: "1px solid gray",
          }}
          checked={selectedTag.includes("Last Year")}
          onChange={(checked) => handleChange("Last Year", checked)}
        >
          Last Year
        </CheckableTag>
      </Space>
    </>
  );
};

export default CustomFilterComponents;
