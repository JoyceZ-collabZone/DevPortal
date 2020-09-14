import React, { useState } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
// import Login from "./components/Login_backup";
import Registration from "./components/Registration";
import Login from "./components/Login";
import SoftwareMgt from "./components/SoftwareMgt";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// refresh or load page for the first time
const isLoggedIn = () => {
  if (window.localStorage.getItem("token")) {
    return true;
  }
  return false;
};

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [user, setUser] = useState({});
  return (
    <>
      <Router>
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            User Management Portal
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/login">Login</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/register">User Onboarding</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/softwaremgt">Software Management</Link>
            </MenuItem>
          </Menu>

          <Switch>
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} setUser={setUser} />
            </Route>
            {/* <Route path="/signout">
              <Logout setLoggedIn={setLoggedIn} setUser={setUser} />
            </Route> */}
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/softwaremgt">
              {loggedIn ? <SoftwareMgt /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
