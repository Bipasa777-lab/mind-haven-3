"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="relative bg-[#b2d3ff] min-h-screen w-full flex flex-col overflow-hidden pt-16">
      {/* Glowing corners */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-28 h-28 bg-blue-400/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-28 h-28 bg-purple-400/40 rounded-full blur-3xl animate-pulse delay-150" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/30 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex items-center justify-between px-4 md:px-12 lg:px-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg md:max-w-2xl"
        >
          <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight mb-6 text-black drop-shadow-lg">
            <span className="text-[#094279]">Welcome to</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Psychological
            </span>{" "}
            <span className="text-[#094279]">Interventions System</span>
          </h1>

          <p className="text-black/80 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            Offering culturally responsive and inclusive mental health support
            that meets the unique needs of all communities.
          </p>

          <Link href="#get-started">
            <Button className="px-6 md:px-10 h-[52px] md:h-[64px] text-lg md:text-xl font-semibold rounded-[30px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300">
              Get Started 🚀
            </Button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="absolute bottom-0 right-0 flex justify-end"
        >
          <div className="absolute -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-tr from-blue-400/40 to-purple-400/30 blur-3xl animate-pulse" />
          <Image
            src="/robot.svg"
            alt="Illustration"
            width={400}
            height={400}
            className="object-contain drop-shadow-xl w-[260px] sm:w-[320px] md:w-[480px] lg:w-[600px]"
            priority
          />
        </motion.div>
      </main>
    </div>
  );
}
