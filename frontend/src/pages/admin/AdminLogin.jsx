import React, { useState } from "react";
import adminImg from "../../assets/WildlifeAdmin.png";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [formData] = useState([
    {
      username: import.meta.env.VITE_ADMIN_EMAIL,
      password: import.meta.env.VITE_ADMIN_PASSWORD,
    },
  ]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    if (
      username === formData[0].username &&
      password === formData[0].password
    ) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        // Redirect to dashboard after successful login
        window.location.href = "/admin/dashboard";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Please check your username or password.",
        showConfirmButton: true,
      });
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[45%] h-[400px] rounded-xl bg-[#ececec] flex">
        <div className="w-[50%] h-full">
          <img
            src={adminImg}
            alt="Admin Side Logo"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center items-center">
          <h2 className="text-[25px] font-bold">ADMIN LOGIN</h2>
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col gap-4 mt-6 w-[80%]"
          >
            <input
              type="text"
              placeholder="Username"
              className="p-1 rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-1 rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-[#8AC343] text-white p-2 font-bold rounded-md hover:bg-[#679C28] transition duration-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
