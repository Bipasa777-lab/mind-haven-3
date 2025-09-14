// src/app/dashboard/ai-chart-support/page.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { SendIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  content: string;
  avatar: string;
}

export default function Desktop() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: 1, type: "ai", content: "Hi! How can I help you today?", avatar: "/image-7.png" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      type: "user",
      content: input,
      avatar: "/image-4.png",
    };

    setChatMessages([...chatMessages, userMessage]);
    setInput("");

    // Dummy AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: chatMessages.length + 2,
        type: "ai",
        content: "Thanks for sharing! Remember to take deep breaths and relax.",
        avatar: "/image-7.png",
      };
      setChatMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="bg-[#a3d2ff] flex justify-center items-center min-h-screen p-4">
      <Card className="bg-neutral-100 rounded-3xl w-full max-w-[800px] h-[600px] flex flex-col shadow-lg">
        {/* Header */}
        <header className="flex items-center gap-4 p-6 border-b border-gray-300">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/image-7.png" alt="AI Assistant" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold">AI Mental Health Assistance</h1>
            <p className="text-sm text-gray-600">Available 24/7 for immediate support</p>
          </div>
        </header>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.type === "ai" && (
                <Avatar className="w-12 h-12 flex-shrink-0">
                  <AvatarImage src={message.avatar} alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}

              <div
                className={`px-4 py-2 rounded-xl max-w-[70%] break-words ${
                  message.type === "ai" ? "bg-blue-300 text-black" : "bg-blue-600 text-white"
                }`}
              >
                {message.content}
              </div>

              {message.type === "user" && (
                <Avatar className="w-12 h-12 flex-shrink-0">
                  <AvatarImage src={message.avatar} alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input area */}
        <div className="flex p-6 border-t border-gray-300 gap-3">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} size="icon" className="bg-blue-500 hover:bg-blue-600 text-white">
            <SendIcon />
          </Button>
        </div>
      </Card>
    </div>
  );
}
