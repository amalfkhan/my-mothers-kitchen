import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(2, 0, 5, 0),
    width: "40%",
    margin: "auto",
  },
}));

const SearchBar = ({ setSearchTerm, searchTerm, setQuery }) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    setSearchTerm("");
  };

  return (
    <form className={classes.formContainer} noValidate>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={11}>
          <TextField
            fullWidth
            label="Find a recipe"
            variant="outlined"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={handleSubmit}>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
