import axios from "axios";

export const fetchEmojies = () => {
  console.log("inside fetchEmojies");
  return axios.get("https://api.github.com/emojis");
};
