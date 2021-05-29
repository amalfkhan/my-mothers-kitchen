// determine whether a user is logged in and access to the specific user data

import React, { createContext, useState } from "react";

const GroceriesContext = createContext();

const GroceriesContextProvider = (props) => {
  const [groceries, setGroceries] = useState({
    "Lemon Pepper Chicken": ["x", "y"],
    "Chicken Salad": ["x", "a"],
    "Beef Tacos": ["a", "b"],
  });

  return (
    <GroceriesContext.Provider value={[groceries, setGroceries]}>
      {props.children}
    </GroceriesContext.Provider>
  );
};

export default GroceriesContext;
export { GroceriesContextProvider };
