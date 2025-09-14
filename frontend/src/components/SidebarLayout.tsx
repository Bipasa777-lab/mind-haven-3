"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "AI Chart Support", href: "/dashboard/ai-chart-support" },
  { label: "Book Appointment", href: "/dashboard/book-appointment" },
  { label: "Resources", href: "/dashboard/resources" },
  { label: "Peer Support", href: "/dashboard/peer-support" },
  { label: "Mental Screening", href: "/dashboard/mental-screening" },
];

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="bg-[#a3d2ff] min-h-screen w-full flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen bg-gradient-to-b from-[#1e90ff] to-[#007dfb] flex flex-col transition-all duration-300 ${
          menuOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        {navigationItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`w-full py-4 px-6 text-left font-medium border-b border-blue-300 transition-colors ${
                isActive
                  ? "bg-white text-[#0057ac]"
                  : "bg-gradient-to-r from-[#007dfb] to-[#0057ac] text-white hover:opacity-90"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 relative">
        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-4 left-4 flex flex-col justify-between w-8 h-8 bg-white rounded shadow-md p-1 md:hidden"
        >
          <span className="block w-full h-1 bg-black"></span>
          <span className="block w-full h-1 bg-black"></span>
          <span className="block w-full h-1 bg-black"></span>
        </button>

        {/* Page Content */}
        <div className="mt-12">{children}</div>
      </div>
    </main>
  );
}
