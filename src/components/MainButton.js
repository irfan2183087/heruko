import { Box, Button } from "@mui/material";
import React from "react";
// import PropTypes from "prop-types";

function MainButton({ handleOpen, title, visibility }) {
  return (
    <Box visibility={visibility}>
      <Button
        variant="contained"
        sx={{ bgcolor: "#215f91" }}
        onClick={handleOpen}
      >
        {title}
      </Button>
    </Box>
  );
}

// MainButton.propTypes = {
//   visibility: PropTypes.string,
// };
// MainButton.defaultsPorps = {
//   visibility: "hidden",
// };

export default MainButton;
