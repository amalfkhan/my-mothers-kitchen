// component to render login form

import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(5, 5, 2, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 300,
    backgroundColor: "#f9f9fa !important",
  },
  form: {
    width: "100%",
    margin: theme.spacing(3),
  },
  helperText: {
    color: "red",
  },
}));

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async () => {
    setError("invalid email");
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Admin
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={3} align="center">
            <Grid item xs={12}>
              <TextField
                size="small"
                color="inherit"
                // variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={user.email}
                onChange={(e) => {
                  setError("");
                  handleInputChange(e);
                }}
                autoFocus
                helperText={error}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                // variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                value={user.password}
                type="password"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="inherit" onClick={login}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
