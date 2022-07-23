import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem } from "@mui/material";
import ModalAvatar from "./ModalAvatar";

const statusArray = [
  {
    value: "Active",
    // label: '$',
  },
  {
    value: "InActive",
    // label: '€',
  },
];

const theme = createTheme();

function SubRegistration({
  changeHandler,
  handleSubmit,
  state,
  title,
  placeHolder,
  logo,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ModalAvatar title={title} icon={logo} />

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label={placeHolder}
              type="text"
              value={state.name}
              onChange={changeHandler}
            />
            <TextField
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              select
              fullWidth
              name="status"
              label="Status"
              value={state.status}
              onChange={changeHandler}
            >
              {statusArray.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SubRegistration;
