import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { addBrand } from "../../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import SubModal from "../SubModal";
import Appbar from "../appbar/Appbar";
import ButtonTable from "../ButtonTable";
import StoreIcon from "@mui/icons-material/Store";
import Styles from "../Styles";

function Brand() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userArray = useSelector((state) => state.user);
  const { brands } = userArray;
  const dispatch = useDispatch();
  const [brand, setBrand] = useState({
    name: "",
    status: "",
  });
  const changeHandler = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBrand({
        id: Math.floor(Math.random() * 10000),
        name: brand.name,
        status: brand.status,
      })
    );
    setBrand({
      name: "",
      status: "",
    });
    handleClose();
  };
  return (
    <Box sx={{ m: 3 }}>
      <Appbar handleOpen={handleOpen} title="Brands" btntitle="New Brand" />
      <div>
        <SubModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          changeHandler={changeHandler}
          handleSubmit={handleSubmit}
          state={brand}
          title="New Brand"
          placeHolder="Brand Name"
          logo={<StoreIcon />}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={Styles}>Id</TableCell>
              <TableCell sx={Styles}>Brand </TableCell>
              <TableCell sx={Styles}>Status</TableCell>
              <TableCell sx={Styles} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {brands.map((brand) => (
              <TableRow
                key={brand.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {brand.id}
                </TableCell>
                <TableCell>{brand.name}</TableCell>
                <TableCell>{brand.status}</TableCell>
                <ButtonTable />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Brand;
