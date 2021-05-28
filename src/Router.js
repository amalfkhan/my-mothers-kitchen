//router for page rendering

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/Home/HomePage";
import SearchPage from "./components/Search/SearchPage";
import RecipePage from "./components/Recipe/RecipePage";
import CategoryPage from "./components/CategoryPage";
import GroceriesPage from "./components/Groceries/GroceriesPage";
import Login from "./components/Users/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/admin">
              <Login />
            </Route>
            <Route path="/recipe/:id">
              <RecipePage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route
              path="/category"
              render={(props) => <CategoryPage {...props} />}
            />
            <Route path="/groceries">
              <GroceriesPage />
            </Route>
            <Route />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
