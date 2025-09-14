"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";

// Sample counsellors
const counsellors = [
  { name: "Dr. Aditi Sharma", phone: "+91 9876543210", specialization: "Student Stress Management" },
  { name: "Dr. Rahul Mehta", phone: "+91 9123456780", specialization: "Anxiety & Depression" },
  { name: "Dr. Priya Nair", phone: "+91 9811122233", specialization: "Career Counselling" },
  { name: "Dr. Arjun Singh", phone: "+91 9900112233", specialization: "Mindfulness & Meditation" },
  { name: "Dr. Kavita Das", phone: "+91 9988776655", specialization: "Sleep & Lifestyle Therapy" },
  { name: "Dr. Vivek Patel", phone: "+91 9765432109", specialization: "Youth Counselling" },
  { name: "Dr. Sneha Kapoor", phone: "+91 9345678901", specialization: "Exam Stress & Motivation" },
  { name: "Dr. Manish Verma", phone: "+91 9234567890", specialization: "Work-Life Balance" },
  { name: "Dr. Neha Gupta", phone: "+91 9876501234", specialization: "Mental Wellness Coaching" },
  { name: "Dr. Ramesh Iyer", phone: "+91 9321009988", specialization: "Relationship Counselling" },
  { name: "Dr. Pooja Bansal", phone: "+91 9456789012", specialization: "Family Counselling" },
  { name: "Dr. Ajay Malhotra", phone: "+91 9911223344", specialization: "Addiction Recovery" },
];

export default function BookPage(): JSX.Element {
  const [activePage, setActivePage] = useState("Book Appointment");
  const [bookingComplete, setBookingComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [sessionType, setSessionType] = useState<"in-person" | "online">("in-person");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "10:00 AM IST",
    "11:30 AM IST",
    "01:00 PM IST",
    "02:30 PM IST",
    "04:00 PM IST",
    "05:30 PM IST",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !phone || !selectedDate || !selectedTime) {
      alert("⚠️ Please fill all required fields including date & time.");
      return;
    }
    setBookingComplete(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <motion.main
        key={activePage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="flex-1 p-6"
      >
        <Card className="w-full bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">{activePage}</h2>

          {activePage === "Book Appointment" && !bookingComplete && (
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Details */}
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />

                {/* Session Type */}
                <div className="flex gap-3">
                  <Button
                    type="button"
                    className={sessionType === "in-person" ? "bg-blue-600 text-white" : "bg-gray-200"}
                    onClick={() => setSessionType("in-person")}
                  >
                    In-person
                  </Button>
                  <Button
                    type="button"
                    className={sessionType === "online" ? "bg-blue-600 text-white" : "bg-gray-200"}
                    onClick={() => setSessionType("online")}
                  >
                    Online
                  </Button>
                </div>

                {/* Date Selector */}
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Select Date</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>

                {/* Time Selector */}
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Select Time (IST)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time, i) => (
                      <Button
                        key={i}
                        type="button"
                        className={selectedTime === time ? "bg-green-600 text-white" : "bg-gray-200"}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 text-white">
                  Complete Booking
                </Button>
              </form>
            </CardContent>
          )}

          {/* Booking Complete Section */}
          {activePage === "Book Appointment" && bookingComplete && (
            <div className="p-4 text-green-700">
              <h3 className="text-xl font-semibold mb-3">
                ✅ Booking Completed Successfully!
              </h3>
              <p className="mb-3">
                Your appointment is scheduled on <strong>{selectedDate}</strong> at{" "}
                <strong>{selectedTime}</strong> ({sessionType} session).
              </p>
              <p className="mb-3">Here are some counsellors you can connect with:</p>
              <ul className="space-y-3">
                {counsellors.map((c, i) => (
                  <li key={i} className="p-3 border rounded-lg bg-white/60 shadow-sm">
                    <p className="font-semibold text-lg">{c.name}</p>
                    <p className="text-gray-600">{c.specialization}</p>
                    <p className="text-blue-700">📞 {c.phone}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activePage !== "Book Appointment" && (
            <div className="p-4 text-gray-700">
              <p>
                Content for <strong>{activePage}</strong> will appear here.
              </p>
            </div>
          )}
        </Card>
      </motion.main>
    </div>
  );
}
