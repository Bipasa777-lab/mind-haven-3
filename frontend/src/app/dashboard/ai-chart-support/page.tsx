// src/app/dashboard/ai-chart-support/page.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { SendIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [modelName, setModelName] = useState("mental_health"); // Default model
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

    // Call AI service
    axios.post("http://localhost:5000/api/ai-chat", { text: input, modelName })
      .then((response) => {
        const aiMessage: ChatMessage = {
          id: chatMessages.length + 2,
          type: "ai",
          content: response.data.response, // Assuming response.data has a 'response' field
          avatar: "/image-7.png",
        };
        setChatMessages((prev) => [...prev, aiMessage]);
      })
      .catch((error) => {
        console.error("Error calling AI service:", error);
        const errorMessage: ChatMessage = {
          id: chatMessages.length + 2,
          type: "ai",
          content: "Sorry, I'm having trouble connecting to the AI. Please try again later.",
          avatar: "/image-7.png",
        };
        setChatMessages((prev) => [...prev, errorMessage]);
      });
  };

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 animate-gradient-x flex justify-center items-center min-h-screen p-4">
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl w-full max-w-[850px] h-[650px] flex flex-col shadow-2xl border border-white/40">
        
        {/* Header */}
        <header className="flex items-center gap-4 p-6 border-b border-gray-300/50 bg-white/30 backdrop-blur-md rounded-t-3xl">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/image-7.png" alt="AI Assistant" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">AI Mental Health Assistance</h1>
            <p className="text-sm text-gray-600">Available 24/7 for immediate support</p>
          </div>
          <Select onValueChange={(value) => setModelName(value)} defaultValue={modelName}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mental_health">Mental Health Chatbot</SelectItem>
              <SelectItem value="suicidality">Suicidality Chatbot</SelectItem>
            </SelectContent>
          </Select>
        </header>

        {/* Chat area with animated gradient background */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 relative rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 animate-gradient-xy opacity-60 rounded-2xl" />
          
          <div className="relative z-10 space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-3 ${
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
                  className={`px-5 py-3 rounded-2xl shadow-md max-w-[70%] text-sm leading-relaxed ${
                    message.type === "ai"
                      ? "bg-gradient-to-r from-blue-300 to-blue-400 text-black"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
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
        </div>

        {/* Input area */}
        <div className="flex p-6 border-t border-gray-300/50 bg-white/30 backdrop-blur-md gap-3 rounded-b-3xl">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-full border border-gray-300/50 bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-blue-400"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md"
          >
            <SendIcon />
          </Button>
        </div>
      </Card>
    </div>
  );
}
