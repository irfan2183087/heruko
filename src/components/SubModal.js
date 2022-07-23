import { Box, Modal } from "@mui/material";
import React from "react";
import SubRegistration from "./SubRegistration";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};
function SubModal({
  handleClose,
  handleopen,
  open,
  handleSubmit,
  changeHandler,
  state,
  title,
  placeHolder,
}) {
  return (
    <Modal
      sx={{ m: 2 }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <SubRegistration
          state={state}
          handleSubmit={handleSubmit}
          changeHandler={changeHandler}
          title={title}
          placeHolder={placeHolder}
        />
      </Box>
    </Modal>
  );
}

export default SubModal;
