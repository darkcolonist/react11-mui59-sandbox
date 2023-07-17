import React from "react";
import { CircularProgress, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { yellow } from "@mui/material/colors";

const CountDownIcon = (props) => {
  const [countdown, setCountdown] = React.useState(100);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const decrement = 2;
        const newVal = prevCountdown - decrement;
        // console.debug("newVal", newVal);
        if (newVal < 0) {
          clearInterval(interval);
          return 0;
        }
        return newVal;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    if (countdown === 0 && typeof props.rollback === "function")
      props.rollback();
  }, [countdown]);

  // if (countdown === 0) return null;

  return (
    <React.Fragment>
      <HelpOutlineIcon />
      <CircularProgress
        size={props.children.size}
        value={countdown}
        variant="determinate"
        thickness={21}
        sx={{
          opacity: 0.5,
          color: yellow[900],
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
    </React.Fragment>
  );
};

const ConfirmButtonIcon = (props) => {
  const onClickOverride = () => {
    setCurrentComponent(confirmationComponent);
  };

  const actionSuccessComponent = () => (
    <IconButton
      {...props}
      color="success"
      title="action succeeded"
      onClick={() => {
        setCurrentComponent(replacementComponent);
      }}
    >
      <CheckCircleIcon />
    </IconButton>
  );

  const confirmationComponent = () => {
    return (
      <IconButton
        {...props}
        color="warning"
        title="click again to proceed"
        onClick={() => {
          props.onClick();
          setCurrentComponent(actionSuccessComponent);
        }}
      >
        <CountDownIcon
          {...props}
          rollback={() => {
            setCurrentComponent(replacementComponent);
          }}
        />
      </IconButton>
    );
  };

  const replacementComponent = (
    <IconButton {...props} onClick={onClickOverride} />
  );

  const [currentComponent, setCurrentComponent] = React.useState(
    replacementComponent
  );

  return currentComponent;
};

export default ConfirmButtonIcon;
