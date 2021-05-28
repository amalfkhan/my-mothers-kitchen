import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(4),
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    margin: theme.spacing(3, 0),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
  { title: "salad", url: "/category?dishType=salad" },
  { title: "lunch", url: "/category?mealType=lunch" },
  { title: "dinner", url: "/category?mealType=dinner" },
  { title: "soups", url: "/category?dishType=soup" },
  { title: "mediterranean", url: "/category?cuisineType=mediterranean" },
  { title: "south asian", url: "/category?cuisineType=indian" },
  { title: "western", url: "/category?cuisineType=american" },
  { title: "chicken", url: "/category?q=chicken" },
  { title: "beef", url: "/category?q=beef" },
  { title: "vegetarian", url: "/category?health=vegetarian" },
];

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button
          component={Link}
          to={"/search"}
          color="inherit"
          size="small"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          My Mother's Kitchen
        </Typography>
        <Button variant="outlined" size="small">
          Admin
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section, index) => (
          <Button
            component={Link}
            to={section.url}
            color="inherit"
            noWrap
            key={index}
            className={classes.toolbarLink}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
