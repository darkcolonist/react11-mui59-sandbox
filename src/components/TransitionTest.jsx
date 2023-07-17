import { Button, Collapse, Zoom, Fade, Grid, Typography } from "@mui/material";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../transitions.css";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const randomString = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(randomNumber(0, charactersLength));
  }
  return result;
};

export default function () {
  const [message, setMessage] = React.useState(false);
  const [ready, setReady] = React.useState(true);

  const leftColumnWidth = 4;
  const rightContentWidth = 12 - leftColumnWidth;
  const defaultTimeout = 1000;

  const handleClick = () => {
    setMessage(`kwa-${randomString(randomNumber(4, 10))}`);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick} variant="outlined" disabled={!ready}>
        give me a random kwa
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={leftColumnWidth}>
          via Zoom
        </Grid>
        <Grid item xs={rightContentWidth}>
          <TransitionGroup>
            <Zoom key={message} timeout={defaultTimeout}>
              <Typography>{message}</Typography>
            </Zoom>
          </TransitionGroup>
        </Grid>

        <Grid item xs={leftColumnWidth}>
          via Fade
        </Grid>
        <Grid item xs={rightContentWidth}>
          <TransitionGroup>
            <Fade key={message} timeout={defaultTimeout}>
              <Typography>{message}</Typography>
            </Fade>
          </TransitionGroup>
        </Grid>

        <Grid item xs={leftColumnWidth}>
          via Collapse
        </Grid>
        <Grid item xs={rightContentWidth}>
          <TransitionGroup>
            <Collapse key={message} timeout={defaultTimeout}>
              <Typography>{message}</Typography>
            </Collapse>
          </TransitionGroup>
        </Grid>

        <Grid item xs={leftColumnWidth}>
          via CSSTransition
        </Grid>
        <Grid item xs={rightContentWidth}>
          <TransitionGroup>
            <CSSTransition
              key={message}
              timeout={defaultTimeout}
              classNames="my-fade-compress-transition"
              unmountOnExit
              onEnter={() => {
                setReady(false);
              }}
              onExited={() => {
                setReady(true);
              }}
            >
              <Typography>{message}</Typography>
            </CSSTransition>
          </TransitionGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
