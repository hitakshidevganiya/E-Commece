import axios from "axios";
import { BASE_URL } from "../url/url";


export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
},
  { synchronous: true, runWhen: () => { } }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(function onFulfilled(response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async function onRejected(error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  console.log(error);

  if (error.response && error.response.status === 401) {
    const response = await axios.post(BASE_URL + 'user/generateNewToken', {}, { withCredentials: true })
    console.log(response);

    return axiosInstance(error.config)

  }

  return Promise.reject(error);
});