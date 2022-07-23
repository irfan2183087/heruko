import React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoryIcon from "@mui/icons-material/Category";
import { Button, MenuItem, TextField } from "@mui/material";
import { useSelector } from "react-redux";
const theme = createTheme();
function AssetRegistration({ state, title, item, handleSubmit, handleChange }) {
  const { name } = item;
  const array = useSelector((state) => state.user);
  const { mstore } = array;

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
              InputProps={{
                readOnly: true,
              }}
              display="none"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Product Name"
              type="text"
              value={name}
              // onChange={handleChange}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Quanitity Assign"
              type="number"
              value={state.quantity}
              onChange={handleChange}
            />
            <TextField
              size="small"
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              select
              fullWidth
              name="office"
              label="Office"
              defaultValue=""
              value={state.office}
              onChange={handleChange}
            >
              {mstore.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="transfer"
              label="Transfer BY"
              type="text"
              value={state.transfer}
              onChange={handleChange}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="text"
              value={state.description}
              onChange={handleChange}
            />
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
export default AssetRegistration;
