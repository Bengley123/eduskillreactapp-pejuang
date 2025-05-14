import React from "react";
import LogoImage from "./LogoImage";
import LogoText from "./LogoText";
import logo from "../../../assets/logo-bina-essa1.jpg"; 

const LogoSection = () => (
  <div className="flex items-center space-x-3">
    <LogoImage src={logo} alt="Logo Bina Essa" />
    <LogoText />
  </div>
);

export default LogoSection;
