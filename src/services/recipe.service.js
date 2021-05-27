// api call endpoints

import http from "./http-common";

const baseUrl = `https://api.edamam.com/search?`;
const apiAccess = `&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&`;

class RecipeDataService {
  async find(query) {
    const res = await fetch(`${baseUrl}${query}${apiAccess}`);
    return await res.json();
  }
}

export default new RecipeDataService();
