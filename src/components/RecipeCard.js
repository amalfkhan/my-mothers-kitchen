import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const RecipeCard = ({ recipe, query }) => {
  const classes = useStyles();
  const pathArray = recipe.shareAs.split("/");
  const identifier = pathArray[pathArray.indexOf("recipe") + 1];

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {recipe.label}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {recipe.cuisineType}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Button
                component={Link}
                to={`/recipe/${identifier}`}
                color="inherit"
                size="small"
              >
                View Recipe
              </Button>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={recipe.image} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default RecipeCard;