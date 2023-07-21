import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmButtonIcon from "./ConfirmButtonIcon";
import { Typography, Paper, Stack } from "@mui/material";
import HoldButtonIcon from "./HoldButtonIcon";
import DoneIcon from "@mui/icons-material/Done";
const MyPaper = (props) => {
  return (
    <Paper
      {...props}
      sx={{
        ...props.sx,
        p: 1,
      }}
    />
  );
};

export default function () {
  const handleHeavyAction = () => {
    alert("deleted forever");
  };
  return (
    <React.Fragment>
      <Stack spacing={2}>
        <MyPaper>
          <Typography variant="span">confirm with cooldown</Typography>
          <ConfirmButtonIcon
            aria-label="heavy action"
            color="error"
            onClick={handleHeavyAction}
          >
            <DeleteForeverIcon />
          </ConfirmButtonIcon>
        </MyPaper>

        <MyPaper>
          <Typography variant="span">
            hold for a certain period to confirm
          </Typography>
          <HoldButtonIcon
            aria-label="heavy action"
            color="error"
            onClick={handleHeavyAction}
            timeout={2000}
            doneicon={<DoneIcon color="success" />}
          >
            <DeleteForeverIcon />
          </HoldButtonIcon>
        </MyPaper>
      </Stack>
    </React.Fragment>
  );
}
