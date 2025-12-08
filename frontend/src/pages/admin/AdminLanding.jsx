import React from "react";
import adminLogo from "../../assets/WildlifeAdmin.png";
import siteLogo from "../../assets/Wildlife.png";

const AdminLanding = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#FFFFFFFF] text-white">
      <div className="max-w-4xl w-full px-6 py-10 flex flex-col items-center gap-8 bg-[#313335FF] rounded-2xl shadow-2xl border border-[#1f2937]">
        <div className="flex items-center gap-4">
          <img
            src={adminLogo}
            alt="System Logo"
            className="w-20 h-20 object-contain rounded-full bg-white/10 p-2"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9ca3af]">
              Welcome Admin
            </p>
            <h1 className="text-3xl font-bold">WildLife Admin Console</h1>
            <p className="text-[#d1d5db] text-sm">
              Central hub for bookings, properties and user management.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1f2937] to-transparent" />

        <div className="grid md:grid-cols-3 gap-4 w-full">
          <div className="p-4 rounded-xl bg-[#0b1224] border border-[#1f2937]">
            <p className="text-sm text-[#9ca3af]">System </p>
            <p className="text-xl font-semibold mt-1">Wildlife Photography Platform</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0b1224] border border-[#1f2937]">
            <p className="text-sm text-[#9ca3af]">Environment</p>
            <p className="text-xl font-semibold mt-1">Admin Operations</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0b1224] border border-[#1f2937]">
            <p className="text-sm text-[#9ca3af]">Next Steps</p>
            <p className="text-xl font-semibold mt-1">Proceed to Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={siteLogo}
            alt="Site Logo"
            className="w-12 h-12 object-contain rounded-lg bg-white/5 p-1"
          />
          <p className="text-[#d1d5db] text-sm">
            Empowering guided wildlife experiences with secure admin oversight.
          </p>
        </div>

        <a
          href="/admin/dashboard"
          className="px-6 py-3 rounded-lg bg-[#973C6AFF] text-[#FFFFFFFF] font-semibold hover:bg-[#3F1F4EFF] transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default AdminLanding;
