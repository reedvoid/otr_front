import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import RecordCard from "./RecordCard";

export default function SimpleContainer() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <RecordCard />
          </Grid>
          <Grid item md={4}>
            <RecordCard />
          </Grid>
          <Grid item md={4}>
            <RecordCard />
          </Grid>
          <Grid item md={4}>
            <RecordCard />
          </Grid>
          <Grid item md={4}>
            <RecordCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
