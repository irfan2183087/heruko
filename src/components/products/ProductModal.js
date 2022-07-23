import { Box, Modal } from "@mui/material";
import React from "react";
import ProductRegistration from "./ProductRegistration";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};
function ProductModal({
  handleClose,
  handleopen,
  open,
  handleSubmit,
  changeHandler,
  state,
  title,
  placeHolder,
  dateValue,
  handleChange,
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
        <ProductRegistration
          state={state}
          handleSubmit={handleSubmit}
          changeHandler={changeHandler}
          title={title}
          placeHolder={placeHolder}
          defaultValue={dateValue}
          handleChange={handleChange}
        />
      </Box>
    </Modal>
  );
}

export default ProductModal;
