import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import InventoryIcon from "@mui/icons-material/Inventory";
import ModalAvatar from "../ModalAvatar";

const theme = createTheme();

function ProductRegistration({
  changeHandler,
  handleSubmit,
  state,
  title,
  dateValue,
  handleChange,
}) {
  const array = useSelector((state) => state.user);
  const { brands, category, mstore, status, suplier } = array;

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
          <ModalAvatar title={title} icon={<InventoryIcon />} />
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              "& .MuiTextField-root": { ml: 2, mr: 2, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Product Name"
              type="text"
              value={state.name}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="sku"
              label="SKU"
              type="text"
              value={state.sku}
              onChange={changeHandler}
            />
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              "& .MuiTextField-root": { ml: 2, mr: 2, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              sx={{ mt: 1 }}
              select
              fullWidth
              name="brand"
              label="Brand"
              value={state.brand}
              onChange={changeHandler}
            >
              {brands.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              size="small"
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              select
              fullWidth
              name="category"
              label="Category"
              value={state.category}
              onChange={changeHandler}
            >
              {category.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              "& .MuiTextField-root": { ml: 2, mr: 2, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={state.price}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Quantity"
              type="number"
              value={state.quantity}
              onChange={changeHandler}
            />
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              "& .MuiTextField-root": { ml: 2, mr: 2, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              select
              fullWidth
              name="store"
              label="Office"
              value={state.store}
              onChange={changeHandler}
            >
              {mstore.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
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
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              "& .MuiTextField-root": { ml: 2, mr: 2, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              sx={{ mt: 1 }}
              id="outlined-select-currency"
              select
              fullWidth
              name="suplier"
              label="Suplier Name"
              value={state.suplier}
              onChange={changeHandler}
            >
              {suplier.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <Stack spacing={3}>
              <TextField
                id="date"
                size="small"
                sx={{ mt: 1 }}
                label="Date"
                type="date"
                value={dateValue}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Box>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="textArea"
            value={state.description}
            onChange={changeHandler}
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
      </Container>
    </ThemeProvider>
  );
}
export default ProductRegistration;
