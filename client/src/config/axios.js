import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/blog/api",
});

export default instance;
