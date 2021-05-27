import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchResults from "./components/Search/SearchResults";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <SearchResults />
      <Footer />
    </div>
  );
};

export default App;
