import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Slide } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function MainAlert({ newalert }) {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    Transition: SlideTransition,
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      {newalert && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={true}
            autoHideDuration={6000}
            key={vertical + horizontal}
          >
            <Alert severity={newalert.type} sx={{ width: "100%" }}>
              {newalert.msg}!
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </div>
  );
}
