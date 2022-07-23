import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "./reduxSlice";

const store = configureStore({
  //   devTools:
  //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //     window.__REDUX_DEVTOOLS_EXTENSION__(),
  reducer: {
    user: reduxSlice,
  },
});

export default store;
