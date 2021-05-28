import React, { useEffect, useState } from "react";
import QueryString from "query-string";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import RecipeDataService from "../services/recipe.service";
import RecipeCard from "./RecipeCard";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(5, 3),
  },
}));

const CategoryPage = (props) => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const queries = QueryString.parse(props.location.search); // create an array of path query key values
  const category = Object.keys(queries)[0];
  const value = queries[category];

  useEffect(() => {
    getRecipes();
  }, [value]);

  const getRecipes = async () => {
    const recipes = await RecipeDataService.find({
      key: category,
      value: value,
    });
    setRecipes(recipes.hits);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Grid container spacing={4}>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CategoryPage;
