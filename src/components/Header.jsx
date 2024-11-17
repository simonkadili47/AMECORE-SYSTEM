import React, { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  // Simulated user data; ideally, you'd fetch this from your auth context or API
  const user = {
    name: "Sarah Timothy",
    role: "Admin",
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.error(
        "Error during logout:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="fixed top-0 left-56 right-0 bg-white border-b border-gray-300 text-gray-800 p-3 flex justify-between items-center z-50 shadow-sm">
      <div className="items-center space-x-2">
        <h1 className="text-lg font-bold">Hi</h1>
        <h1 className="text-sm">Admin</h1>
      </div>

      <div className="flex items-center space-x-3">
        <IoIosNotifications size={24} className="text-customblue" />

        <div className="relative" ref={userMenuRef}>
          <div
            className="w-8 h-8 flex items-center justify-center bg-customblue text-white rounded-full cursor-pointer"
            onClick={toggleUserMenu}
            aria-label="User Menu"
          >
            <FaUser size={16} />
          </div>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg">
              <h1 className="text-lg font-bold p-3 border-b border-gray-200">
                My Account
              </h1>

              <div className="flex items-center p-3 border-b border-gray-200">
                <div className="relative mr-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 border border-white" />
                  <FaUser size={28} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
              <Link
                to="#"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Settings
              </Link>

              <a
                onClick={handleLogout}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
