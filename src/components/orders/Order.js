import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import Appbar from "../appbar/Appbar";
function Order() {
  const userArray = useSelector((state) => state.user);
  const { rows } = userArray;
  return (
    <Box sx={{ m: 3 }}>
      <Appbar title="New Order" btntitle="New Brand" visibility="hidden" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <ModalAvatar title="Sign up" icon={<LockOutlinedIcon />} /> */}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              size="small"
              select
              fullWidth
              name="role"
              label="Name"
            >
              {rows.map((option) => (
                <MenuItem key={option.userName} value={option.userName}>
                  {option.userName}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              type=""
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="PO"
              name="number"
              // value={state.email}
              // onChange={changeHandler}
              autoFocus
            />

            <TextField
              type="text"
              margin="normal"
              size="small"
              required
              fullWidth
              label="Product"
              name="number"
              // value={state.email}
              // onChange={changeHandler}
              autoFocus
            />
            <TextField
              type="text"
              margin="normal"
              size="small"
              required
              fullWidth
              label="Quantity"
              name="number"
              // value={state.email}
              // onChange={changeHandler}
              autoFocus
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="textArea"
              // value={state.description}
              // onChange={changeHandler}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleSubmit}
              // disabled={state.userName.length < 5 || state.password.length < 5}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Order;
