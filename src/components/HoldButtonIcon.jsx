import { IconButton } from "@mui/material";
import React, { useRef } from "react";

const defaultTimeout = 5000;
export default (props) => {
  const holdTimerRef = useRef(null);
  const pressedRef = useRef(false);
  const [isPressed, setIsPressed] = React.useState(false);

  let currentTimeout = props.timeout ?? defaultTimeout;

  function handleMouseDown() {
    setIsPressed(true);
    pressedRef.current = true;
    holdTimerRef.current = setTimeout(() => {
      if (pressedRef.current) {
        // alert("Process done");
        props.onClick();
      }
    }, currentTimeout);
  }

  function handleMouseUp() {
    setIsPressed(false);
    pressedRef.current = false;
    clearTimeout(holdTimerRef.current);
  }

  return (
    <React.Fragment>
      <IconButton
        {...props}
        onClick={() => {}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        sx={{
          "&.extended-click": {
            animation: "extendedClickAnimation 5s",
          },
          "&.shake": {
            animation: "shakeAnimation 0.8s infinite",
          },
          "@keyframes extendedClickAnimation": {
            /* Define your extended click animation keyframes here */
          },
          "@keyframes shakeAnimation": {
            "0%": { transform: "translateX(0)" },
            "10%": { transform: "translateX(-5px)" },
            "20%": { transform: "translateX(5px)" },
            "30%": { transform: "translateX(-6px)" },
            "40%": { transform: "translateX(6px)" },
            "50%": { transform: "translateX(-7px)" },
            "60%": { transform: "translateX(7px)" },
            "70%": { transform: "translateX(-8px)" },
            "80%": { transform: "translateX(8px)" },
            "90%": { transform: "translateX(-9px)" },
            "100%": { transform: "translateX(0)" },
          },
        }}
        className={isPressed ? "extended-click shake" : ""}
      />
    </React.Fragment>
  );
};
