"use client";

import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const sidebarMenuItems = [
  { label: "AI Chart Support", active: false },
  { label: "Book Appointment", active: false },
  { label: "Resources", active: false },
  { label: "Peer Support", active: true },
  { label: "Mental Screening", active: false },
];

const categoryItems = [
  { name: "All Posts", suggestions: ["Exam tips", "Group study help", "Sleep hacks"] },
  { name: "Academic Stress", suggestions: ["Time management", "Overcoming procrastination"] },
  { name: "Social Support", suggestions: ["Making friends", "Dealing with loneliness"] },
  { name: "Wellness Tips", suggestions: ["Daily meditation", "Healthy eating"] },
];

const discussionItems = [
  "Dealing with exam anxiety",
  "Stress tips",
  "Healthy habits",
];

const supportNumbers = [
  { name: "Helpline 1", number: "+911234567890" },
  { name: "Helpline 2", number: "+919876543210" },
  { name: "Helpline 3", number: "+911112223334" },
];

export default function PeerSupportPage(): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSend = () => {
    if (!selectedNumber) {
      alert("⚠️ Please select a support number first!");
      return;
    }
    if (!message.trim()) {
      alert("⚠️ Please type a message before sending.");
      return;
    }
    console.log(`Message sent to ${selectedNumber}: ${message}`);
    alert(`✅ Message sent to ${selectedNumber}`);
    setMessage("");
  };

  const handleSidebarClick = (label: string) => {
    console.log(`Sidebar option clicked: ${label}`);
    setSidebarOpen(false);
  };

  const handleDiscussionClick = (discussion: string) => {
    setMessage(discussion);
  };

  const handleCategoryClick = (category: string) => {
    const cat = categoryItems.find((c) => c.name === category);
    setSuggestions(cat ? cat.suggestions : []);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex flex-col font-sans">
      {/* Top Peer Support Header */}
      <header className="flex items-center justify-between p-4 bg-white/30 backdrop-blur-md shadow-md rounded-b-2xl">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-black hover:bg-white/40 rounded-full transition-all duration-300"
        >
          <Menu className="w-8 h-8" />
        </Button>

        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide drop-shadow">
          Peer Support
        </h1>

        <Avatar className="ring-2 ring-white/60 shadow-md">
          <AvatarImage src="/image-4.png" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 text-white shadow-2xl z-50 p-6 rounded-r-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Mind Heaven</h2>
            <nav className="flex flex-col gap-3">
              {sidebarMenuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => handleSidebarClick(item.label)}
                  className={`justify-start text-lg rounded-xl px-3 py-2 transition-all duration-300 ${
                    item.active
                      ? "bg-blue-700 text-white shadow"
                      : "hover:bg-blue-600/50"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row gap-8 p-8">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/3"
        >
          <Card className="w-full bg-white/40 backdrop-blur-xl shadow-xl hover:shadow-2xl rounded-2xl p-6 transition-all duration-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Categories</h2>
            <nav className="flex flex-col gap-3">
              {categoryItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => handleCategoryClick(item.name)}
                  className="justify-start text-lg hover:bg-white/50 rounded-xl transition-all duration-300"
                >
                  {item.name}
                </Button>
              ))}
            </nav>

            {suggestions.length > 0 && (
              <div className="mt-5 p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-inner transition-all duration-500">
                <h3 className="font-semibold mb-2 text-gray-700">Suggestions:</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {suggestions.map((s, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer hover:text-blue-700 transition-colors duration-200"
                      onClick={() => setMessage(s)}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Discussions + Message Box */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex-1"
        >
          <Card className="w-full bg-white/40 backdrop-blur-xl shadow-xl hover:shadow-2xl rounded-2xl p-6 transition-all duration-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Discussions</h2>
            <div className="flex flex-col gap-4 mb-6">
              {discussionItems.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleDiscussionClick(item)}
                  className="w-full justify-start text-lg bg-white/50 hover:bg-white/70 rounded-xl transition-all duration-300 shadow-sm"
                >
                  {item}
                </Button>
              ))}
            </div>

            {/* Message Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-md"
            >
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-3 rounded-xl border border-gray-300 bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                rows={4}
              />

              <div className="mt-4">
                <Button
                  onClick={() => setSupportOpen(!supportOpen)}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-xl shadow-md transition-all duration-300"
                >
                  {supportOpen ? "Hide Support Numbers" : "Support Options"}
                </Button>

                <AnimatePresence>
                  {supportOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-3 flex flex-col gap-2"
                    >
                      {supportNumbers.map((item, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          onClick={() => setSelectedNumber(item.number)}
                          className={`justify-start rounded-xl transition-all duration-300 ${
                            selectedNumber === item.number
                              ? "border-blue-600 bg-blue-100"
                              : "hover:bg-white/50"
                          }`}
                        >
                          {item.name} - {item.number}
                        </Button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  onClick={handleSend}
                  className="bg-green-600 hover:bg-green-700 text-white w-full mt-3 rounded-xl shadow-md transition-all duration-300"
                >
                  Send
                </Button>
              </div>
            </motion.div>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}
