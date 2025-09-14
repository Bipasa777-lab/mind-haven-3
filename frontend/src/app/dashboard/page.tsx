'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';

const statsData = [
  { 
    title: 'Mood Check-ins', 
    value: '7 Days', 
    subtitle: 'Current Streak', 
    bgGradient: 'from-blue-400 to-blue-600' 
  },
  { 
    title: 'Resource Use', 
    value: '10', 
    subtitle: 'This Month', 
    bgGradient: 'from-indigo-400 to-indigo-600' 
  },
  { 
    title: 'Next Appointment', 
    value: 'Sep 17', 
    subtitle: '10:00 am', 
    bgGradient: 'from-purple-400 to-purple-600' 
  },
];

const actionCards = [
  {
    title: 'Start AI Chat',
    href: '/dashboard/ai-chart-support',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Take Screening',
    href: '/dashboard/mental-screening',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M12 4v16" />
      </svg>
    ),
  },
  {
    title: 'Book Counselor',
    href: '/dashboard/book-appointment',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <main className="bg-gradient-to-br from-[#a3d2ff] via-[#d4eaff] to-[#ffffff] min-h-screen w-full scroll-smooth">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/40 backdrop-blur-md flex items-center px-6 z-30 shadow-md">
        <img src="/min.svg" alt="Mind Heaven Logo" className="w-16 h-16 rounded-full" />
        <span className="ml-3 font-bold text-2xl text-black">Mind Heaven</span>
      </header>

      {/* Page Content */}
      <div className="pt-28 px-6 md:px-8 flex flex-col items-center">
        {/* Welcome Section */}
        <motion.header
          className="text-3xl md:text-4xl font-bold text-black mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Mind Heaven
        </motion.header>

        <motion.p
          className="text-lg md:text-xl text-gray-800 mb-10 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore your mental health journey with AI-powered insights and support.
        </motion.p>

        {/* Stats Section */}
        <section className="flex flex-col gap-6 w-full max-w-3xl">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card 
                className={`w-full h-32 bg-gradient-to-r ${stat.bgGradient} rounded-xl border-none shadow-xl`}
              >
                <CardContent className="p-6 flex flex-col justify-center">
                  <div className="text-white text-lg font-medium">
                    {stat.title}
                    <br />
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <div className="text-white text-sm font-normal mt-1">{stat.subtitle}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* Action Cards */}
        <section className="flex flex-wrap justify-center gap-6 mt-8 w-full max-w-3xl">
          {actionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ scale: 1.08 }}
            >
              <Link href={card.href} className="flex-1 min-w-[150px] max-w-[180px]">
                <Card
                  className="h-32 bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl shadow-lg cursor-pointer transition-transform flex flex-col items-center justify-center"
                >
                  <CardContent className="flex flex-col items-center justify-center">
                    {card.svg}
                    <div className="text-center font-medium text-sm md:text-base text-gray-900">{card.title}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
