import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
interface Props {
  options: any;
  handleSearch: any;
}
const SearchName: React.FC<Props> = ({ options, handleSearch }) => {
  return (
    <AutoComplete
      //   dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      //   options={options}
      //   onSelect={onSelect}
      //   onSearch={handleSearch}
      onChange={handleSearch}
    >
      <Input.Search
        size="large"
        placeholder="Search by rocket name"
        enterButton
      />
    </AutoComplete>
  );
};

export default SearchName;
