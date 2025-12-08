import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SideBar = ({ setSection }) => {
  const [active, setActive] = useState("D"); // Default to Dashboard tab
  const navigate = useNavigate();

  const handleChangeType = (type) => {
    setActive(type);
    setSection(type);
  };

  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d31e54ff",
      cancelButtonColor: "rgba(28, 149, 230, 1)",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Optional: clear authentication data
        localStorage.removeItem("adminToken");
        sessionStorage.clear();

        // Show success alert briefly
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // Navigate to admin login after short delay
        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      }
    });
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <div
        className="flex justify-center items-center text-[25px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <span className="font-[900] text-[24px]">
          WILD<span className="font-[600] medium-20"> LIFE</span>
        </span>
      </div>

      {/* Menu */}
      <div className="w-full mt-12 px-3 h-[90%] flex flex-col justify-between">
        <div className="w-full">
          <div
            onClick={() => handleChangeType("D")}
            style={{ backgroundColor: active === "D" ? "#4f860c" : "" }}
            className="w-full h-[40px] bg-[#8AC343] flex justify-start text-white font-medium
              items-center rounded-r-2xl cursor-pointer ps-2 mt-3"
          >
            Dashboard
          </div>

          <div
            onClick={() => handleChangeType("P")}
            style={{ backgroundColor: active === "P" ? "#4f860c" : "" }}
            className="w-full h-[40px] bg-[#8AC343] flex justify-start text-white font-medium
              items-center rounded-r-2xl cursor-pointer ps-2 mt-3"
          >
            All Properties
          </div>

          <div
            onClick={() => handleChangeType("U")}
            style={{ backgroundColor: active === "U" ? "#4f860c" : "" }}
            className="w-full h-[40px] bg-[#8AC343] flex justify-start text-white font-medium
              items-center rounded-r-2xl cursor-pointer ps-2 mt-3"
          >
            All Users
          </div>

          <div
            onClick={() => handleChangeType("B")}
            style={{ backgroundColor: active === "B" ? "#4f860c" : "" }}
            className="w-full h-[40px] bg-[#8AC343] flex justify-start text-white font-medium
              items-center rounded-r-2xl cursor-pointer ps-2 mt-3"
          >
            All Bookings
          </div>
        </div>

        {/* Logout */}
        <div
          onClick={handleClick}
          className="w-full h-[40px] bg-[#dc2626] flex justify-start text-white font-medium
            items-center rounded-r-2xl cursor-pointer ps-2 mb-12"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default SideBar;
