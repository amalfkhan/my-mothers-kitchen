// component to render the page for a specific recipe page

import React, { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import GroceriesContext from "../../context/GroceriesContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    background: "#EBEDEE !important",
  },
  body: {
    background: "#EBEDEE !important",
  },
});

// const TableHead = withStyles((theme) => ({
//   root: {
//     backgroundColor: "orange",
//     fontSize: "800",
//   },
// }))(MuiTableHead);

const GroceriesTable = () => {
  const classes = useStyles();
  const [groceries, setGroceries] = useContext(GroceriesContext);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell>ingredient</TableCell>
            <TableCell align="left">Associated Recipes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          {Object.keys(groceries).map((ingredient) => (
            <TableRow key={ingredient}>
              <TableCell component="th" scope="row">
                {ingredient}
              </TableCell>
              <TableCell align="left">
                {groceries[ingredient].join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GroceriesTable;
