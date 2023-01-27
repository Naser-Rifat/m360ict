import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import LunchCard from "./LunchCard";
import { RootState } from "../Redux/store";
import { Col, DatePicker, DatePickerProps, Row } from "antd";
import SearchName from "./SearchName";
import { Launch } from "../types/types";
import moment from "moment";

const LaunchesList: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setNewSearch] = useState<string>("");
  const [date, setDate] = useState<string>(moment().format("WW-MM-YYYY"));
  const handleSearch = (value: string) => {
    setNewSearch(value);
  };
  const { launches }: RootState = useSelector((state: RootState) => state);

  // <---search--->
  const filterSearch = !search
    ? launches
    : launches.filter(({ rocket: { rocket_name } }: any) =>
        rocket_name
          ?.split(" ")
          .join("")
          .toLowerCase()
          ?.includes(search.split(" ").join("").toLowerCase())
      );
  // const filterSearch = launches.filter(
  //   ({ rocket: { rocket_name } }) =>
  //     rocket_name.toString().toLowerCase() === options.toString().toLowerCase()
  // );
  console.log(filterSearch);
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
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(date, dateString);
  };
  console.log(moment(date).format("WW-MM-YYYY"));
  return (
    <div>
      <ul>
        {/* <button
          onClick={() =>
            dispatch<AnyAction>({ type: "dsdsds", payload: "sdas" })
          }
        >
          Click
        </button> */}
        <SearchName options={search} handleSearch={handleSearch} />
        <DatePicker onChange={onChange} size={"small"} />

        <div
          style={{
            display: "flex",
          }}
        >
          {/* {launches?.map((launch: Launch, i: number) => (
            <LunchCard key={i} launch={launch} />
          ))} */}
          <Row gutter={[16, 16]}>
            {filterSearch?.map((launch: Launch, i: number) => (
              <Col key={i} span={6}>
                <LunchCard launch={launch} />
              </Col>
            ))}
          </Row>
        </div>
      </ul>
    </div>
  );
};

export default LaunchesList;
