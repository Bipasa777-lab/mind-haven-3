import React from "react";

export default function AboutPage() {
  return (
    <section
      id="about" // ✅ anchor for navbar scroll
      className="bg-[#a3d2ff] min-h-screen w-full flex justify-center"
    >
      <div className="bg-[#a3d2ff] w-full max-w-[1440px] px-12 py-12 relative">
        {/* Header */}
        <header className="flex items-center mb-12">
          <img
            className="w-[80px] h-[80px] object-cover"
            alt="Mind Heaven Logo"
            src="/image-1.png"
          />
          <div className="ml-4">
            <h1 className="text-4xl font-bold text-black">Mind</h1>
            <span className="text-2xl text-black">Heaven</span>
          </div>
        </header>

        {/* Content */}
        <main className="space-y-10 text-black font-sans">
          {/* Project Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
            <p>
              The project focuses on building a digital mental health and
              psychological support system designed specifically for students in
              higher education. It aims to provide accessible, confidential, and
              user-friendly mental health resources through technology. The
              system combines AI-driven chat support, peer interaction, and
              professional booking options to create a comprehensive mental
              health support ecosystem.
            </p>
          </section>

          {/* Objectives */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Project Objectives</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>To provide accessible psychological support to students at any time.</li>
              <li>To create a safe and inclusive digital space for peer discussions.</li>
              <li>To reduce stigma around mental health by integrating resources into everyday student life.</li>
              <li>To enable easy access to professionals via booking and scheduling features.</li>
              <li>To leverage AI-driven support for immediate emotional assistance.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Landing Page – Clear introduction, mental health awareness, and quick navigation.</li>
              <li>AI-Guided Chat Support – Real-time conversations with an AI chatbot trained on psychological support prompts.</li>
              <li>Booking System – Students can schedule sessions with licensed counselors or therapists.</li>
              <li>Resource Hub – Articles, videos, audio relaxation tracks, worksheets, and self-care guides.</li>
              <li>Peer Support Forum – Safe, moderated community discussions among students.</li>
              <li>Admin Dashboard – For counselors and administrators to manage sessions, monitor usage, and review anonymized data.</li>
              <li>Emergency Support – Quick links to crisis hotlines and immediate help.</li>
            </ul>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Use Cases</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>A student experiencing exam stress can use the chatbot for coping strategies and guided breathing exercises.</li>
              <li>A student facing anxiety or depression can schedule a session with a professional through the booking system.</li>
              <li>A student feeling lonely can connect with peers in the community forum.</li>
              <li>A university counselor can monitor student needs and improve services using the admin dashboard.</li>
              <li>Students can access self-help resources like meditation audio, therapy worksheets, and awareness videos.</li>
            </ul>
          </section>

          {/* Future Roadmap */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Future Roadmap</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>AI Personalization – Tailoring recommendations and coping strategies based on user behavior.</li>
              <li>Mobile App Development – Extending access beyond web to iOS/Android.</li>
              <li>Gamification Features – Rewards, challenges, and mental health streaks to encourage engagement.</li>
              <li>Integration with University Systems – Linking with academic calendars and student services.</li>
              <li>Multilingual Support – Expanding accessibility for international students.</li>
              <li>Data Analytics – Using anonymized insights to identify student needs and improve interventions.</li>
              <li>Collaboration with NGOs & Hospitals – Expanding the support network.</li>
            </ul>
          </section>
        </main>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 w-full">
          <img src="/wave-shape.svg" alt="Wave design" className="w-full" />
        </div>
      </div>
    </section>
  );
}
