import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Card({ offerOne }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div
        style={
          offerOne
            ? { border: "solid", margin: 10, borderRadius: 5, padding: 10 }
            : {
                border: "solid",
                margin: 10,
                borderRadius: 5,
                padding: 10,
                width: "97%",
                height: 130,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
        }
      >
        {offerOne ? (
          <Grid container spacing={0}>
            <Grid
              md={2}
              xs={6}
              sm={4}
              lg={3}
              xl={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={offerOne.ImagePath} alt="photo" />
            </Grid>
            <Grid
              md={8}
              xs={6}
              sm={5}
              lg={6}
              xl={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                borderLeft: "solid",
                paddingLeft: 50,
              }}
            >
              <h5>{offerOne.ProductDesc}</h5>
              <h3>{offerOne.FirmName}</h3>
            </Grid>
            <Grid
              md={2}
              xs={8}
              sm={3}
              lg={3}
              xl={3}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "end",
                padding: 10,
              }}
            >
              <h3>{offerOne.Cash} TL</h3>
              <Button variant="contained">Satın Al</Button>
            </Grid>
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </div>
    </Box>
  );
}

export default Card;
