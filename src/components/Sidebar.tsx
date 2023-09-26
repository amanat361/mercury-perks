import Link from "next/link";
import React from "react";

const destinations = {};

const Sidebar = () => {
  return (
    <div className="bg-gray-50 flex flex-col p-4 gap-4 h-screen">
      <h1 className="text-lg font-bold">MERCURY</h1>

      <Link className="p-2 text-md text-slate-800 font-medium" href="/settings">
        Settings
      </Link>

      <div className="flex flex-col gap-2">
        <h2 className="text-xs text-slate-600">Company</h2>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/company-profile"
        >
          Company Profile
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/team"
        >
          Team
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/controls"
        >
          Controls
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/integrations"
        >
          Integrations
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/api-tokens"
        >
          API Tokens
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/vault"
        >
          Vault
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xs text-slate-600">Personal</h2>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/my-profile"
        >
          My Profile
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/notifications"
        >
          Notifications
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/security"
        >
          Security
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xs text-slate-600">Explore</h2>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/perks"
        >
          Perks
        </Link>
        <Link
          className="p-2 text-sm text-slate-800 hover:bg-gray-100 rounded"
          href="/referrals"
        >
          Referrals
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
