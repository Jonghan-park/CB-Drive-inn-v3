import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://cb-drive-inn.herokuapp.com/",
});
