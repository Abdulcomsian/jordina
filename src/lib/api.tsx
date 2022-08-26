import Axios, { AxiosResponse, AxiosError } from "axios";
// const baseURL = 'https://zine.accrualhub.com/public/';
const baseURL = "http://127.0.0.1:8000/";
const commonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const axios = Axios.create({
  baseURL: baseURL + "api/",
  headers: commonHeaders,
});

const Login = (payload: any) => {
  console.log("Pay load :", payload);
  return axios
    .post("login", payload)
    .then(({ data }: AxiosResponse) => data)
    .catch(({ response }: AxiosError) => {
      return response?.data;
    });
};
export default {
  Login,
};
