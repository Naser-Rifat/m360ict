import React, { useState } from "react";
import { AutoComplete, Input } from "antd";

const SearchName: React.FC = ({ options, handleSearch }) => {
  return (
    <AutoComplete
      //   dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      //   options={options}
      //   onSelect={onSelect}
      //   onSearch={handleSearch}
      onChange={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default SearchName;
