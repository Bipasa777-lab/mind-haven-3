'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  // Close sidebar on outside click (mobile only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#sidebar') && !target.closest('#hamburger')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
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
          <div className="mt-4 flex flex-col items-center py-10 bg-[#0057ac] border-b border-blue-300">
            <Link href="/dashboard">
              <img
                src="/min.svg"
                alt="Mind Heaven Logo"
                className="w-20 h-20 rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center mt-4">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`w-11/12 py-3 px-6 text-center font-medium rounded-lg transition-all mb-2 ${
                    isActive
                      ? 'bg-white/30 text-yellow-300 shadow-lg scale-[1.02]'
                      : 'text-white hover:bg-[#0065d4]'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Crisis Support Section (Bottom) */}
        <a
          href="tel:1800274747" // emergency number clickable
          className="m-4 p-4 rounded-lg bg-white/20 backdrop-blur text-white text-center shadow-md cursor-pointer hover:bg-white/30 transition"
        >
          <h3 className="font-bold text-lg mb-2">24/7 Crisis Support</h3>
          <p className="text-sm">If you're in crisis, tap to call immediately:</p>
          
        </a>
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
        <main className="pt-8 px-6 md:px-10">{children}</main>
      </div>
    </div>
  );
}
