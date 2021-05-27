// api call endpoints

import http from "./http-common";

const baseUrl = `https://api.edamam.com/search?`;
const apiAccess = `&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&`;

class RecipeDataService {
  async find({ key, value }) {
    console.log(key);
    console.log(value);
    const search = `${key}=${value}`;
    if (key === "q") var url = `${baseUrl}${search}${apiAccess}`;
    else var url = `${baseUrl}q=chicken${apiAccess}${search}`;
    console.log(url);
    const res = await fetch(url);
    return await res.json();
  }
}

export default new RecipeDataService();
