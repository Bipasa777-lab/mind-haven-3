"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 lg:px-24 py-3 bg-[#80b6ff] shadow-md">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/min.svg" alt="Mind Heaven" width={40} height={40} />
        <div className="text-black">
          <div className="font-semibold text-lg md:text-xl leading-none">Mind</div>
          <div className="text-xs md:text-sm -mt-1 tracking-wide">Heaven</div>
        </div>
      </Link>

      {/* Buttons Section */}
      <div className="flex gap-3">
        <Link href="/chat">
          <Button className="rounded-full bg-sky-400 hover:bg-sky-500 text-white px-5">
            Chat
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button className="rounded-full bg-sky-400 hover:bg-sky-500 text-white px-5">
           dashboard 
          </Button>
        </Link>
		<Link href="/faq">
          <Button className="rounded-full bg-sky-400 hover:bg-sky-500 text-white px-5">
           FAQ
          </Button>
        </Link>
      </div>
    </header>
  );
}
