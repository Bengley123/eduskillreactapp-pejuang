import React from "react";
//import Button from "../atoms/Button";
import Button from "../Button/index";
import { FaUser, FaSignInAlt } from "react-icons/fa";

const NavButton = ({ isLoggedIn }) => (
  <Button className="bg-green-500 hover:bg-green-700">
    {isLoggedIn ? <FaUser className="mr-2" /> : <FaSignInAlt className="mr-2" />}
    {isLoggedIn ? "Profile" : "Masuk"}
  </Button>
);

export default NavButton;
