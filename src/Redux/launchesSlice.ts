//store/launchesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Launch } from "../types/types";
import { getLaunches, getLaunch } from "../services/spaceX";

interface LaunchesState {
  launches: Launch[];
}

const launchesSlice = createSlice({
  name: "launches",
  initialState: [],
  reducers: {
    setLaunches: (state, action: PayloadAction<Launch[]>) => {
      state.launches = action.payload;
    },
    setLaunch: (state, action: PayloadAction<Launch>) => {
      const { flight_number } = action.payload;
      const launchIndex = state.launches.findIndex(
        (launch) => launch.flight_number === flight_number
      );
      state.launches[launchIndex] = action.payload;
    },
  },
});
export default launchesSlice;

export const fetchLaunches = () => async (dispatch: any) => {
  const launches = await getLaunches();
  dispatch(setLaunches(launches));
};

// export const fetchLaunch = (flight_number) => async (dispatch) => {
//   const launch = await getLaunch(flight_number);
//   dispatch(setLaunch(launch));
// };
