import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSeller } from "../../redux/reduxSlice";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SuplierModal from "./SuplierModal";
import Styles from "../Styles";
import Appbar from "../appbar/Appbar";
import ButtonTable from "../ButtonTable";

function Suplier() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userArray = useSelector((state) => state.user);
  const { suplier } = userArray;
  const dispatch = useDispatch();
  const [sel, setSel] = useState({
    name: "",
    contect: "",
    company: "",
    status: "",
  });
  const changeHandler = (e) => {
    setSel({ ...sel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addSeller({
        id: Math.floor(Math.random() * 10000),
        name: sel.name,
        contect: sel.contect,
        company: sel.company,
        status: sel.status,
      })
    );
    setSel({
      name: "",
      contect: "",
      company: "",
      status: "",
    });
    handleClose();
  };
  return (
    <Box sx={{ m: 3 }}>
      <Appbar handleOpen={handleOpen} title="Suplier" btntitle="New Suplier" />
      <div>
        <SuplierModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          changeHandler={changeHandler}
          handleSubmit={handleSubmit}
          state={sel}
          title="New Suplier"
          placeHolder="Suplier Name"
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={Styles}>Id</TableCell>
              <TableCell sx={Styles}>Name </TableCell>
              <TableCell sx={Styles}>Contect</TableCell>
              <TableCell sx={Styles}>Company</TableCell>
              <TableCell sx={Styles} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suplier.map((cat) => (
              <TableRow
                key={cat.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {cat.id}
                </TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell>{cat.contect}</TableCell>
                <TableCell>{cat.company}</TableCell>
                <ButtonTable />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Suplier;
