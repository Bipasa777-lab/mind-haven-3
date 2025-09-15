"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 min-h-screen w-full flex justify-center font-sans"
    >
      <div className="w-full max-w-[1200px] px-6 md:px-12 py-16 relative">
        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <img
            className="w-[100px] h-[100px] object-cover mb-4 drop-shadow-lg"
            alt="Mind Heaven Logo"
            src="/min.svg"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow">
            Mind Haven
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-3 max-w-2xl">
            Digital Mental Health and Psychological Support System for Students in Higher Education
          </p>
        </motion.header>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Project Overview */}
          <Card className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Our project, <strong>Mind Haven</strong>, addresses the rising mental health concerns
                among students in higher education. It provides an AI + Human hybrid support system
                combining empathetic chatbots, counselor booking, peer forums, and resources. The
                platform ensures confidentiality, accessibility, and early detection of risks while
                bridging the gap where counseling centers remain underused.
              </p>
            </CardContent>
          </Card>

          {/* Technical Approach */}
          <Card className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Technical Approach</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Frontend: Next.js + TypeScript + Tailwind CSS (Student UI, Dashboards)</li>
                <li>Backend: Node.js (APIs) + FastAPI (AI services)</li>
                <li>Database: MongoDB / PostgreSQL</li>
                <li>
                  AI Models: <code>thrishala/mental_health_chatbot</code> for empathetic support,
                  <code>sentinet/suicidality</code> for suicide risk detection
                </li>
                <li>Modular microservices for chat, booking, resources, peer-support, and analytics</li>
              </ul>
            </CardContent>
          </Card>

          {/* Feasibility & Challenges */}
          <Card className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Feasibility & Challenges</h2>
              <p className="text-gray-700 mb-3">
                Built with open-source and cloud-ready technologies, our system is scalable across
                institutions. However, challenges include data privacy, reliability of AI in sensitive
                contexts, and real-time crisis management.
              </p>
              <h3 className="text-xl font-semibold text-gray-800">Strategies:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                <li>End-to-end encryption & anonymization</li>
                <li>Human-in-the-loop escalation for high-risk cases</li>
                <li>Continuous retraining of AI models to improve accuracy</li>
              </ul>
            </CardContent>
          </Card>

          {/* Impact & Benefits */}
          <Card className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Impact & Benefits</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Students:</strong> Stigma-free, 24/7 support in regional languages.</li>
                <li><strong>Colleges:</strong> Actionable analytics for mental health policy-making.</li>
                <li><strong>Counselors:</strong> Focus on high-risk students with reduced workload.</li>
                <li><strong>Institutions:</strong> Improved academic performance and retention.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Future Roadmap */}
          <Card className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Future Roadmap</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Mobile app integration for iOS & Android</li>
                <li>Smarter AI models fine-tuned for regional languages</li>
                <li>Integration with Telehealth & National Helplines</li>
                <li>Predictive analytics to anticipate mental health trends</li>
              </ul>
            </CardContent>
          </Card>

          {/* Research & References */}
          <Card className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Research & References</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a href="https://www.nature.com/articles/s41746-019-0197-0" className="text-blue-700 hover:underline">Nature Digital Medicine – AI for Mental Health</a></li>
                <li><a href="https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health" className="text-blue-700 hover:underline">WHO – Adolescent Mental Health</a></li>
                <li><a href="https://huggingface.co/thrishala/mental_health_chatbot" className="text-blue-700 hover:underline">Hugging Face – Mental Health Chatbot</a></li>
                <li><a href="https://huggingface.co/sentinet/suicidality" className="text-blue-700 hover:underline">Hugging Face – Suicidality Risk Model</a></li>
                <li><a href="https://www.harvard.edu/mental-health/" className="text-blue-700 hover:underline">Harvard – Mental Health Research</a></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 w-full opacity-70">
          <img src="/wave-shape.svg" alt="Wave design" className="w-full" />
        </div>
      </div>
    </section>
  );
}
