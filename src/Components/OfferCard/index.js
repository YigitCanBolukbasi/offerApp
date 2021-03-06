import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

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
                height: 140,
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
              xs={3}
              sm={4}
              lg={3}
              xl={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "50%" }}
                src={offerOne.ImagePath}
                alt="photo"
              />
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
                justifyContent: "center",
                alignItems: "flex-start",
                borderLeft: "solid",
                paddingLeft: 30,
              }}
            >
              <Typography variant="caption" display="block" gutterBottom>
                {offerOne.ProductDesc}
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                {offerOne.FirmName}
              </Typography>
            </Grid>
            <Grid
              md={2}
              xs={3}
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
              <Button style={{ width: 100, height: 30 }} variant="contained">
                <Typography variant="button" display="block" gutterBottom>
                  Sat??n Al
                </Typography>
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={0}>
            <Grid md={12} xs={12} sm={12} lg={12} xl={12}>
              <CircularProgress />
            </Grid>
          </Grid>
        )}
      </div>
    </Box>
  );
}

export default Card;
