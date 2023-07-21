import {
  ListItemIcon,
  MenuItem as DefaultMenuItem,
  MenuList,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AnimationIcon from "@mui/icons-material/Animation";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import WelcomePage from "./WelcomePage";
import TransitionTest from "./TransitionTest";
import Demo1Page from "./Demo1Page";
import ConfirmButtonPage from "./ConfirmButtonPage";

export const sections = [
  {
    path: "/",
    name: "Homes",
    icon: HomeIcon,
    component: WelcomePage,
  },
  {
    path: "/transitions",
    name: "Transitions",
    icon: AnimationIcon,
    component: TransitionTest,
  },
  {
    path: "/demo1",
    name: "Demo 1",
    icon: BookmarkIcon,
    component: Demo1Page,
  },
  {
    path: "/confirm-button-experiments",
    name: "Confirm Button Experiments",
    icon: BookmarkIcon,
    component: ConfirmButtonPage,
  },
];

const MenuItem = (props) => (
  <DefaultMenuItem
    {...props}
    style={{
      whiteSpace: "normal",
      minWidth: "140px",
    }}
  />
);

export default function () {
  const navProps = {
    className: (isActive) => {
      console.log("found", isActive);
    },
  };

  return (
    <MenuList>
      {sections.map((el) => (
        <MenuItem component={NavLink} to={el.path} {...navProps} key={el.name}>
          <ListItemIcon>
            <el.icon />
          </ListItemIcon>
          {el.name}
        </MenuItem>
      ))}
    </MenuList>
  );
}
