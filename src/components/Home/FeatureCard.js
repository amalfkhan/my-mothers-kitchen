import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 345,
  // },
  media: {
    height: 140,
  },
  content: {
    padding: theme.spacing(2, 3),
  },
  button: {
    padding: theme.spacing(0, 3, 3, 3),
  },
}));

const Feature = ({ category }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {category.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {category.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="small">View recipes</Button>
      </CardActions>
    </Card>
  );
};

export default Feature;
