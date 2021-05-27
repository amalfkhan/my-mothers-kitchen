// component to render the page for a specific recipe page

import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const RecipePage = () => {
  const { id } = useParams();
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
    >
      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
        Lorem ipsum dolor sit amet {id}
      </Typography>
      <Typography variant="h5" color="inherit" paragraph>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Typography>
    </Paper>
  );
};

export default RecipePage;
