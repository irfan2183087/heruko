import DeleteForever from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { TableCell } from "@mui/material";
import React from "react";

function ButtonTable() {
  return (
    <TableCell align="center">
      <EditIcon sx={{ mr: 1 }} color="success" />
      <DeleteForever color="error" />
    </TableCell>
  );
}

export default ButtonTable;
