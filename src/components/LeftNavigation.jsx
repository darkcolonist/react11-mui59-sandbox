import {
  ListItemIcon,
  MenuItem as DefaultMenuItem,
  MenuList
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AnimationIcon from "@mui/icons-material/Animation";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MenuItem = (props) => (
  <DefaultMenuItem
    {...props}
    style={{
      whiteSpace: "normal",
      minWidth: "140px"
    }}
  />
);

export default function () {
  const navProps = {
    className: (isActive) => {
      console.log("found", isActive);
    }
  };

  return (
    <MenuList>
      <MenuItem component={NavLink} to="/" {...navProps}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        Home
      </MenuItem>
      <MenuItem component={NavLink} to="transitions" {...navProps}>
        <ListItemIcon>
          <AnimationIcon />
        </ListItemIcon>
        Transitions
      </MenuItem>
      <MenuItem component={NavLink} to="demo1" {...navProps}>
        <ListItemIcon>
          <BookmarkIcon />
        </ListItemIcon>
        Demo 1
      </MenuItem>
      <MenuItem
        component={NavLink}
        to="confirm-button-with-cooldown"
        {...navProps}
      >
        <ListItemIcon>
          <BookmarkIcon />
        </ListItemIcon>
        Confirm Button with Cooldown
      </MenuItem>
    </MenuList>
  );
}
