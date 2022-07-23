import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import ModalAvatar from "../ModalAvatar";

const statusArray = [
  {
    value: "Active",
  },
  {
    value: "InActive",
  },
];
const catArray = [
  {
    value: "Laptop",
  },
  {
    value: "Mobile",
  },
  {
    value: "Tabs",
  },
];

const theme = createTheme();

function CategoryRegistration({
  changeHandler,
  handleSubmit,
  state,
  title,
  placeHolder,
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
          <ModalAvatar title={title} icon={<CategoryIcon />} />
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              size="small"
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              select
              fullWidth
              name="name"
              label="Category"
              value={state.name}
              onChange={changeHandler}
            >
              {catArray.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="model"
              label="Model"
              type="text"
              value={state.model}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="memory"
              label="Memory"
              type="text"
              value={state.memory}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="hardDrive"
              label="Hard Drive"
              type="text"
              value={state.hardDrive}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="os"
              label="OS"
              type="text"
              value={state.os}
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
export default CategoryRegistration;
