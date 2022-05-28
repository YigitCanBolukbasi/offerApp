import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Card({ offerOne }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div
        style={{ border: "solid", margin: 10, borderRadius: 5, padding: 10 }}
      >
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
      </div>
    </Box>
  );
}

export default Card;
