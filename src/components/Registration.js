import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import ModalAvatar from "./ModalAvatar";

// const theme = createTheme();

function Registration({ changeHandler, handleSubmit, state, handleClose }) {
  const userArray = useSelector((s) => s.user);
  const { roles } = userArray;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ModalAvatar title="Sign up" icon={<LockOutlinedIcon />} />
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            name="userName"
            label="User Name"
            type="text"
            value={state.userName}
            onChange={changeHandler}
          />
          <TextField
            type="email"
            margin="normal"
            size="small"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={state.email}
            onChange={changeHandler}
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            name="password"
            label="Password"
            value={state.password}
            onChange={changeHandler}
            id="password"
            type="password"
          />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-select-currency"
            size="small"
            select
            fullWidth
            name="role"
            label="Role"
            value={state.role}
            onChange={changeHandler}
          >
            {roles.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            disabled={state.userName.length < 5 || state.password.length < 5}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Registration;
