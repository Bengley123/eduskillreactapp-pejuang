import React, { useState, useRef, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import SidebarAdmin from '../Elements/SideBarAdmin/SidebarAdmin';
import { AuthContext } from "../Layouts/Contexts/AuthContext";

export default function AdminLayout() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext); // ✅ Ini dipindah ke sini

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => setDropdownOpen(!isDropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    logout();               // ✅ panggil logout dari context
    navigate('/login');     // ✅ arahkan ke login
  };

  const goToProfile = () => {
    navigate('/profil');
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-0 sm:w-16'} bg-slate-900 text-white flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden`}>
        <SidebarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-[#305CDE] text-white py-3 px-6 flex justify-between items-center relative">
          <button onClick={toggleSidebar} className="text-white hover:text-gray-200 transition-colors focus:outline-none">
            <FaBars className="text-xl" />
          </button>
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleProfileClick}
              className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-100 transition"
            >
              <FaUserCircle className="text-xl" />
              <span>Profile</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 overflow-hidden">
                <button onClick={goToProfile} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800">
                  Profile Admin
                </button>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800">
                  Keluar
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="flex-1 bg-white overflow-x-auto p-6 transition-all duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
