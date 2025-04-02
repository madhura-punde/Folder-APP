import axios from "axios";

let apiUrl = "http://localhost:3000"; // Default URL

const apiService = axios.create({
  baseURL: apiUrl,
  headers: {
    "content-type": "application/json",
    charset: "utf-8",
  },
});

export const apiMultiPartService = axios.create({
  baseURL: apiUrl,
  headers: {
    "content-type": "multipart/form-data",
    // charset: "utf-8",
  },
});

export const getService = (endPoint) => {
  return apiService.get(endPoint);
};

export const postService = (endPoint, data) => {
  return apiService.post(endPoint, data);
};

export default apiService;
