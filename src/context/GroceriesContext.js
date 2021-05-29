// determine whether a user is logged in and access to the specific user data

import React, { createContext, useState } from "react";

const GroceriesContext = createContext();

const GroceriesContextProvider = (props) => {
  const [groceries, setGroceries] = useState({
    Chicken: [
      "Lemon Pepper Chicken",
      "Honey Garlic Chicken Breast",
      "Simple Homemade Chicken Ramen",
      "Filipino Chicken Adobo",
    ],
    "Soya Sauce": [
      "Honey Garlic Chicken Breast",
      "Simple Homemade Chicken Ramen",
      "Filipino Chicken Adobo",
    ],
    Garlic: [
      "Honey Garlic Chicken Breast",
      "Simple Homemade Chicken Ramen",
      "Filipino Chicken Adobo",
    ],
    Scallions: ["Filipino Chicken Adobo", "Simple Homemade Chicken Ramen"],
    Chickpeas: ["Trinidad Doubles", "Lebanese Hummus"],
    Pita: ["Chicken Korma", "Chicken Shawarma"],
  });

  return (
    <GroceriesContext.Provider value={[groceries, setGroceries]}>
      {props.children}
    </GroceriesContext.Provider>
  );
};

export default GroceriesContext;
export { GroceriesContextProvider };
