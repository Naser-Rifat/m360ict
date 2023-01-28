import { FilterOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import CustomFilterComponents from "./CustomFilterComponents";
import SearchName from "./SearchName";
interface Props {
  search: string;
  handleSearch: any;
  selectedTag: string;
  handleChange: any;
}

const FilterComponent: React.FC<Props> = ({
  search,
  handleSearch,
  selectedTag,
  handleChange,
}) => {
  return (
    <div>
      <div
        style={{
          padding: 20,
          textAlign: "center",
        }}
      >
        <SearchName options={search} handleSearch={handleSearch} />
        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Tooltip title="Filter">
            <FilterOutlined
              style={{
                color: "gray",
                fontSize: 20,
              }}
            />
          </Tooltip>
          <CustomFilterComponents
            selectedTag={selectedTag}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
