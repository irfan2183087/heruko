import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Appbar from "../appbar/Appbar";
import ButtonTable from "../ButtonTable";
import Styles from "../Styles";

function Asset() {
  const userArray = useSelector((state) => state.user);
  const { assign } = userArray;

  return (
    <Box sx={{ m: 3 }}>
      <Appbar title="Assets" btntitle="Assets" visibility="hidden" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={Styles}>Id</TableCell>
              <TableCell sx={Styles}>Product Name</TableCell>
              <TableCell sx={Styles}>Quanitity</TableCell>
              <TableCell sx={Styles}>Transfer By</TableCell>
              <TableCell sx={Styles}>Office</TableCell>
              <TableCell sx={Styles}>Description</TableCell>
              <TableCell sx={Styles} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assign.map((brand) => (
              <TableRow
                key={brand.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {brand.id}
                </TableCell>
                <TableCell>{brand.name}</TableCell>
                <TableCell>{brand.quantity}</TableCell>
                <TableCell>{brand.transfer}</TableCell>
                <TableCell>{brand.office}</TableCell>
                <TableCell>{brand.description}</TableCell>

                <ButtonTable />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Asset;
