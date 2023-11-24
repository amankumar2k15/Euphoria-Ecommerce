import axios from "axios";
import { getToken } from "../helper/token.helper";
const { VITE_BACKEND_PORT } = import.meta.env


axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

export const LoginService = async (data) => {
  return await axios.post(`${VITE_BACKEND_PORT}user/signin`, data);
};

export const RegisterService = async (data) => {
  return await axios.post(`${VITE_BACKEND_PORT}user/signup`, data);
};


