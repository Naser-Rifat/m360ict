import React, { useState } from "react";
import { Space, Tag } from "antd";

const { CheckableTag } = Tag;

const tagsData = ["Last Week", "Last Month", "Last Year"];

const CustomFilterComponents: React.FC = ({
  selectedTag,
  selectedTag2,
  selectedTag3,
  handleChange,
}) => {
  return (
    <>
      <span style={{ marginRight: 8 }}>Filter:</span>
      <Space size={[0, 8]} wrap>
        {/* {tagsData.map((tag) => ( */}
        <CheckableTag
          checked={selectedTag.includes("Last Week")}
          onChange={(checked) => handleChange("Last Week", checked)}
        >
          Last Week
        </CheckableTag>
        <CheckableTag
          checked={selectedTag2.includes("Last Month")}
          onChange={(checked) => handleChange("Last Month", checked)}
        >
          Last Month
        </CheckableTag>
        <CheckableTag
          checked={selectedTag3.includes("Last Year")}
          onChange={(checked) => handleChange("Last Year", checked)}
        >
          Last Year
        </CheckableTag>
        {/* ))} */}
      </Space>
    </>
  );
};

export default CustomFilterComponents;
