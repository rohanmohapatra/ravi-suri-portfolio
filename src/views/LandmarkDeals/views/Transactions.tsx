import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Heading } from "../../../components/Heading";
import { nonPowerWater, powerWater } from "../Data";

const useStyles = makeStyles(
  (theme) =>
    theme && {
      root: {
        height: "100%",
        color: theme.palette.primary.contrastText,
      },
      paper: {
        backgroundColor: theme.palette.primary.light,
      },
      sectionOne: { padding: 40 },
    }
);

export const Transactions: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Summary of key transactions" />
      <div className={classes.sectionOne}>
        <Typography variant="h4">Power {"&"} Water</Typography>
        <TransactionTable
          rows={powerWater}
          total={{ capacity: "54,600 MW, 1654 MIGD", debt: "USD 58 Bn" }}
        />
      </div>
      <div className={classes.sectionOne}>
        <Typography variant="h4">Other than Power {"&"} Water</Typography>
        <TransactionTable
          rows={nonPowerWater}
          total={{ capacity: "-", debt: "USD 25 Bn" }}
        />
      </div>
    </div>
  );
};

interface Row {
  Serial: number;
  "Project name": string;
  "Project Capacity": string;
  "Debt Raised": string;
}

export const TransactionTable: React.FC<{
  rows: Row[];
  total: {
    capacity: string;
    debt: string;
  };
}> = (props) => {
  const { rows } = props;
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="other than power and water">
        <TableHead>
          <TableRow>
            <TableCell align="center">Sr. No.</TableCell>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="center">Project Capacity</TableCell>
            <TableCell align="center">Total Debt Raised</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row["Serial"]}>
              <TableCell component="th" scope="row" align="center">
                {row["Serial"]}
              </TableCell>
              <TableCell align="center">{row["Project name"]}</TableCell>
              <TableCell align="center">{row["Project Capacity"]}</TableCell>
              <TableCell align="center">{row["Debt Raised"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Total
            </TableCell>
            <TableCell align="center">{props.total.capacity}</TableCell>
            <TableCell align="center">{props.total.debt}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};
