import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  titleBackground: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70vh",
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  title: {
    position: "relative",
    padding: theme.spacing(25, 0),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.titleBackground}>
      <div className={classes.overlay} />
      <Grid container className={classes.titleContainer}>
        <Grid item md={6}>
          <div className={classes.title}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid></Grid>
    </Paper>
  );
};

export default HomePage;
