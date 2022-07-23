import React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DetailsIcon from "@mui/icons-material/Details";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const theme = createTheme();

function DetailRegistration({ handleClose, title, item }) {
  const {
    id,
    sku,
    name,
    price,
    quantity,
    brand,
    category,
    store,
    suplier,
    date,
    status,
    description,
  } = item;

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
            <DetailsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
            noValidate
            autoComplete="off"
          >
            <TableContainer component={Paper}>
              <Table size="small" aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                    <TableCell>{id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>
                    <TableCell>{name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>SKU</TableCell>
                    <TableCell>{sku}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>BRAND</TableCell>
                    <TableCell>{brand}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>PRICE</TableCell>
                    <TableCell>{price}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>QUANTITY</TableCell>
                    <TableCell>{quantity}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>CATEGORY</TableCell>
                    <TableCell>{category}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>OFFICE</TableCell>
                    <TableCell>{store}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>STATUS</TableCell>
                    <TableCell>{status}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Suplier Name
                    </TableCell>
                    <TableCell>{suplier}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                    <TableCell>{date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      DESCRIPTION
                    </TableCell>
                    <TableCell>{description}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClose}
          >
            close
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default DetailRegistration;
