"use client";

import Link from "next/link";

import { socialMedia } from "@/data/socialMedia";

const Home = () => {
  return (
    <div className="flex items-center flex-col mt-44">
      <div className="w-max">
        <h1 className="animate-typing animate-delay-200 overflow-hidden whitespace-nowrap border-r-4 border-emerald-400 pr-1 text-[3.5rem] md:text-9xl font-bold">
          Nahuel Mesa
        </h1>
        <h3 className="animate-fade-up animate-delay-700 text-3xl md:text-5xl font-bold mt-2 md:mt-4 text-center bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text text-transparent">
          Frontend Developer
        </h3>
      </div>

      <div className="flex gap-6 mt-5 md:mt-10 animate-fade-up animate-delay-1000">
        {socialMedia.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-emerald-600 transition-all text-4xl md:text-5xl"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
