import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import GroceriesContext from "../../context/GroceriesContext";

const useStyles = makeStyles((theme) => ({
  groceryButton: {
    float: "right",
  },
  buttonContainer: {
    paddingTop: theme.spacing(3),
  },
}));

const AddButton = ({ recipe }) => {
  const classes = useStyles();
  const [groceries, setGroceries] = useContext(GroceriesContext);
  const [saved, setSaved] = useState(false);
  const recipeName = recipe.label;

  useEffect(() => {
    if (groceries.hasOwnProperty(recipeName)) setSaved(true);
  }, [saved]);

  const handleClick = () => {
    var updatedGroceries = groceries;
    if (groceries.hasOwnProperty(recipeName)) {
      delete updatedGroceries[recipeName];
    } else {
      updatedGroceries[recipeName] = ["b", "c", "x", "y"];
    }
    setGroceries(updatedGroceries);
    setSaved(!saved);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClick}
        color="inherit"
        size="small"
        className={classes.groceryButton}
        endIcon={
          saved ? <CheckBoxOutlinedIcon /> : <ShoppingCartOutlinedIcon />
        }
      >
        {saved ? "Remove from groceries" : "Save to groceries"}
      </Button>
    </React.Fragment>
  );
};

export default AddButton;
