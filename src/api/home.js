import axios from "axios";
import { config } from "../config";

export async function getData() {
  return await axios.get(`${config.api_host}recruitment`, {
    headers: {
      authorization: `Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y`,
    },
  });
}
