import axios from "axios";

export async function getData() {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts`);
}
