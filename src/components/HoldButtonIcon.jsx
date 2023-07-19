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
  };

  const styleProps = {
    className: isPressed ? "clickAndHoldAnimate" : "",
    sx: {
      "&.clickAndHoldAnimate": {
        animation: `clickAndHoldAnimation ${currentTimeout / 1000}s`,
      },
      "@keyframes clickAndHoldAnimation": {
        // shake animation
        // "0%": { transform: "translateX(0)" },
        // "10%": { transform: "translateX(-3px)" },
        // "20%": { transform: "translateX(3px)" },
        // "30%": { transform: "translateX(-3px)" },
        // "40%": { transform: "translateX(3px)" },
        // "50%": { transform: "translateX(-3px)" },
        // "60%": { transform: "translateX(3px)" },
        // "70%": { transform: "translateX(-3px)" },
        // "80%": { transform: "translateX(3px)" },
        // "90%": { transform: "translateX(-3px)" },
        // "100%": { transform: "translateX(0)" },

        "0%": { transform: "scale(1)" },
        "10%": { transform: "scale(1.2)" },
        "20%": { transform: "scale(1.3)" },
        "30%": { transform: "scale(1.4)" },
        "40%": { transform: "scale(1.5)" },
        "50%": { transform: "scale(1.6)" },
        "60%": { transform: "scale(1.7)" },
        "70%": { transform: "scale(1.8)" },
        "80%": { transform: "scale(1.9)" },
        "90%": { transform: "scale(2)" },
        "100%": { transform: "scale(0)" },
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
