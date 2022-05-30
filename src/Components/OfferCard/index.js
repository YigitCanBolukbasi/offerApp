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
                width: 1350,
                height: 130,
              }
        }
      >
        {offerOne ? (
          <Grid container spacing={0}>
            <Grid
              md={2}
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
