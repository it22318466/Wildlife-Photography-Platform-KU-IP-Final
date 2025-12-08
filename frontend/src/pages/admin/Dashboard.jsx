import { useState } from "react";
import SideBar from "../../components/admin/SideBar";
import TopBar from "../../components/admin/TopBar";
import AllPropperties from "../../components/admin/AllProperties";
import AllUsers from "../../components/admin/AllUsers";
import AllBookings from "../../components/admin/AllBookings";
import adminLogo from "../../assets/WildlifeAdmin.png";
import siteLogo from "../../assets/Wildlife.png";

const Dashboard = () => {
  const [section, setsSction] = useState("D"); // Default to Dashboard tab

  return (
    <div className="w-full h-full flex  mt-3">
      <div className="w-[20%] h-full">
        <SideBar setSection={setsSction} />
      </div>
      <div className="flex-1 h-full flex flex-col mr-3 gap-10">
        <div className="flex h-[50px]">
          <TopBar />
        </div>

        {/* Admin Landing Content */}

        {/* Main Content Area */}
        <div className="bg-[#f2f2f2] p-3 flex flex-col rounded-lg">
          <div className="w-full h-[40px] text-[20px] font-bold">
            {section === "D"
              ? "Dashboard"
              : section === "P"
              ? "All Properties"
              : section === "U"
              ? "All Users"
              : "All Bookings"}
          </div>
          <div className="flex-1 overflow-auto">
            {(() => {
              switch (section) {
                case "D":
                  return (
                    <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center p-6">
                      <div className="w-full max-w-6xl bg-[#313335FF] text-white rounded-xl shadow-2xl border border-[#1f2937] overflow-hidden">
                        {/* Header Section */}
                        <div className="p-8 text-center bg-gradient-to-r from-[#1a2e1a] to-[#2c4b2c]">
                          <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="p-3 bg-white/10 rounded-full">
                              <img
                                src={adminLogo}
                                alt="System Logo"
                                className="w-20 h-20 object-contain"
                              />
                            </div>
                            <div>
                              <p className="text-sm uppercase tracking-widest text-[#9ca3af] mb-1">
                                Welcome Admin
                              </p>
                              <h1 className="text-3xl font-bold text-white">
                                WildLife Admin Console
                              </h1>
                              <p className="text-[#d1d5db] text-base mt-2 max-w-2xl mx-auto">
                                Centralized hub for managing bookings,
                                properties and user accounts with comprehensive
                                oversight.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                          <div className="bg-gradient-to-br from-[#0b1224] to-[#1a2e3a] p-6 rounded-xl border border-[#2a3a47] hover:border-[#3a8a5f] transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-sm font-medium text-[#9ca3af]">
                                System Status
                              </p>
                              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                              Operational
                            </h3>
                            <p className="text-sm text-[#9ca3af] mt-2">
                              All systems normal
                            </p>
                          </div>

                          <div className="bg-gradient-to-br from-[#0b1224] to-[#1a2e3a] p-6 rounded-xl border border-[#2a3a47] hover:border-[#3a8a5f] transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-sm font-medium text-[#9ca3af]">
                                Environment
                              </p>
                              <div className="text-xs px-2 py-1 bg-blue-900/50 text-blue-300 rounded">
                                Admin
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                              Secure Access
                            </h3>
                            <p className="text-sm text-[#9ca3af] mt-2">
                              Privileged operations
                            </p>
                          </div>

                          <div className="bg-gradient-to-br from-[#0b1224] to-[#1a2e3a] p-6 rounded-xl border border-[#2a3a47] hover:border-[#3a8a5f] transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-sm font-medium text-[#9ca3af]">
                                Quick Access
                              </p>
                              <svg
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                              Manage Content
                            </h3>
                            <p className="text-sm text-[#9ca3af] mt-2">
                              Quick actions available
                            </p>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-[#1a1f24] border-t border-[#2a3a47] flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img
                              src={siteLogo}
                              alt="Site Logo"
                              className="w-8 h-8 object-contain"
                            />
                            <p className="text-sm text-[#9ca3af]">
                              Empowering guided wildlife experiences with secure
                              admin oversight.
                            </p>
                          </div>
                          <div className="text-xs text-[#6b7280]">
                            v1.0.0 • {new Date().getFullYear()}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "P":
                  return <AllPropperties />;
                case "U":
                  return <AllUsers />;
                case "B":
                  return <AllBookings />;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
