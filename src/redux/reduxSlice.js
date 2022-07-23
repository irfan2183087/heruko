import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: [
    {
      id: 1,
      userName: "irfan",
      email: "irfan919@gmail.com",
      role: "ADMIN",
      password: "M1234",
    },
    {
      id: 2,
      userName: "hamza",
      email: "hamza919@gmail.com",
      role: "STAFF",
      password: "M1234",
    },
    {
      id: 3,
      userName: "umair",
      email: "umair919@gmail.com",
      role: "Manager",
      password: "M1234",
    },
  ],
  userHeader: ["Id", "UserName", "Email", "Password", "Action"],

  brands: [
    {
      id: 1,
      name: "Laptop",
      status: "Active",
    },
    {
      id: 2,
      name: "Mac",
      status: "Active",
    },
  ],
  mstore: [
    {
      id: 1,
      name: "Gullberg",
      status: "Active",
    },
    {
      id: 2,
      name: "Liberty",
      status: "Active",
    },
  ],
  category: [
    {
      id: 1,
      name: "Macbook",
      model: "Core i5",
      memory: "4GB",
      hardDrive: "80GB",
      os: "window 10",
      status: "Active",
    },
    {
      id: 2,
      name: "Notebook",
      model: "Core i5",
      memory: "4GB",
      hardDrive: "80GB",
      os: "Apple",
      status: "Active",
    },
  ],
  products: [
    {
      id: 1,
      name: "Macbook",
      sku: "sku-1",
      brand: "Apple",
      category: "category",
      price: "5000",
      quantity: "100",
      store: "lahore",
      status: "Active",
      supplier: "Hamza",
      date: "dd/mm/yyyy",
      description: "This is Description ",
    },
    {
      id: 2,
      name: "Laptop",
      sku: "sku-1",
      brand: "Apple",
      category: "category",
      price: "5000",
      quantity: "100",
      store: "lahore",
      status: "Active",
      supplier: "Hamza",
      date: "dd/mm/yyyy",
      description: "This is Description ",
    },
    {
      id: 3,
      name: "Mobile",
      sku: "sku-1",
      brand: "Apple",
      category: "category",
      price: "5000",
      quantity: "100",
      store: "lahore",
      status: "Active",
      supplier: "Hamza",
      date: "dd/mm/yyyy",
      description: "This is Description ",
    },
  ],
  status: [
    {
      id: 1,
      name: "Active",
    },
    {
      id: 2,
      name: "InActive",
    },
  ],
  roles: [
    {
      id: 1,
      name: "ADMIN",
    },
    {
      id: 2,
      name: "STAFF",
    },
    {
      id: 2,
      name: "MANAGER",
    },
  ],
  suplier: [
    {
      id: 1,
      name: "Inaam",
      contect: "03401743255",
      company: "Tech Limited",
      status: "Active",
    },
    {
      id: 2,
      name: "Hamza",
      contect: "03401746767",
      company: "IT Center",
      status: "InActive",
    },
    {
      id: 3,
      name: "Awais",
      contect: "03401555767",
      company: "Modern Transation",
      status: "Active",
    },
  ],
  assign: [
    {
      id: 1,
      name: "MAC",
      quantity: "50",
      transfer: "Irfan",
      office: "Lahore",
      description: "its a description",
    },
    {
      id: 2,
      name: "Lap",
      quantity: "50",
      transfer: "Irfan",
      office: "Lahore",
      description: "its a description",
    },
    {
      id: 3,
      name: "mobile",
      quantity: "50",
      transfer: "Irfan",
      office: "Lahore",
      description: "its a description",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add(state, action) {
      state.rows.push(action.payload);
    },
    addBrand(state, action) {
      state.brands.push(action.payload);
    },
    addCategory(state, action) {
      state.category.push(action.payload);
    },
    addStore(state, action) {
      state.mstore.push(action.payload);
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    addSeller(state, action) {
      state.seller.push(action.payload);
    },
    addAsset(state, action) {
      state.assign.push(action.payload);
    },
  },
  //
});

export const {
  add,
  addCategory,
  addStore,
  removeUser,
  editUser,
  addBrand,
  addProduct,
  addSeller,
  addAsset,
} = userSlice.actions;
export default userSlice.reducer;
