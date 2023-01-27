import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import LunchCard from "./LunchCard";
import { Launch } from "../types/types";
import { RootState } from "../Redux/store";
import { Col, Row } from "antd";

const LaunchesList: React.FC = () => {
  const dispatch = useDispatch();
  const { launches }: RootState = useSelector((state: RootState) => state);

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

        <div
          style={{
            display: "flex",
          }}
        >
          {/* {launches?.map((launch: Launch, i: number) => (
            <LunchCard key={i} launch={launch} />
          ))} */}
          <Row gutter={[16, 16]}>
            {launches?.map((launch: Launch, i: number) => (
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
