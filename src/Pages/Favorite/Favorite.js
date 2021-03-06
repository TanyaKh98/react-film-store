import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import MainNav from "../../components/MainNav/MainNav";

import { storeContext } from "../../components/context/StoreContext";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    background: "rgb(238,174,202)",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  },
  paper: {
    maxWidth: 1000,
    margin: "40px auto",
  },
});

export default function Cart() {
  const classes = useStyles();
  const { favorite, getFavorite } = useContext(storeContext);

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <>
      <MainNav>
        <TableContainer component={Paper} className={classes.paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {favorite.products ? (
                <>
                  {favorite.products.map((elem) => (
                    <TableRow key={elem.item.id}>
                      <TableCell>
                        <img
                          style={{
                            width: "120px",
                            border: "2px solid #005a8d",
                          }}
                          src={elem.item.images[0]}
                          alt=""
                        />{" "}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          fontSize: "15px",
                          color: "#005a8d",
                          fontWeight: "bold",
                        }}
                      >
                        {elem.item.title}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "20px",
                          color: "#005a8d",
                          fontWeight: "bold",
                        }}
                        align="right"
                      >
                        {elem.item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>
      </MainNav>
    </>
  );
}
