import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { addStore } from "../../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import SubModal from "../SubModal";
import Appbar from "../appbar/Appbar";
import ButtonTable from "../ButtonTable";
import Styles from "../Styles";

function MainStore() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userArray = useSelector((state) => state.user);
  const { mstore } = userArray;
  const dispatch = useDispatch();
  const [store, setStore] = useState({
    name: "",
    status: "",
  });
  const changeHandler = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addStore({
        id: Math.floor(Math.random() * 10000),
        name: store.name,
        status: store.status,
      })
    );
    setStore({
      name: "",
      status: "",
    });
    handleClose();
  };
  return (
    <Box sx={{ m: 3 }}>
      <Appbar handleOpen={handleOpen} title="Offices" btntitle="New office" />

      <div>
        <SubModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          changeHandler={changeHandler}
          handleSubmit={handleSubmit}
          state={store}
          title="New office"
          placeHolder="Office Location"
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={Styles}>Id</TableCell>
              <TableCell sx={Styles}>Offices</TableCell>
              <TableCell sx={Styles}>Status</TableCell>
              <TableCell sx={Styles} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mstore.map((s) => (
              <TableRow
                key={s.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {s.id}
                </TableCell>
                <TableCell>{s.name}</TableCell>
                <TableCell>{s.status}</TableCell>
                <ButtonTable />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default MainStore;
