import { AppBar, Toolbar, Typography } from "@mui/material";

import { Box } from "@mui/system";
import React from "react";
import MainButton from "../MainButton";

function Appbar({ handleOpen, title, btntitle, visibility }) {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
        }}
      >
        <AppBar
          position="static"
          //   color="primary"
          style={{
            backgroundColor: "#edf6ff",
            color: "#4c555d",
            variant: "outlined",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              display="flex"
              justify-content="space-between"
              fontWeight={700}
              className="typo"
            >
              {title}
            </Typography>

            <MainButton
              handleOpen={handleOpen}
              title={btntitle}
              visibility={visibility}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Appbar;
