// component to render the page for a specific recipe page

import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(5, 10),
  },
  image: {
    // marginLeft: theme.spacing(2),
    height: 400,
  },
  estimates: {
    backgroundColor: "#ebedee",
    padding: theme.spacing(3),
    marginLeft: theme.spacing(2),
    border: "2px solid #3f3f3f",
  },
  estimatesText: {
    margin: theme.spacing(2),
    color: "#3f3f3f",
  },
  recipeBody: {
    margin: theme.spacing(4, 0),
  },
  recipeBodyText: {
    margin: theme.spacing(2, 0),
    color: "#3f3f3f",
  },
}));

const estimates = [
  "Prep time: 0.5hrs",
  "Cook time: 1.5hrs",
  "Total time: 2hrs",
  "Servings: 4",
];

const ingredients = [
  "2 cups Brussels sprouts, halved",
  "1 red apple cut into 1-inch cubes",
  "1 (4 ounce) package pancetta",
  "2 tablespoons olive oil, divided",
  "1 teaspoon minced fresh rosemary",
  "6 skinless, boneless chicken thighs",
  "salt and ground black pepper to taste",
];

const directions = [
  "1. In a medium mixing bowl, mix together the flour(s), sugar, baking powder, baking soda and salt.",
  "2. In a liquid measuring cup, measure out the buttermilk. Beat in the egg and vanilla extract.",
  "3. All at once, add the wet ingredients to the dry ingredients and mix until just combined. The batter should have some small to medium lumps. Set aside while you warm the skillet or griddle.",
  "4. Preheat your skillet or griddle over medium-low heat (if using an electric griddle, preheat it to 350 degrees Fahrenheit). Brush the cooking surface with 1 ½ teaspoons of butter.",
  "5. Give the batter a light swirl with a spoon in case the buckwheat is starting to separate from the liquid. Using a ¼-cup measure, scoop the batter onto the warm skillet. Cook for 2 to 3 minutes until small bubbles form on the surface of the pancakes (you’ll know it’s ready to flip when about 1 inch of the perimeter is matte instead of glossy), and flip. Cook on the opposite sides for 1 to 2 minutes, or until golden brown.",
  "6. Transfer the cooked pancakes to a cooling rack, or to a baking sheet in a preheated 200 degree Fahrenheit oven to keep warm.",
];

const RecipePage = () => {
  const { id } = useParams();
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h2">Buckwheat Pancakes</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" paragraph>
              Ever tried buckwheat pancakes? Sure, they aren’t the prettiest
              pancakes around, but they make up for their humble appearance with
              wonderful flavor and texture. Buckwheat, a gluten-free relative of
              rhubarb, has a delicate, almost nutty flavor all its own. Thanks
              to the buckwheat flour, these pancakes are naturally gluten free!
              These pancakes possess a light and airy consistency that quietly
              surrenders to the pressure of a fork and soaks up maple syrup like
              a sponge. I just love them.
            </Typography>
          </Grid>
          <Grid
            className={classes.image}
            item
            xs={8}
            style={{
              backgroundImage: `url("https://source.unsplash.com/random")`,
            }}
          />
          <Grid
            item
            container
            direction="column"
            xs={4}
            justify="center"
            alignContent="center"
          >
            <Paper className={classes.estimates} elevation={0}>
              {estimates.map((estimate) => (
                <Grid item>
                  <Typography
                    className={classes.estimatesText}
                    variant="body1"
                    color="textSecondary"
                  >
                    {estimate}
                  </Typography>
                </Grid>
              ))}
            </Paper>
          </Grid>
          <Grid
            container
            item
            direction="column"
            spacing={4}
            className={classes.recipeBody}
            xs={4}
          >
            <Grid item>
              <Typography variant="h6">Ingredients</Typography>
            </Grid>
            <Divider />
            <Grid item>
              {ingredients.map((ingredient, index) => (
                <Typography variant="body1" className={classes.recipeBodyText}>
                  {ingredient}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="column"
            spacing={4}
            className={classes.recipeBody}
            xs={8}
          >
            <Grid item>
              <Typography variant="h6">Directions</Typography>
            </Grid>
            <Divider />
            <Grid item>
              {directions.map((direction, index) => (
                <Typography variant="body1" className={classes.recipeBodyText}>
                  {direction}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default RecipePage;
