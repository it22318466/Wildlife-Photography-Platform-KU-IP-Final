import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit2, FiSave, FiX, FiUpload, FiUser } from "react-icons/fi";
import defaultAvatar from "../../assets/avatar.avif";
import Swal from "sweetalert2";

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  // Load profile from localStorage or use default
  const loadProfile = () => {
    const savedProfile = localStorage.getItem("adminProfile");
    if (savedProfile) {
      return JSON.parse(savedProfile);
    }
    return {
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
      bio: "Experienced wildlife conservationist with a passion for sustainable tourism and wildlife photography.",
      dateOfBirth: "1985-06-15",
      email: "john.doe@wildlifeadmin.com",
      phone: "+1 (555) 123-4567",
      country: "United States",
      city: "Denver",
      postalCode: "80202",
      profilePicture: defaultAvatar,
    };
  };

  const [profile, setProfile] = useState(loadProfile());
  const [tempProfile, setTempProfile] = useState({ ...loadProfile() });
  const navigate = useNavigate();

  const saveProfileToStorage = (profileData) => {
    localStorage.setItem("adminProfile", JSON.stringify(profileData));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    if (!file.type.match("image.*")) {
      Swal.fire({
        icon: "error",
        title: "Invalid file type",
        text: "Please select an image file (JPEG, PNG, etc.)",
      });
      return;
    }

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      Swal.fire({
        icon: "error",
        title: "File too large",
        text: "Please select an image smaller than 2MB",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (upload) => {
      const updatedProfile = {
        ...tempProfile,
        profilePicture: upload.target.result,
      };

      // Update state
      setTempProfile(updatedProfile);
      setProfile(updatedProfile);

      // Save to localStorage
      saveProfileToStorage(updatedProfile);

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Profile picture updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    };

    reader.onerror = () => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to read the file",
      });
    };

    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleBackToDashboard = () => {
    navigate("/admin/dashboard");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Update the profile with tempProfile data
    const updatedProfile = { ...tempProfile };

    // Save to state
    setProfile(updatedProfile);

    // Save to localStorage
    saveProfileToStorage(updatedProfile);

    setIsEditing(false);

    // Here you would typically make an API call to save the data to your backend
    // try {
    //   const response = await fetch('/api/admin/profile', {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
    //     },
    //     body: JSON.stringify(tempProfile)
    //   });
    //
    //   if (!response.ok) throw new Error('Failed to update profile');
    //
    //   const data = await response.json();
    //   setProfile(data);
    //   saveProfileToStorage(data); // Save the server response to localStorage
    //
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Profile updated successfully!',
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // } catch (error) {
    //   console.error('Error updating profile:', error);
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Update failed',
    //     text: 'Failed to update profile. Please try again.',
    //   });
    // }

    // Show success message
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Profile updated successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleCancel = () => {
    setTempProfile({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 relative">
      {/* Back to Dashboard Button */}
      <button
        onClick={handleBackToDashboard}
        className="absolute top-4 right-4 md:right-8 flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="font-medium">Back</span>
      </button>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 px-6 py-8 text-white">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="relative group">
                <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src={tempProfile.profilePicture}
                    alt="Admin"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultAvatar;
                    }}
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                {isEditing && (
                  <button
                    onClick={triggerFileInput}
                    className="absolute -bottom-2 right-0 bg-white p-2 rounded-full shadow-lg text-green-700 hover:bg-green-50 transition-colors duration-200 transform hover:scale-105"
                    title="Upload new photo"
                  >
                    <FiUpload className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-8 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <h1 className="text-2xl font-bold">
                    {tempProfile.firstName} {tempProfile.lastName}
                  </h1>
                  <span className="ml-2 px-2 py-1 text-xs bg-white bg-opacity-20 rounded-full">
                    {tempProfile.role}
                  </span>
                </div>
                <p className="text-green-100 mt-2">{tempProfile.email}</p>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={tempProfile.bio}
                    onChange={handleInputChange}
                    className="mt-2 w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded p-2 text-white placeholder-green-100"
                    rows="3"
                  />
                ) : (
                  <p className="mt-2 text-green-50">{tempProfile.bio}</p>
                )}
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-auto">
                {isEditing ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-white text-green-700 rounded-md font-medium flex items-center"
                    >
                      <FiSave className="mr-2" /> Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-red-500 text-white rounded-md font-medium flex items-center"
                    >
                      <FiX className="mr-2" /> Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-md font-medium flex items-center"
                  >
                    <FiEdit2 className="mr-2" /> Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="px-8 py-8 relative">
            {/* Loading Overlay */}
            {isUploading && (
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
              </div>
            )}
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={tempProfile.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                ) : (
                  <p className="text-gray-800">{tempProfile.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={tempProfile.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                ) : (
                  <p className="text-gray-800">{tempProfile.lastName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Date of Birth
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={tempProfile.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                ) : (
                  <p className="text-gray-800">
                    {new Date(tempProfile.dateOfBirth).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={tempProfile.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                ) : (
                  <p className="text-gray-800">{tempProfile.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={tempProfile.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                ) : (
                  <p className="text-gray-800">{tempProfile.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  User Role
                </label>
                <p className="text-gray-800">{tempProfile.role}</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="px-8 py-8 bg-gradient-to-br from-green-50 to-blue-50 border-t border-green-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-green-800">
                  Address Details
                </h2>
              </div>
              {isEditing && (
                <span className="text-xs font-semibold text-green-800 bg-green-100 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
                  Editing Address
                </span>
              )}
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-green-100/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-green-700 uppercase tracking-wider">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Country
                    </span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="country"
                      value={tempProfile.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border-2 border-green-100 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 placeholder-green-200"
                      placeholder="Enter country"
                    />
                  ) : (
                    <p className="text-lg font-medium text-gray-800 pl-1">
                      {tempProfile.country}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-green-700 uppercase tracking-wider">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      City
                    </span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={tempProfile.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border-2 border-green-100 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 placeholder-green-200"
                      placeholder="Enter city"
                    />
                  ) : (
                    <p className="text-lg font-medium text-gray-800 pl-1">
                      {tempProfile.city}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-green-700 uppercase tracking-wider">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      Postal Code
                    </span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="postalCode"
                      value={tempProfile.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border-2 border-green-100 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 placeholder-green-200"
                      placeholder="Enter postal code"
                    />
                  ) : (
                    <p className="text-lg font-medium text-gray-800 pl-1">
                      {tempProfile.postalCode}
                    </p>
                  )}
                </div>
              </div>

              {/* Address Preview (Non-edit mode) */}
              {!isEditing && (
                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border-2 border-green-100/50 shadow-inner">
                  <div className="flex items-center space-x-2 mb-3">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                      Address
                    </h4>
                  </div>
                  <p className="text-lg font-medium text-gray-800 pl-7">
                    {`${tempProfile.city}, ${tempProfile.country} ${tempProfile.postalCode}`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
