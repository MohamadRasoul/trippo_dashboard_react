import Axios from "axios";
import { toast } from "react-hot-toast";

const TOKEN =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const axios = Axios.create({
  baseURL: import.meta.env.VITE_HOST_API + '/api',
});
axios.interceptors.request.use(
  (request) => {
    request.headers = {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${TOKEN}`,
    };
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error") {
      toast.error("Network error");
    } else if (+error?.response?.status === 404) {
      //404
      toast.error("Not Found");
    } else if (+error?.response?.status === 401) {
      //401
      localStorage.token = "";
      if (typeof window !== "undefined") window.location.replace("/login");
    } else if (+error?.response?.status === 403) {
      //403
      toast.error("unauthorized");
      localStorage.token = "";
      if (typeof window !== "undefined") window.location.replace("/login");
    } else if (+error?.response?.status === 500) {
      //500
      toast.error(error?.response?.data?.message);
    } else if (+error?.response?.status === 422) {
      //422
    } else toast.error("some thing error");
    return Promise.reject(error);
  }
);

export default axios;
