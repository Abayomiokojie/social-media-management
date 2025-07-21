"use client";
import { Bell } from "lucide-react";
import { mockUser } from "@/lib/mockData";
import Image from "next/image";
import Settings from "./settings/settings";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
// import Link from "next/link";

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <header className="bg-[#111827] text-white w-full border-b border-gray-700 bg-theme-header">
      {/* FIXED: Wrapped content in a max-width, centered div to correct spacing. */}
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#4F46E5] p-2 rounded-md dark:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M3 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm0 8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm1-17a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
              ></path>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold">SocialPro Management</h1>
            <p className="text-xs text-gray-400">
              Professional Social Media Suite
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* <Link href="/test" className="text-gray-300 hover:text-white p-4">
            test page
          </Link> */}
          <div>
            <ModeToggle />
          </div>
          <button
            className="p-2 backdrop:blur-sm bg-gray-600/50 rounded-xl"
            title="Notifications"
          >
            <Bell
              size={28}
              className="text-gray-100 cursor-pointer hover:text-white  "
            />
          </button>
          <button
            className="flex items-center gap-3 py-2 px-3 bg-gray-600/50 rounded-xl cursor-pointer hover:scale-105 transition duration-300"
            // onClick={() => alert("Profile settings coming soon!")}
            onClick={() => setIsSettingsOpen(true)}
          >
            <Image
              src={mockUser.avatarUrl}
              alt={mockUser.name}
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
              priority
              loading="eager"
            />
            <div className="justify-items-start">
              <p className="font-semibold">{mockUser.name}</p>
              <p className="text-xs text-gray-300">Admin</p>
            </div>
          </button>
        </div>

        <Settings
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        />
      </div>
    </header>
  );
}
