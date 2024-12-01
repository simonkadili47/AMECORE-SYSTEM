import React, { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  const user = { name: "Sarah Timothy", role: "Admin" };

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
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="fixed top-0 left-52 right-0 bg-white border-b border-gray-300 text-gray-800 p-3 flex justify-between items-center z-50 shadow-sm">
      <h1 className="text-lg font-bold">Hi, {user.name}!</h1>
      <div className="flex items-center space-x-3">
        <IoIosNotifications size={24} className="text-customblue" />
        <div className="relative" ref={userMenuRef}>
          <div
            className="w-8 h-8 bg-customblue text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={toggleUserMenu}
          >
            <FaUser size={16} />
          </div>
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg">
              <h2 className="p-3 font-bold">My Account</h2>
              <div className="p-3 flex items-center">
                <FaUser size={28} />
                <div className="ml-2">
                  <p>{user.name}</p>
                  <p>{user.role}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
