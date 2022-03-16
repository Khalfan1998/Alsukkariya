import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://alsukkariya.herokuapp.com/api/",
});
