"use client";
import { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", alt: "Home" },
  { href: "/about", alt: "About" },
  { href: "/projects", alt: "Projects" },
  { href: "/contact", alt: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <>
      <header className="flex justify-center relative">
        <div className="w-full p-6 md:px-4 bg-neutral-700 relative">
          <div className="absolute bg-white bottom-0 left-0 border-emerald-600 border-b-2 w-full animate-width"></div>
          <div className="flex items-center justify-between lg:w-3/4 xl:w-3/5 m-auto animate-fade-down animate-once animate-duration-500 animate-ease-in-out">
            <p className="text-4xl font-bold">
              Nahuel Mesa<strong className="text-emerald-400">.</strong>
            </p>
            <nav className="hidden md:flex gap-10 font-semibold">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`md:text-lg hover:text-emerald-100 transition-all duration-200 group ${
                    link.href === pathname && "text-emerald-100"
                  }`}
                >
                  {link.alt}
                  <span
                    className={`block  ${
                      link.href === pathname ? "max-w-full" : "max-w-0"
                    } group-hover:max-w-full transition-all duration-200 h-0.5 bg-emerald-400`}
                  ></span>
                </Link>
              ))}
            </nav>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="flex flex-col justify-center items-center md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`bg-emerald-600 block transition-all duration-200 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
              ></span>
              <span
                className={`bg-emerald-600 block transition-all duration-150 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={`bg-emerald-600 block transition-all duration-200 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden z-10 absolute w-full opacity-[0.99] transition-all duration-300 bg-neutral-900 text-white flex flex-col ${
          isOpen ? "max-h-96" : "max-h-0 invisible"
        }`}
      >
        {links.map((link, i) => (
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            key={i}
            href={link.href}
            style={{ transitionDelay: `${isOpen ? `${i * 50}ms` : ""}` }}
            className={`p-4 text-xl transition-all ${
              isOpen ? "opacity-100 duration-500" : "opacity-0 duration-100"
            }`}
          >
            {link.alt}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
