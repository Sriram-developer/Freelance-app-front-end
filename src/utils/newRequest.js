import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelance-back-end-app.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;