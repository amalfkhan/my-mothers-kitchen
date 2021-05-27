import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import RecipeDataService from "../../services/recipe.service";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("beef");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const recipes = await RecipeDataService.find(query);
    setRecipes(recipes.hits);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <SearchBar
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setQuery={setQuery}
        />
        <Grid container spacing={4}>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SearchResults;
