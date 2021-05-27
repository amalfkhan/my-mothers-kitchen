import axios from "axios";

export default axios.create({
  withCredentials: true,
  credentials: "include",
  baseURL: `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`,
  headers: {
    "Content-type": "application/json",
  },
});
