import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://freelance-back-end-app.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;