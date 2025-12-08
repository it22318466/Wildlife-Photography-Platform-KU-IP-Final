import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../../assets/avatar.avif";

const TopBar = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState("");

  // Load profile picture from localStorage on component mount
  useEffect(() => {
    const loadProfile = () => {
      const savedProfile = localStorage.getItem("adminProfile");
      if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        setProfilePicture(profile.profilePicture || defaultAvatar);
      } else {
        setProfilePicture(defaultAvatar);
      }
    };

    loadProfile();

    // Listen for storage events to update the picture when it changes in other tabs
    const handleStorageChange = (e) => {
      if (e.key === "adminProfile") {
        loadProfile();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleProfileClick = () => {
    navigate("/admin/profile");
  };

  return (
    <div className="w-full h-[60px] flex items-center justify-end pr-4">
      <div
        className="flex items-center space-x-3 cursor-pointer group"
        onClick={handleProfileClick}
        title="View Profile"
      >
        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 border-2 border-transparent group-hover:border-green-500 transition-all duration-200 transform group-hover:scale-110">
          <img
            src={profilePicture}
            alt="Admin"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultAvatar;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
