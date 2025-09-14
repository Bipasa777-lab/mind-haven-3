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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 animate-gradient">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <motion.main
        key={activePage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-6 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <Card className="w-full bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">{activePage}</h2>

            {activePage === "Book Appointment" && !bookingComplete && (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* User Details */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </motion.div>

                  {/* Session Type */}
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      className={`flex-1 rounded-lg transition-all ${
                        sessionType === "in-person"
                          ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() => setSessionType("in-person")}
                    >
                      In-person
                    </Button>
                    <Button
                      type="button"
                      className={`flex-1 rounded-lg transition-all ${
                        sessionType === "online"
                          ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
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
                      className="rounded-lg"
                    />
                  </div>

                  {/* Time Selector */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Select Time (IST)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time, i) => (
                        <motion.div
                          key={i}
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Button
                            type="button"
                            className={`w-full rounded-lg transition-all ${
                              selectedTime === time
                                ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform">
                    Complete Booking
                  </Button>
                </form>
              </CardContent>
            )}

            {/* Booking Complete Section */}
            {activePage === "Book Appointment" && bookingComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-4 text-green-700"
              >
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
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 shadow-sm"
                    >
                      <p className="font-semibold text-lg">{c.name}</p>
                      <p className="text-gray-600">{c.specialization}</p>
                      <p className="text-blue-700">📞 {c.phone}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activePage !== "Book Appointment" && (
              <div className="p-4 text-gray-700">
                <p>
                  Content for <strong>{activePage}</strong> will appear here.
                </p>
              </div>
            )}
          </Card>
        </motion.div>
      </motion.main>
    </div>
  );
}
