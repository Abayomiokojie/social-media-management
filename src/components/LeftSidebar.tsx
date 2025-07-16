"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  LineChart,
  // MessagesSquare,
  Lightbulb,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Calendar", icon: Calendar },
  { href: "/analytics", label: "Analytics", icon: LineChart },
  // { href: '/team-chat', label: 'Team Chat', icon: MessagesSquare },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="p-4 bg-[#FFFFFF] lg:min-w-64 rounded-xl shadow-sm flex flex-col gap-8">
      <nav>
        <ul className="space-y-4">
          {/* FIXED: Mapped over links for dynamic, intelligent navigation */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 p-3 rounded-xl hover:translate-x-1 transition duration-300 hover:shadow-lg ${
                    isActive
                      ? "bg-[#1E293B] font-bold text-white"
                      : "text-gray-700 font-semibold hover:bg-gray-100"
                  }`}
                >
                  <link.icon size={20} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <h3 className="px-3 text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
          <Lightbulb className="text-gray-500" size={16} /> Quick Templates
        </h3>
        <ul className="space-y-0.5 text-sm">
          <li>
            <button className="text-left w-full px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg hover:font-semibold ">
              Product Launch
            </button>
          </li>
          <li>
            <button className="text-left w-full px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg hover:font-semibold ">
              Holiday Promotion
            </button>
          </li>
          <li>
            <button className="text-left w-full px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg hover:font-semibold ">
              Engagement Question
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
