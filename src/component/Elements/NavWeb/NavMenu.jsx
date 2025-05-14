import React from "react";
//import NavLink from "../atoms/NavLink";
import NavLink from "./Navlink";

const NavMenu = ({ isLoggedIn }) => (
  <>
    <NavLink href="/">Home</NavLink>
    {isLoggedIn ? (
      <>
        <NavLink href="#feedback">Feedback</NavLink>
        <NavLink href="#pendaftaran">Pendaftaran</NavLink>
      </>
    ) : (
      <>
        <NavLink href="#info">Info</NavLink>
        <NavLink href="#galeri">Galeri</NavLink>
      </>
    )}
  </>
);

export default NavMenu;
