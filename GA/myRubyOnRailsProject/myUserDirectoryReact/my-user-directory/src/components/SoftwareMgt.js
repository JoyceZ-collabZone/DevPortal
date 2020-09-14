import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

import { call_getSoftwares } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function SoftwareMgt(props) {
  const classes = useStyles();
  const [softwares, setSoftwares] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call_getSoftwares().then((result) => {
      console.log("logging softwares ", result);
      setSoftwares(result);
      setLoading(false);
    });
  }, []);
  //   const mapSoftwares = () => {
  //     return softwares.map((software) => {
  //       <h1>{software.name}</h1>;
  //     });
  //   };

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Organisation</TableCell>
            <TableCell>Software Product Description</TableCell>
            <TableCell>Purpose</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && <CircularProgress />}
          {softwares.map((software) => (
            <TableRow key={software._id}>
              <TableCell>{software.name}</TableCell>
              <TableCell>{software.organisation}</TableCell>
              <TableCell>{software.description}</TableCell>
              <TableCell>{software.status}</TableCell>
              <TableCell>
                {" "}
                <Button variant="contained" color="secondary">
                  Delete Product
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SoftwareMgt;
