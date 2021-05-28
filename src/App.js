//router for page rendering

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/Home/HomePage";
import SearchPage from "./components/Search/SearchPage";
import RecipePage from "./components/Recipe/RecipePage";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
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
            <Route />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
