import axios from 'axios';

console.log(process.env.BASEURL);
console.log('hola');
const axiosClient = axios.create({
  baseURL: process.env.BASEURL,
});

export default axiosClient;
