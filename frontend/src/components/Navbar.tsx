import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import "./navbar.css";

const Navbar = () => {
  const { username } = useSelector((state: RootState) => state.auth);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <>
      <div className="nav__container">
        <div className="logo">
          <h1 id="heading">Bookstore</h1>
        </div>
        <div className="nav__items">
          <ul>
            <li>Home</li>
            <li>My Books</li>
            <li>Rented Books</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="username">{username}</div>
        <div className="hamburger__menu">
          {/* {isClicked && ( */}
          <ul>
            <li>Home</li>
            <hr />
            <li>My Books</li>
            <hr />

            <li>Rented Books</li>
            <hr />

            <li>Contact</li>
            <hr />
          </ul>
          {/* )} */}
          <MenuIcon
            fontSize="large"
            onClick={() => setIsClicked((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
