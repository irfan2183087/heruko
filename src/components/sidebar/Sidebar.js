import "./sidebar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import Inventory2Icon from "@mui/icons-material/Inventory2";

import { Avatar, List } from "@mui/material";

import useCollapse from "react-collapsed";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ReorderIcon from "@mui/icons-material/Reorder";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import FlagIcon from "@mui/icons-material/Flag";

import Button from "@mui/material/Button";
import { useUserAuth } from "../../firebase/AuthProvider";
import { useEffect } from "react";

const Sidebar = ({ showAlert }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  // const [error, setError] = useState("");
  // console.log(error);

  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      logOut();
      sessionStorage.removeItem("Auth Token");
      showAlert("Logout Successfully", "success");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  });

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">IT Asset</span>
      </div>
      <div className="center">
        <List>
          <li>
            <Avatar sx={{ bgcolor: "#215f91" }}>
              <DashboardIcon className="icon" />
            </Avatar>
            <NavLink activeclassname="active" to="/home">
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <Avatar sx={{ bgcolor: "#215f91" }}>
              <GroupIcon className="icon" />
            </Avatar>
            <NavLink activeclassname="active" to="/users">
              <span>Members</span>
            </NavLink>
          </li>
          <div className="header" {...getToggleProps()}>
            {isExpanded ? (
              <li>
                <Avatar sx={{ bgcolor: "#215f91" }}>
                  <UnfoldMoreIcon className="icon" />
                </Avatar>
                <span>Products</span>
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </li>
            ) : (
              <li>
                <Avatar sx={{ bgcolor: "#215f91" }}>
                  <UnfoldMoreIcon className="icon" />
                </Avatar>
                <span>Products</span>
                <KeyboardArrowUpIcon sx={{ color: "white" }} />
              </li>
            )}
          </div>
          <div {...getCollapseProps()}>
            <div className="content">
              <li>
                <Avatar sx={{ bgcolor: "#215f91" }}>
                  <Inventory2Icon className="icon" />
                </Avatar>
                <NavLink activeclassname="active" to="/brand">
                  <span>Brand</span>
                </NavLink>
              </li>
              <li>
                <Avatar sx={{ bgcolor: "#215f91" }}>
                  <Inventory2Icon className="icon" />
                </Avatar>
                <NavLink activeclassname="active" to="/category">
                  <span>Category </span>
                </NavLink>
              </li>
              <li>
                <Avatar sx={{ bgcolor: "#215f91" }}>
                  <ReorderIcon className="icon" />
                </Avatar>
                <NavLink activeclassname="active" to="/products">
                  <span>products </span>
                </NavLink>
              </li>
            </div>
          </div>
          <li>
            <Avatar sx={{ bgcolor: "#215f91" }}>
              <AddLocationIcon className="icon" />
            </Avatar>
            <NavLink activeclassname="active" to="/store">
              <span>Locations</span>
            </NavLink>
          </li>
          <li>
            <Avatar sx={{ bgcolor: "#215f91" }}>
              <AccessibilityIcon className="icon" />
            </Avatar>
            <NavLink activeclassname="active" to="/suplier">
              <span>Supplier </span>
            </NavLink>
          </li>
          <li>
            <Avatar sx={{ bgcolor: "#215f91" }}>
              <AccessibilityIcon className="icon" />
            </Avatar>
            <NavLink activeclassname="active" to="/order">
              <span>Orders </span>
            </NavLink>
          </li>
          <li>
            <Avatar sx={{ bgcolor: "#215f91" }}>
              <AssignmentTurnedInIcon className="icon" />
            </Avatar>
            <NavLink activeclassname="active" to="/assigned">
              <span>Assigned </span>
            </NavLink>
          </li>
          <li>
            <Avatar sx={{ bgcolor: "#215f91" }}>
              <FlagIcon className="icon" />
            </Avatar>
            <NavLink activeclassname="active" to="/reports">
              <span>Reports </span>
            </NavLink>
          </li>

          <Button
            variant="contained"
            sx={{ bgcolor: "#215f91" }}
            backgroundcolor="red"
            onClick={handleLogout}
          >
            <span>Logout </span>
          </Button>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
