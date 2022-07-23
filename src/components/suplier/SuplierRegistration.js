import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { useSelector } from "react-redux";
const theme = createTheme();

function SuplierRegistration({ changeHandler, handleSubmit, state, title }) {
  const array = useSelector((state) => state.user);

  const { status } = array;

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <CategoryIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Supplier Name"
              type="text"
              value={state.name}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="contect"
              label="Contect No"
              type="text"
              value={state.contect}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="company"
              label="Company Name"
              type="text"
              value={state.company}
              onChange={changeHandler}
            />

            <TextField
              size="small"
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              select
              fullWidth
              name="status"
              label="Status"
              value={state.status}
              onChange={changeHandler}
            >
              {status.map((option) => (
                <MenuItem key={option.id} value={option.name}>
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
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SuplierRegistration;
