'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navigationItems = [
  { label: 'AI Chat Support', href: '/dashboard/ai-chart-support' },
  { label: 'Book Appointment', href: '/dashboard/book-appointment' },
  { label: 'Resources', href: '/dashboard/resources' },
  { label: 'Peer Support', href: '/dashboard/peer-support' },
  { label: 'Mental Screening', href: '/dashboard/mental-screening' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close sidebar on outside click (mobile only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest('#sidebar') &&
        !target.closest('#hamburger')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () =>
      document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav
        id="sidebar"
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#1e90ff] to-[#007dfb] shadow-lg flex flex-col justify-between transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div>
          {/* Logo Section */}
          <div className="flex flex-col items-center py-6 bg-[#0057ac] border-b border-blue-300">
            <Link href="/dashboard">
              <img
                src="/min.svg"
                alt="Mind Heaven Logo"
                className="w-16 h-16 rounded-full shadow-md mb-1 cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center mt-2">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="w-11/12 py-4 px-6 text-center text-white font-medium hover:bg-[#0065d4] border-b border-blue-300 rounded-lg transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Crisis Support Section (Bottom) */}
        <div className="m-4 p-4 rounded-lg bg-white/20 backdrop-blur text-white text-center shadow-md">
          <h3 className="font-bold text-lg mb-2">24/7 Crisis Support</h3>
          <p className="text-sm">If you're in crisis, call immediately:</p>
          <p className="mt-2 font-semibold text-base">📞 1-800-CRISIS</p>
          <p className="mt-1 font-semibold text-base">💬 Text "HELLO" to 741741</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300 min-h-screen">
        {/* Hamburger Button (mobile) */}
        <button
          id="hamburger"
          className="fixed top-4 left-4 md:hidden p-2 border rounded z-50 bg-white shadow"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Page Content */}
        <main className="pt-6 px-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
