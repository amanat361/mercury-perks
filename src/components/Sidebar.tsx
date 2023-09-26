import Link from "next/link";
import React from "react";

import Mercury from "@/components/Logo";

import {
  BuildingOfficeIcon,
  UserIcon,
  CakeIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

type SidebarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const Sidelink = ({ href, children }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className="relative rounded-lg px-6 py-2 text-sm font-medium text-slate-700 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="flex h-screen w-[13.5rem] flex-col gap-6 border-r-[1px] bg-gray-50 pl-6 pr-2 tracking-wider fixed left-0 top-0">
      <Mercury />

      <Link href="/settings" className="group mt-5 flex items-center gap-2">
        <ArrowLeftIcon className="h-4 w-4 text-slate-600 group-hover:text-black" />
        <h2 className="text-md font-medium text-slate-900">Settings</h2>
      </Link>

      <div className="flex flex-col gap-1">
        <div className="mb-2 flex items-center gap-2">
          <BuildingOfficeIcon className="h-4 w-4 text-slate-700" />
          <h2 className="text-xs text-slate-700">Company</h2>
        </div>
        <Sidelink href="/company-profile">Company Profile</Sidelink>
        <Sidelink href="/team">Team</Sidelink>
        <Sidelink href="/controls">Controls</Sidelink>
        <Sidelink href="/integrations">Integrations</Sidelink>
        <Sidelink href="/api-tokens">API Tokens</Sidelink>
        <Sidelink href="/vault">Vault</Sidelink>
      </div>

      <div className="flex flex-col gap-2">
        <div className="mb-2 flex items-center gap-2">
          <UserIcon className="h-4 w-4 text-slate-700" />
          <h2 className="text-xs text-slate-700">Personal</h2>
        </div>
        <Sidelink href="/my-profile">My Profile</Sidelink>
        <Sidelink href="/notifications">Notifications</Sidelink>
        <Sidelink href="/security">Security</Sidelink>
      </div>

      <div className="flex flex-col gap-2">
        <div className="mb-2 flex items-center gap-2">
          <CakeIcon className="h-4 w-4 text-slate-700" />
          <h2 className="text-xs text-slate-700">Explore</h2>
        </div>
        <Sidelink href="/perks">Perks</Sidelink>
        <Sidelink href="/referrals">Referrals</Sidelink>
      </div>

      <div className="group fixed bottom-0 left-0 mt-auto flex w-[13.5rem] items-center gap-4 border-t-[1px] px-4 py-5 hover:bg-gray-200">
        <UserIcon className="h-8 w-8 rounded bg-rose-300 p-2" />
        <div className="flex flex-col">
          <h2 className="text-sm font-medium text-slate-900">Firewave</h2>
          <h3 className="text-xs text-slate-700">Samin</h3>
        </div>
        <ChevronUpIcon className="ml-auto h-4 w-4 text-slate-700 group-hover:text-slate-500" />
      </div>
    </div>
  );
};

export default Sidebar;
