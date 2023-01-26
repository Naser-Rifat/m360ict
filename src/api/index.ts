import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v3";

export const getAllLaunches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/launches`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLaunch = async (flight_number: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/launches/${flight_number}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
//This file exports two functions getAllLaunches and getLaunch which makes the request to the https://api.spacexdata.com/v3/launches and https://api.spacexdata.com/v3/launches/:flight_number respectively. These functions return the data received from the API and throws an error in case of any error.

// You may want to add additional error handling and caching strategies to this file as per your project requirements.
