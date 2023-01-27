import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import LunchCard from "./LunchCard";
import { Launch } from "../types/types";
import { RootState } from "../Redux/store";
import { Col, Row } from "antd";
import SearchName from "./SearchName";

const LaunchesList: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setNewSearch] = useState<string>("");
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
