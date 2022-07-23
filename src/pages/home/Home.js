import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Appbar from "../../components/appbar/Appbar";
import HomeCard from "./HomeCard";

const Home = () => {
  const userArray = useSelector((state) => state.user);
  const { rows, brands, products, category, suplier, mstore } = userArray;

  return (
    <>
      <Box sx={{ m: 3 }}>
        <Appbar title="Dashboard" btntitle="Assets" visibility="hidden" />
        <Grid container direction="row" justifyContent="space-between" gap={1}>
          <HomeCard
            title="Members"
            length={rows.length}
            btnall="All Users"
            btnReports="Reports"
            path="/users"
          />
          <HomeCard
            title="Products"
            length={products.length}
            btnall="All Products"
            btnReports="Reports"
            path="/products"
          />
          <HomeCard
            title="Category"
            length={category.length}
            btnall="All Category"
            btnReports="Reports"
            path="/category"
          />
          <HomeCard
            title="Brands"
            length={brands.length}
            btnall="All Brands"
            btnReports="Reports"
            path="/brand"
          />
          <HomeCard
            title="Offices"
            length={mstore.length}
            btnall="All Offices"
            btnReports="Reports"
            path="/store  "
          />
          <HomeCard
            title="Supplier"
            length={suplier.length}
            btnall="All Supplier"
            btnReports="Reports"
            path="/suplier"
          />
        </Grid>
      </Box>
    </>
  );
};

export default Home;
