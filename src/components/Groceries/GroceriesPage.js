// component to render the page for a specific recipe page

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GroceriesTable from "./GroceriesTable";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(5, 10),
  },
}));

const GroceriesPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Grocery List</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <GroceriesTable />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GroceriesPage;
