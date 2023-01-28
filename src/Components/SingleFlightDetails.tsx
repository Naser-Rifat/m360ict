import { AnyAction } from "@reduxjs/toolkit";
import { Avatar, Card, Spin, Typography } from "antd";
import moment from "moment";
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: 600,
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: 400,
            }}
            src={flight.links.mission_patch}
            alt="mission"
          />
        </div>
        <Card>
          <Typography.Title level={4}>{flight.mission_name}</Typography.Title>
          <Typography.Paragraph>
            <strong>Launch Date:</strong>{" "}
            {moment(flight.launch_date_local).format("DD-MM-YYYY")}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Rocket:</strong> {flight.rocket.rocket_name}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Rocket Type:</strong> {flight.rocket.rocket_type}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Launch Status:</strong>{" "}
            {flight.launch_success === true ? "Successful" : "Failed"}
          </Typography.Paragraph>
          {!flight.launch_success && (
            <div>
              <Typography.Paragraph>
                <strong>Launch Failure Time:</strong>{" "}
                {flight.launch_failure_details.time}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Launch Failure Details:</strong>{" "}
                {flight.launch_failure_details.reason}
              </Typography.Paragraph>
            </div>
          )}

          <Typography.Paragraph>
            <strong>Launch Year:</strong> {flight.launch_year}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Launch Site:</strong> {flight.launch_site.site_name_long}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Details:</strong> {flight.details}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>For more info: </strong>
            <a href={flight.links.article_link}>Click Here</a>
          </Typography.Paragraph>
        </Card>
      </Card>
    </div>
  );
};

export default SingleFlightDetails;
