"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

type ResourceType = "Video" | "Audio" | "Article" | "Worksheet";

interface Resource {
  id: number;
  type: ResourceType;
  title: string;
  description: string;
  link: string;
}

const resources: Resource[] = [
  // ---- Videos ----
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    type: "Video" as ResourceType,
    title: `Mental Health Video ${i + 1}`,
    description: "Educational video on wellness",
    link: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  })),
  // ---- Audios ----
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: i + 20,
    type: "Audio" as ResourceType,
    title: `Relaxing Audio ${i + 1}`,
    description: "Soothing audio for relaxation",
    link: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
  })),
  // ---- Articles ----
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: i + 40,
    type: "Article" as ResourceType,
    title: `Helpful Article ${i + 1}`,
    description: "Read insightful content",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  })),
  // ---- Worksheets ----
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: i + 60,
    type: "Worksheet" as ResourceType,
    title: `Worksheet ${i + 1}`,
    description: "Downloadable worksheet",
    link: "https://file-examples.com/storage/fe3e35bce9f3b18a0f1b993/2017/10/file-sample_150kB.pdf",
  })),
];

export default function ResourceHub() {
  const [query, setQuery] = useState("");

  const filtered = resources.filter((res) =>
    [res.title, res.type, res.description]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#a3d2ff] pt-28 px-6 md:px-20">
      {/* Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-black">Resource Hub</h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-4">
          Browse and access our collection of mental health resources
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="flex items-center bg-white rounded-2xl px-4 py-3 shadow-lg">
          <Search className="w-6 h-6 text-gray-500 mr-3" />
          <Input
            placeholder="Search resources (e.g., video, audio, article)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border-0 bg-transparent text-lg focus-visible:ring-0"
          />
        </div>
      </motion.div>

      {/* Resource List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filtered.length === 0 ? (
          <p className="text-gray-700 text-lg">No resources found.</p>
        ) : (
          filtered.map((res, index) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="w-full max-w-sm"
            >
              <Card
                className="bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 
                           animate-gradient bg-[length:200%_200%] 
                           shadow-lg hover:shadow-2xl transition rounded-2xl relative"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center relative z-10">
                  <h3 className="text-2xl font-semibold text-black">{res.title}</h3>
                  <p className="text-md text-gray-700 mt-2">{res.description}</p>
                  <span className="mt-2 text-sm text-blue-600 font-medium">
                    {res.type}
                  </span>
                  <Link
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={res.type === "Worksheet" || res.type === "Audio"}
                    className="mt-4 inline-block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full transition"
                  >
                    {res.type === "Video" || res.type === "Article" ? "View" : "Download"}
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
    </main>
  );
}
