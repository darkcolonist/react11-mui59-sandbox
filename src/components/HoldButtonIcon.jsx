import { IconButton } from "@mui/material";
import React, { useRef } from "react";

const defaultTimeout = 5000;
export default (props) => {
  const holdTimerRef = useRef(null);
  const pressedRef = useRef(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [extendedProps, setExtendedProps] = React.useState({});

  let currentTimeout = props.timeout ?? defaultTimeout;

  function handleMouseDown() {
    setIsPressed(true);
    pressedRef.current = true;
    holdTimerRef.current = setTimeout(() => {
      if (pressedRef.current) {
        // alert("Process done");
        setExtendedProps((currentExtendedProps) => {
          let extendedPropListeners = {};

          if (props.doneicon) {
            extendedPropListeners = {
              onMouseDown: null,
              onMouseUp: null,
              onMouseLeave: null,
              color: "success",
            };
          }

          return {
            ...currentExtendedProps,
            ...extendedPropListeners,
            children: props.doneicon ?? props.children,
          };
        });
        props.onClick();
      }
    }, currentTimeout);
  }

  function handleMouseUp() {
    setIsPressed(false);
    pressedRef.current = false;
    clearTimeout(holdTimerRef.current);
  }

  const initialExtendedProps = {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp,
    title:
      props.title ??
      `click and hold for ${currentTimeout / 1000} seconds to proceed`,
  };

  const styleProps = {
    className: isPressed ? "clickAndHoldAnimate" : "",
    sx: {
      "&.clickAndHoldAnimate": {
        animation: `clickAndHoldAnimation ${currentTimeout / 1000}s`,
      },
      "@keyframes clickAndHoldAnimation": {
        "0%": { transform: "scale(1)" },
        "10%": { transform: "scale(1.1)" },
        "20%": { transform: "scale(1.2)" },
        "30%": { transform: "scale(1.3)" },
        "40%": { transform: "scale(1.4)" },
        "50%": { transform: "scale(1.5)" },
        "60%": { transform: "scale(1.6)" },
        "70%": { transform: "scale(1.7)" },
        "80%": { transform: "scale(1.8)" },
        "90%": { transform: "scale(1.9)" },
        "100%": { transform: "scale(2)" },
      },
    },
  };

  React.useEffect(() => {
    setExtendedProps(initialExtendedProps);
  }, []);

  return (
    <React.Fragment>
      <IconButton
        {...props}
        onClick={() => {}}
        {...extendedProps}
        {...styleProps}
      />
    </React.Fragment>
  );
};
