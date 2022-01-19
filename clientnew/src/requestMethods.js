import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTdjNDc5MjA3NGRiNzViN2E2ODRmZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjU4MDk3OSwiZXhwIjoxNjQyODQwMTc5fQ.xao6KMygqZ-wz9CUlatbaiJlhJsE1dKtZ9YVhFPumq8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
