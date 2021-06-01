// entry point to app globally providing access to recipes saved to the grocery list
import React from "react";
import Router from "./Router";
import { GroceriesContextProvider } from "./context/GroceriesContext";

const App = () => {
  return (
    <GroceriesContextProvider>
      <Router />
    </GroceriesContextProvider>
  );
};

export default App;
