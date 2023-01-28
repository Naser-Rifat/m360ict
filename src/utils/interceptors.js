import axios from "axios";
const baseURL = "https://api.spacexdata.com/v3/";

export const interceptor = axios.create({
  baseURL,
});
