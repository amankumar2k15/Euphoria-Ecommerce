import axios from "axios";
import { getToken } from "../helper/token.helper";
const { VITE_BACKEND_PORT_PRODUCTION  , VITE_BACKEND_PORT_DEVELOPMENT } = import.meta.env
const API = VITE_BACKEND_PORT_PRODUCTION  || VITE_BACKEND_PORT_DEVELOPMENT


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

//User
export const LoginService = async (data) => {
  return await axios.post(`${API}user/signin`, data);
};

export const RegisterService = async (data) => {
  return await axios.post(`${API}user/signup`, data);
};

//Product
export const ProductGetService = async () => {
  return await axios.get(`${API}product/get-product`)
}

