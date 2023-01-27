import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create async thunk to fetch all launches
export const fetchLaunches = createAsyncThunk("launches/fetchAll", async () => {
  const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
  return {
    type: "FETCH_SUCCESS",
    payload: data,
  };
});

// Create async thunk to fetch single launch by flight number
export const fetchLaunch = createAsyncThunk(
  "launches/fetch",
  async (flightNumber) => {
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/launches/${flightNumber}`
    );
    return {
      type: "FETCH_SUCCESS",
      payload: data,
    };
  }
);
