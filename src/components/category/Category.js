import React, { useState } from "react";
import { addCategory } from "../../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
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
import CategoryModal from "./CategoryModal";
import Appbar from "../appbar/Appbar";
import ButtonTable from "../ButtonTable";
import Styles from "../Styles";

function Category() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userArray = useSelector((state) => state.user);
  const { category } = userArray;
  const dispatch = useDispatch();
  const [cat, setCat] = useState({
    name: "",
    model: "",
    memory: "",
    hardDrive: "",
    os: "",
    status: "",
  });
  const changeHandler = (e) => {
    setCat({ ...cat, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCategory({
        id: Math.floor(Math.random() * 10000),
        name: cat.name,
        model: cat.model,
        memory: cat.memory,
        hardDrive: cat.hardDrive,
        os: cat.os,
        status: cat.status,
      })
    );
    setCat({
      name: "",
      status: "",
      model: "",
      memory: "",
      hardDrive: "",
      os: "",
    });
    handleClose();
  };
  return (
    <Box sx={{ m: 3 }}>
      <Appbar
        handleOpen={handleOpen}
        title="Categories"
        btntitle="New Category"
      />
      <div>
        <CategoryModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          changeHandler={changeHandler}
          handleSubmit={handleSubmit}
          state={cat}
          title="New Category"
          placeHolder="Category Name"
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={Styles}>Id</TableCell>
              <TableCell sx={Styles}>Category </TableCell>
              <TableCell sx={Styles}>Model</TableCell>
              <TableCell sx={Styles}>Memory</TableCell>
              <TableCell sx={Styles}>Hard Drive</TableCell>
              <TableCell sx={Styles}>OS</TableCell>
              <TableCell sx={Styles}>Status</TableCell>
              <TableCell sx={Styles} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((cat) => (
              <TableRow
                key={cat.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {cat.id}
                </TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell>{cat.model}</TableCell>
                <TableCell>{cat.memory}</TableCell>
                <TableCell>{cat.hardDrive}</TableCell>
                <TableCell>{cat.os}</TableCell>
                <TableCell>{cat.status}</TableCell>
                <ButtonTable />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Category;
