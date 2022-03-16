import { axiosInstance } from "./config";

const BASE_URL = "https://alsukkariya.herokuapp.com/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

export const publicRequest = axiosInstance.create({
  baseURL: BASE_URL,
});

export const userRequest = axiosInstance.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
