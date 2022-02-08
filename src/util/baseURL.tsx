import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com/';

export const Axios = axios.create({
  baseURL,
  timeout: 60000,
})