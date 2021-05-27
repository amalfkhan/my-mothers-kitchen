import http from "./http-common";

const baseUrl = `https://api.edamam.com/search?q=`;
const apiAccess = `&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;

class RecipeDataService {
  async find(query) {
    const res = await fetch(`${baseUrl}${query}${apiAccess}`);
    // const data = await res.json();
    // return data;
    return await res.json();
  }
}

export default new RecipeDataService();
