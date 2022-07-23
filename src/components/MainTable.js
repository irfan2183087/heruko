import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import ButtonTable from "./ButtonTable";

// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 650,
//   },

//   tableCell: {
//     fontWeight: "bold",
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.getContrastText(theme.palette.primary.main),
//   },
// }));
import Styles from "./Styles";

function MainTable({ rows }) {
  // const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "650" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={Styles}>ID</TableCell>
            <TableCell sx={Styles}>NAME</TableCell>
            <TableCell sx={Styles}>EMAIL</TableCell>
            <TableCell sx={Styles}>Role</TableCell>
            <TableCell sx={Styles}>PASSWORD</TableCell>
            <TableCell sx={Styles} align="center">
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.userName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.password}</TableCell>
              <ButtonTable />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MainTable;
