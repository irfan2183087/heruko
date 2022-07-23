import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import DeleteForever from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { addProduct, addAsset } from "../../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import DetailModal from "./DetailModal";
import Appbar from "../appbar/Appbar";
import Styles from "../Styles";
import AssetModal from "./AssetModal";

function Products() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [detail, setDetail] = useState(false);
  const detailOpen = () => setDetail(true);
  const detailClose = () => setDetail(false);
  const [asset, setAsset] = useState(false);
  const assetOpen = () => setAsset(true);
  const assetClose = () => setAsset(false);
  const [selectedItems, setSelectedItem] = useState({});
  const userArray = useSelector((state) => state.user);
  const { products } = userArray;
  const dispatch = useDispatch();

  const [assets, setAssets] = useState({
    name: selectedItems.name,
    quantity: "",
    office: "",
    transfer: "",
    description: "",
  });
  const [product, setProduct] = useState({
    name: "",
    sku: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
    store: "",
    suplier: "",
    description: "",
    status: "",
  });
  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const assetchangeHandler = (e) => {
    setAssets({ ...assets, [e.target.name]: e.target.value });
  };
  const assetHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAsset({
        id: Math.floor(Math.random() * 10000),
        name: selectedItems.name,
        quantity: assets.quantity,
        office: assets.office,
        transfer: assets.transfer,
        description: assets.description,
      })
    );
    setAssets({
      name: selectedItems.name,
      quantity: "",
      office: "",
      description: "",
    });
    assetClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: Math.floor(Math.random() * 10000),
        name: product.name,
        sku: product.sku,
        brand: product.name,
        category: product.name,
        price: product.price,
        quantity: product.quantity,
        store: product.store,
        status: product.status,
        suplier: product.suplier,
        date: "10/06/2022",
        description: product.description,
      })
    );
    setProduct({
      name: "",
      sku: "",
      brand: "",
      category: "",
      price: "",
      quantity: "",
      store: "",
      description: "",
      status: "Active",
    });
    handleClose();
  };
  const detailHandler = (itemDetails) => {
    setSelectedItem(itemDetails);
    detailOpen();
  };
  const assetHandler = (itemDetails) => {
    setSelectedItem(itemDetails);
    assetOpen();
  };
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box sx={{ m: 3 }}>
      <Appbar handleOpen={handleOpen} title="Products" btntitle="New Product" />
      <div>
        <ProductModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          changeHandler={changeHandler}
          handleSubmit={handleSubmit}
          state={product}
          title="New Product"
          dateValue={value}
          handleChange={handleChange}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={Styles}>Id</TableCell>
              <TableCell sx={Styles}>Name</TableCell>
              <TableCell sx={Styles}>SKU</TableCell>
              <TableCell sx={Styles}>Quantity</TableCell>
              <TableCell sx={Styles}>Price</TableCell>

              <TableCell sx={Styles}>Detail</TableCell>
              <TableCell sx={Styles}>Assign</TableCell>
              <TableCell sx={Styles} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow
                key={p.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {p.id}
                </TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.sku}</TableCell>
                <TableCell>{p.quantity}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      detailHandler({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        sku: p.sku,
                        quantity: p.quantity,
                        brand: p.brand,
                        category: p.category,
                        store: p.store,
                        status: p.status,
                        suplier: p.suplier,
                        date: p.date,
                        description: p.description,
                      })
                    }
                  >
                    Detail
                  </Button>
                  <DetailModal
                    open={detail}
                    handleopen={detailOpen}
                    handleClose={detailClose}
                    detailHandler={detailHandler}
                    item={selectedItems}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      assetHandler({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        sku: p.sku,
                        quantity: p.quantity,
                        brand: p.brand,
                        category: p.category,
                        store: p.store,
                        status: p.status,
                        suplier: p.suplier,
                        date: p.date,
                        description: p.description,
                      })
                    }
                  >
                    Assign
                  </Button>
                  <AssetModal
                    open={asset}
                    handleopen={assetOpen}
                    handleClose={assetClose}
                    detailHandler={assetHandler}
                    item={selectedItems}
                    handleChange={assetchangeHandler}
                    state={assets}
                    handleSubmit={assetHandleSubmit}
                  />
                </TableCell>
                <TableCell align="center">
                  <EditIcon sx={{ mr: 1 }} color="success" />
                  <DeleteForever color="error" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Products;
