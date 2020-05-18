import axios from "axios";

export const KEY = "AIzaSyCxKb-XjR1g7eAGu3LnVZe3xxAQdxsGQXI";
export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
