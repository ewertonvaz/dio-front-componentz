import axios from "axios";

console.log(process.env);
//const baseURL = 'https://api.github.com/';

const baseURL = 'https://api.github.com/';
const api = axios.create({
  baseURL,
});

export default api;