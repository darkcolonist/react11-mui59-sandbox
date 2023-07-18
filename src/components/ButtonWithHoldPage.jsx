import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmButtonIcon from "./ConfirmButtonIcon";

export default function () {
  const handleHeavyAction = () => {
    alert("deleted forever");
  };
  return (
    <React.Fragment>
      [show...]
      Unrecoverable action:&nbsp;
      <ConfirmButtonIcon
        aria-label="heavy action"
        color="error"
        onClick={handleHeavyAction}
      >
        <DeleteForeverIcon />
      </ConfirmButtonIcon>
    </React.Fragment>
  );
}
