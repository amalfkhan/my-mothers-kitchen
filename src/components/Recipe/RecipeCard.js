import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import AddButton from "./AddButton";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
    padding: theme.spacing(3),
  },
  cardMedia: {
    width: 210,
  },
  groceryButton: {
    float: "right",
  },
  buttonContainer: {
    paddingTop: theme.spacing(3),
  },
}));

const RecipeCard = ({ recipe, query }) => {
  const classes = useStyles();
  const pathArray = recipe.shareAs.split("/");
  const identifier = pathArray[pathArray.indexOf("recipe") + 1];

  return (
    <Grid item md={12} lg={6} xl={4}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h6">
              {recipe.label}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {recipe.cuisineType}
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                component={Link}
                to={`/recipe/${identifier}`}
                color="inherit"
                size="small"
              >
                View Recipe
              </Button>
              <AddButton recipe={recipe} />
            </div>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={recipe.image} />
        </Hidden>
      </Card>
    </Grid>
  );
};

export default RecipeCard;
