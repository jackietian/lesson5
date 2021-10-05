import axios from "axios";

export const fetchRepos = () =>
  axios.get('https://api.github.com/users/jackietian/repos');
