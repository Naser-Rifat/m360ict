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
import FilterComponent from "./FilterComponent";

const LaunchesList: React.FC = () => {
  const { launches }: RootState = useSelector((state: RootState) => state);
  console.log(launches);
  const dispatch = useDispatch<AppDispatch>();
  const [search, setNewSearch] = useState<string>("");

  const [selectedTag, setSelectedTag] = useState<string>("");
  const [newFilterSearch, setNewFilterSearch] = useState(launches);
  useEffect(() => {
    setNewFilterSearch(launches);
  }, [launches]);
  const handleChange = (tag: string, checked: boolean) => {
    if (tag === "Last Week") {
      const lastWeekFilter = launches.filter(
        ({ rocket: { rocket_name } }: any) =>
          rocket_name
            ?.split(" ")
            .join("")
            .toLowerCase()
            ?.includes(search?.split(" ").join("").toLowerCase()) === lastWeek
      );
      setNewFilterSearch(lastWeekFilter);
    } else if (tag === "Last Month") {
      setNewFilterSearch(
        launches.filter(
          ({ launch_date_local }) =>
            moment(launch_date_local).format("YYYY-MM-DD") === lastMonth
        )
      );
    } else if (tag === "Last Year") {
      setNewFilterSearch(
        launches.filter(
          ({ launch_date_local }) =>
            moment(launch_date_local).format("YYYY-MM-DD") === lastYear
        )
      );
    } else {
      setNewFilterSearch(launches);
    }
  };
  console.log(newFilterSearch);
  const lastWeek = moment(getLastWeeksDate()).format("YYYY-MM-DD");
  const lastMonth = moment(getLastMonth()).format("YYYY-MM-DD");
  const lastYear = moment(getLastYear()).format("YYYY-MM-DD");
  const handleSearch = (valSearch: string) => {
    const filterSearch = !valSearch
      ? launches
      : launches.filter(({ rocket: { rocket_name } }: any) =>
          rocket_name
            ?.split(" ")
            .join("")
            .toLowerCase()
            ?.includes(valSearch?.split(" ").join("").toLowerCase())
        );
    setNewFilterSearch(filterSearch);
  };

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
          marginTop: 0,
          marginBottom: 50,
        }}
      >
        <FilterComponent
          selectedTag={selectedTag}
          handleChange={handleChange}
          search={search}
          handleSearch={handleSearch}
        />
      </div>
      <div>
        {newFilterSearch.length ? (
          <Row gutter={[16, 16]}>
            {newFilterSearch?.map((launch, i: number) => (
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                key={i}
                span={6}
              >
                <LunchCard launch={launch} />
              </Col>
            ))}
          </Row>
        ) : (
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No data Found
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchesList;
