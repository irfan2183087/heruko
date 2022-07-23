import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ReportCard({ title }) {
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  return (
    <>
      <Card sx={{ maxWidth: 345, width: "100%", borderRadius: "16px" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            borderBottom="1px solid"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here you can get all {title} reports.
          </Typography>
        </CardContent>
        <Button
          sx={{
            fontWeight: 700,
            width: 1,
            "&:hover": {
              bgcolor: "#215f91",
              color: "white",
            },
          }}
          variant="text"
          onClick={() => window.print()}
          // ref={componentRef}
        >
          Print
        </Button>
      </Card>
    </>
  );
}

export default ReportCard;
