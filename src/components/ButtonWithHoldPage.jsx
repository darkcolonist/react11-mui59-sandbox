import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HoldButtonIcon from "./HoldButtonIcon";
import { Typography } from "@mui/material";

export default function () {
  const [message, setMessage] = React.useState("ready");

  const handleHeavyAction = () => {
    setMessage("deleted");
  };
  return (
    <React.Fragment>
      Unrecoverable action:&nbsp;
      <HoldButtonIcon
        aria-label="heavy action"
        color="error"
        onClick={handleHeavyAction}
        timeout={2000}
      >
        <DeleteForeverIcon />
      </HoldButtonIcon>
      <Typography>{message}</Typography>
    </React.Fragment>
  );
}
