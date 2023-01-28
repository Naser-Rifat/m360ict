import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import LunchCard from "./LunchCard";
import { RootState, AppDispatch } from "../Redux/store";
import { Col, DatePicker, DatePickerProps, Row, Tooltip } from "antd";
import SearchName from "./SearchName";
import { Launch } from "../types/types";
import moment from "moment";
import CustomFilterComponents from "./CustomFilterComponents";
import { getLastMonth, getLastWeeksDate, getLastYear } from "./FilterFunction";
import { FilterOutlined } from "@ant-design/icons";

const LaunchesList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setNewSearch] = useState<string>("");
  const [date, setDate] = useState<string>(moment().format("DD-MM-YYYY"));
  const [selectedTag, setSelectedTag] = useState<string>("");

  const handleChange = (tag: string, checked: boolean) => {
    setSelectedTag(tag);
  };
  const { launches }: RootState = useSelector((state: RootState) => state);
  const lastWeek = moment(getLastWeeksDate()).format("YYYY-MM-DD");
  const lastMonth = moment(getLastMonth()).format("YYYY-MM-DD");
  const lastYear = moment(getLastYear()).format("YYYY-MM-DD");
  const handleSearch = (value: string) => {
    setNewSearch(value);
  };
  const lastWeekFilter = launches.filter(
    ({ rocket: { rocket_name } }: any) =>
      rocket_name
        ?.split(" ")
        .join("")
        .toLowerCase()
        ?.includes(search?.split(" ").join("").toLowerCase()) === lastWeek
  );
  console.log(lastWeekFilter);
  // <---search--->
  // const filterSearch = !search
  //   ? launches
  //   : launches.filter(({ rocket: { rocket_name } }: any) =>
  //       rocket_name
  //         ?.split(" ")
  //         .join("")
  //         .toLowerCase()
  //         ?.includes(search?.split(" ").join("").toLowerCase())
  //     );

  //     : selectedTag === "Last Week"
  //   ? launches.filter(
  //       ({ launch_date_local }) =>
  //         moment(launch_date_local).format("YYYY-MM-DD") === lastWeek
  //     )
  //   : selectedTag === "Last Month"
  //   ? launches.filter(
  //       ({ launch_date_local }) =>
  //         moment(launch_date_local).format("YYYY-MM-DD") === lastMonth
  //     )
  //   : selectedTag === "Last Year"
  //   ? launches.filter(
  //       ({ launch_date_local }) =>
  //         moment(launch_date_local).format("YYYY-MM-DD") === lastYear
  //     )
  const filterSearch =
    !search || !lastWeek || !lastMonth || !lastYear
      ? launches
      : lastWeek
      ? lastWeekFilter
      : launches.filter(({ rocket: { rocket_name } }: any) =>
          rocket_name
            ?.split(" ")
            .join("")
            .toLowerCase()
            ?.includes(search?.split(" ").join("").toLowerCase())
        );
  useEffect(() => {
    dispatch(() => {
      fetch("https://api.spacexdata.com/v3/launches")
        .then((response) => response.json())
        .then((data: Launch[]) => {
          dispatch<AnyAction>({ type: "FETCH_SUCCESS", payload: data });
        })
        .catch((error: Error) => {
          dispatch<AnyAction>({ type: "FETCH_ERROR", payload: error });
        });
    });
  }, []);

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        {" "}
        <SearchName options={search} handleSearch={handleSearch} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
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
      <div
        style={{
          display: "flex",
        }}
      >
        <Row gutter={[16, 16]}>
          {filterSearch?.map((launch, i: number) => (
            <Col key={i} span={6}>
              <LunchCard launch={launch} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default LaunchesList;
