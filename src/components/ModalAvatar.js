import { Avatar, Typography } from "@mui/material";
import React from "react";

function ModalAvatar({ title, icon }) {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "#215f91" }}>{icon}</Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
    </>
  );
}

export default ModalAvatar;
