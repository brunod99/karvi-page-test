import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.BASEURL,
});

export default axiosClient;
