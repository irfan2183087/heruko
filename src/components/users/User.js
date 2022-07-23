import React, { forwardRef, useState } from "react";
import { Box } from "@mui/material";
import { add } from "../../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import MainModal from "../MainModal";
import MainTable from "../MainTable";
import "./user.scss";
import Appbar from "../appbar/Appbar";

const User = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userArray = useSelector((state) => state.user);
  const { rows, roles } = userArray;
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    role: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add({
        id: Math.floor(Math.random() * 10000),
        userName: user.userName,
        email: user.email,
        role: user.role,
        password: user.password,
      })
    );
    setUser({
      userName: "",
      email: "",
      role: "",
      password: "",
    });
    handleClose();
  };
  return (
    <Box sx={{ m: 3 }}>
      <Appbar handleOpen={handleOpen} title="Members" btntitle="New Member" />
      <div>
        <MainModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          changeHandler={changeHandler}
          handleSubmit={handleSubmit}
          state={user}
          roles={roles}
        />
      </div>

      <MainTable ref={ref} rows={rows} />
    </Box>
  );
});
export default User;
