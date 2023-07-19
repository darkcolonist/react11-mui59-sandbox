import React from "react";
import { CircularProgress, IconButton, LinearProgress } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { yellow } from "@mui/material/colors";

const CountDownIcon = (props) => {
  const [countdown, setCountdown] = React.useState(100);
  const size = 10;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const decrement = 2;
        const newVal = prevCountdown - decrement;
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

  return (
    <React.Fragment>
      <HelpOutlineIcon />
      <CircularProgress
        size={size}
        value={countdown}
        variant="determinate"
        thickness={size * 2}
        sx={{
          opacity: 0.7,
          color: yellow[600],
          position: "absolute",
          bottom: 5,
          right: 5,
          zIndex: 1,
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

  const [currentComponent, setCurrentComponent] =
    React.useState(replacementComponent);

  return currentComponent;
};

export default ConfirmButtonIcon;
