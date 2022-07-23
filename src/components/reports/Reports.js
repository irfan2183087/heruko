import * as React from "react";

import Appbar from "../appbar/Appbar";
import { Box, Grid } from "@mui/material";
import ReportCard from "./ReportCard";

function Reports() {
  return (
    <Box sx={{ m: 3 }}>
      <Appbar title="Reports" btntitle="Assets" visibility="hidden" />
      <Grid container direction="row" justifyContent="space-between" gap={1}>
        <ReportCard title="Members" path="/user" />
        <ReportCard title="Products" path="/products" />
        <ReportCard title="Supplier" path="/suplier" />
        <ReportCard title="Brands" path="/brand" />
        <ReportCard title="Offices" path="/store" />
      </Grid>
    </Box>
  );
}
export default Reports;
