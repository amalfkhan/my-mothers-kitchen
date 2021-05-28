// component to render the page for a specific recipe page

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GroceriesContext from "../../context/GroceriesContext";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(5, 10),
  },
  recipeBody: {
    margin: theme.spacing(4, 0),
  },
  recipeBodyText: {
    margin: theme.spacing(2, 0),
    color: "#3f3f3f",
  },
}));

const ingredients = [
  "2 cups Brussels sprouts, halved",
  "1 red apple cut into 1-inch cubes",
  "1 (4 ounce) package pancetta",
  "2 tablespoons olive oil, divided",
  "1 teaspoon minced fresh rosemary",
  "6 skinless, boneless chicken thighs",
  "salt and ground black pepper to taste",
];

const RecipePage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const value = useContext(GroceriesContext);
  console.log(value);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h4">Groceries</Typography>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            {Object.keys(value.groceries).map((ingredient, index) => (
              <Typography variant="body1" className={classes.recipeBodyText}>
                {ingredient}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default RecipePage;
