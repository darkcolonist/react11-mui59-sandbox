import { Grid, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftNavigation, { sections } from "./LeftNavigation";

export default function () {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">my mui code sandbox</Typography>
          </Grid>
          <Grid item xs={2}>
            <LeftNavigation />
          </Grid>
          <Grid item xs={10}>
            <Routes>
              {sections.map((el) => (
                <Route path={el.path} key={el.name} element=<el.component /> />
              ))}
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </React.Fragment>
  );
}
