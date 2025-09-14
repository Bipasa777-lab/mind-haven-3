'use client'; // <-- IMPORTANT for client components

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const statsData = [
  { title: 'Mood Check-ins', value: '7 Days', subtitle: 'Current Streak', bgColor: 'bg-[#3399FF]' },
  { title: 'Resource Use', value: '10', subtitle: 'This Month', bgColor: 'bg-[#2B82D9]' },
  { title: 'Next Appointment', value: 'Sep 17', subtitle: '10:00 am', bgColor: 'bg-[#1F66B3]' },
];

const actionCards = [
  {
    title: 'Start AI Chat',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Take Screening',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M12 4v16" />
      </svg>
    ),
  },
  {
    title: 'Book Counselor',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <main className="bg-[#a3d2ff] min-h-screen w-full">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow-md flex items-center px-6 z-30">
        <img src="/min.svg" alt="Mind Heaven Logo" className="w-16 h-16 rounded-full" />
        <span className="ml-3 font-bold text-2xl text-black">Mind Heaven</span>
      </header>

      {/* Page Content */}
      <div className="pt-28 px-6 md:px-8 flex flex-col items-center">
        <header className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
          Welcome to Mind Heaven
        </header>
        <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl">
          Explore your mental health journey with AI-powered insights and support.
        </p>

        {/* Stats */}
        <section className="flex flex-col gap-6 w-full max-w-3xl">
          {statsData.map((stat, index) => (
            <Card key={index} className={`w-full h-32 ${stat.bgColor} rounded-xl opacity-90 border-none`}>
              <CardContent className="p-6 flex flex-col justify-center">
                <div className="text-white text-lg font-normal">
                  {stat.title}
                  <br />
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <div className="text-white text-sm font-medium mt-1">{stat.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Action Cards */}
        <section className="flex flex-wrap justify-center gap-6 mt-8 w-full max-w-3xl">
          {actionCards.map((card, index) => (
            <Card key={index} className="flex-1 min-w-[150px] max-w-[180px] h-32 bg-white rounded-xl shadow-lg cursor-pointer hover:opacity-90 transition flex flex-col items-center justify-center">
              <CardContent className="flex flex-col items-center justify-center">
                {card.svg}
                <div className="text-center font-medium text-sm md:text-base">{card.title}</div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
