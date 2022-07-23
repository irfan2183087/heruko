import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";

function HomeCard({ title, length, btnall, btnReports, path }) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          width: "100%",
          borderRadius: "16px",
          display: "inline-block",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            borderBottom="1px solid"
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            display="flex"
            justify-content="space-between"
            className="typo"
          >
            {length}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              fontWeight: 700,
              width: 1,
              bgcolor: "#edf6ff",
              "&:hover": {
                bgcolor: "#215f91",
                color: "white",
              },
            }}
            variant="text"
            inputprops={{ disableUnderline: true }}
          >
            <Link
              to={path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {btnall}
            </Link>
          </Button>
          <Button
            sx={{
              fontWeight: 700,
              width: 1,
              bgcolor: "#edf6ff",
              "&:hover": {
                bgcolor: "#215f91",
                color: "white",
              },
            }}
            variant="text"
          >
            <Link
              to="/reports"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {btnReports}
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default HomeCard;
