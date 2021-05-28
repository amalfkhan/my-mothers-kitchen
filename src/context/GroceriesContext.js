// determine whether a user is logged in and access to the specific user data

import React, { createContext, useEffect, useState } from "react";

const GroceriesContext = createContext();

const GroceriesContextProvider = (props) => {
  const [groceries, setGroceries] = useState({
    pickles: ["sourkraut", "burgers"],
    lettuce: ["pecan salad", "sandwich"],
    seranos: ["chicken saalan", "haleem"],
    chicken: ["korma", "parmasean chicken"],
  });

  return (
    <GroceriesContext.Provider value={[groceries, setGroceries]}>
      {props.children}
    </GroceriesContext.Provider>
  );
};

export default GroceriesContext;
export { GroceriesContextProvider };
