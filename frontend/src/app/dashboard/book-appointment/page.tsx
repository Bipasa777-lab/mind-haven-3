"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";

// Counsellors with time slots
const counsellors = [
  { name: "Dr. Aditi Sharma", phone: "+91 9876543210", specialization: "Student Stress Management", availableSlots: ["10:00 AM IST", "02:30 PM IST"] },
  { name: "Dr. Rahul Mehta", phone: "+91 9123456780", specialization: "Anxiety & Depression", availableSlots: ["11:30 AM IST", "04:00 PM IST"] },
  { name: "Dr. Priya Nair", phone: "+91 9811122233", specialization: "Career Counselling", availableSlots: ["01:00 PM IST", "05:30 PM IST"] },
  { name: "Dr. Arjun Singh", phone: "+91 9900112233", specialization: "Mindfulness & Meditation", availableSlots: ["10:00 AM IST", "01:00 PM IST"] },
  { name: "Dr. Kavita Das", phone: "+91 9988776655", specialization: "Sleep & Lifestyle Therapy", availableSlots: ["11:30 AM IST", "02:30 PM IST"] },
  { name: "Dr. Vivek Patel", phone: "+91 9765432109", specialization: "Youth Counselling", availableSlots: ["04:00 PM IST", "05:30 PM IST"] },
];

export default function BookPage(): JSX.Element {
  const [activePage, setActivePage] = useState("Book Appointment");
  const [bookingComplete, setBookingComplete] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [sessionType, setSessionType] = useState<"in-person" | "online">("in-person");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [selectedCounsellor, setSelectedCounsellor] = useState<string>("");

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

  // Filter counsellors by selected time
  const availableCounsellors = counsellors.filter(c =>
    c.availableSlots.includes(selectedTime)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <motion.main
        key={activePage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center items-center px-6 py-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <Card className="w-full bg-white/40 backdrop-blur-xl shadow-2xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">{activePage}</h2>

            {/* Booking Form */}
            {activePage === "Book Appointment" && !bookingComplete && !showAdminForm && (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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

                  {/* Date & Time */}
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
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Select Time (IST)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time, i) => (
                        <Button
                          key={i}
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
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
                  >
                    Complete Booking
                  </Button>
                </form>
              </CardContent>
            )}

            {/* Booking Complete -> Show Counsellor Selection */}
            {activePage === "Book Appointment" && bookingComplete && !showAdminForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-4"
              >
                {!selectedCounsellor ? (
                  <>
                    <h3 className="text-xl font-semibold mb-3">✅ Booking Completed!</h3>
                    <p className="mb-3">
                      Appointment on <strong>{selectedDate}</strong> at{" "}
                      <strong>{selectedTime}</strong> ({sessionType}).
                    </p>
                    <p className="mb-3 font-medium">Available Counsellors:</p>
                    <ul className="space-y-3">
                      {availableCounsellors.length > 0 ? (
                        availableCounsellors.map((c, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 shadow-sm cursor-pointer hover:scale-[1.02] transition"
                            onClick={() => setSelectedCounsellor(c.name)}
                          >
                            <p className="font-semibold text-lg">{c.name}</p>
                            <p className="text-gray-600">{c.specialization}</p>
                            <p className="text-blue-700">📞 {c.phone}</p>
                          </motion.li>
                        ))
                      ) : (
                        <p className="text-red-600">❌ No counsellors available at this time.</p>
                      )}
                    </ul>
                  </>
                ) : (
                  <div className="text-green-700">
                    <h3 className="text-xl font-semibold mb-3">🎉 Counsellor Confirmed!</h3>
                    <p>
                      You have booked <strong>{selectedCounsellor}</strong> on{" "}
                      <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> ({sessionType}).
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Admin Form */}
            {showAdminForm && (
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-center">Admin Panel</h3>
                <ul className="space-y-3">
                  {counsellors.map((c, i) => (
                    <li
                      key={i}
                      className="p-3 rounded-lg bg-white/70 shadow flex flex-col"
                    >
                      <p className="font-semibold text-lg">{c.name}</p>
                      <p className="text-gray-600">{c.specialization}</p>
                      <p className="text-blue-700">📞 {c.phone}</p>
                      <p className="text-sm text-gray-500">
                        Available: {c.availableSlots.join(", ")}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>

          {/* Toggle Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-lg shadow-md"
              onClick={() => {
                setShowAdminForm(false);
                setActivePage("Book Appointment");
              }}
            >
              Book Appointment
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-md"
              onClick={() => {
                setShowAdminForm(true);
                setActivePage("Admin Block");
              }}
            >
              Admin Block
            </Button>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
