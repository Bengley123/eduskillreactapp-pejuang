import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Layouts/Contexts/AuthContext";

const NavButton = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-white text-[#31328C] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
        >
          Profile
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-white text-[#31328C] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
        >
          Masuk
        </Link>
      )}
    </>
  );
};

export default NavButton;
