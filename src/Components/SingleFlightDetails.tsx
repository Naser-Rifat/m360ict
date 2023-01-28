import { AnyAction } from "@reduxjs/toolkit";
import { Avatar, Card, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../Redux/store";
import { Launch } from "../types/types";

const SingleFlightDetails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();
  const { flight }: any | null = useSelector((state: RootState) => state);
  useEffect(() => {
    dispatch(() => {
      fetch(`https://api.spacexdata.com/v3/launches/${id}`)
        .then((response) => response.json())
        .then((data: Launch[]) => {
          dispatch<AnyAction>({ type: "SINGLE_FETCH_SUCCESS", payload: data });
        })
        .catch((error: Error) => {
          dispatch<AnyAction>({ type: "FETCH_ERROR", payload: error });
        });
    });
  }, [id]);

  console.log(flight);

  if (!flight.flight_number) {
    return (
      <div style={{ height: "100vh" }}>
        <Spin />
      </div>
    );
  }
  return (
    <div>
      <Card>
        <img src={flight.mission_patch} alt="mission" />
        <Typography.Title level={4}>{flight.mission_name}</Typography.Title>
        <Typography.Paragraph>
          <strong>Launch Date:</strong> {flight.launch_date}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Rocket:</strong> {flight.rocket.rocket_name}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Payload:</strong> {flight.details}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Payload:</strong> {flight.launch_year}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>More details click here: </strong>
          <a>{flight.links.article_link}</a>
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default SingleFlightDetails;
