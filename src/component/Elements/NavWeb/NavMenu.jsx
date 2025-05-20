import React, { useState, useRef, useEffect } from "react";
import NavLink from "./Navlink";

const NavMenu = ({ isLoggedIn }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Menutup dropdown ketika klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative group" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="text-white hover:text-blue-200 px-4 py-2 flex items-center"
        >
          Tentang Kami
        </button>

        {/* Dropdown muncul saat diklik */}
        {dropdownOpen && (
          <div className="absolute left-0 top-full z-50 w-64 bg-white shadow-lg rounded-b-md overflow-hidden border border-gray-200">
            <div className="py-1">
              <NavLink
                href="/tentangkami/lkp"
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors duration-200"
              >
                LKP Bina ESSA
              </NavLink>
              <NavLink
                href="/tentangkami/lpk"
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors duration-200"
              >
                LPK Bina ESSA
              </NavLink>
              <NavLink
                href="/tentangkami/yayasan"
                className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Yayasan Bina ESSA
              </NavLink>
            </div>
          </div>
        )}
      </div>

      <NavLink href="/">Home</NavLink>

      {isLoggedIn && (
        <>
          <NavLink href="/feedback">Feedback</NavLink>
          <NavLink href="/statusdaftar">Pendaftaran</NavLink>
        </>
      )}
    </>
  );
};

export default NavMenu;