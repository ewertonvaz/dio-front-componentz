import axios from "axios";

//const baseURL = process.env.GIT_HUB_API_URL;
const baseURL = 'https://api.github.com/';

const api = axios.create({
  baseURL,
});

export default api;