import Link from "next/link";
import React from "react";

const destinations = {};

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col gap-4 bg-gray-50 p-4">
      <h1 className="text-lg font-bold">MERCURY</h1>

      <Link className="text-md p-2 font-medium text-slate-800" href="/settings">
        Settings
      </Link>

      <div className="flex flex-col gap-2">
        <h2 className="text-xs text-slate-600">Company</h2>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/company-profile"
        >
          Company Profile
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/team"
        >
          Team
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/controls"
        >
          Controls
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/integrations"
        >
          Integrations
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/api-tokens"
        >
          API Tokens
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/vault"
        >
          Vault
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xs text-slate-600">Personal</h2>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/my-profile"
        >
          My Profile
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/notifications"
        >
          Notifications
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/security"
        >
          Security
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xs text-slate-600">Explore</h2>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/perks"
        >
          Perks
        </Link>
        <Link
          className="rounded p-2 text-sm text-slate-800 hover:bg-gray-100"
          href="/referrals"
        >
          Referrals
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
