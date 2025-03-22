"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <Image 
            src="/logo.png" 
            alt="Logo" 
            width={120} 
            height={40} 
            className="h-auto w-auto object-contain"
          />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>

      
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className={path === "/" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"}>Home</Link>
          </li>
          <li>
            <Link href="/Service" className={path === "/Service" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"}>Services</Link>
          </li>
          <li>
            <Link href="/Blog" className={path === "/Blog" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"}>Blog</Link>
          </li>
          <li>
            <Link href="/About" className={path === "/About" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"}>About Us</Link>
          </li>
          <li>
            <Link href="/Contact" className={path === "/Contact" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"}>Contact</Link>
          </li>
        </ul>
        <div className="flex space-x-2">
          <Link href="/Login" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Login
          </Link>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Book Demo</button>
        </div>
      </div>

      {/* small screens navigation bar */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-2">
          <ul className="flex flex-col space-y-2 text-lg w-full text-center">
            <li>
              <Link href="/" className={path === "/" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"} onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/Service" className={path === "/Service" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"} onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/Blog" className={path === "/Blog" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"} onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/About" className={path === "/About" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"} onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link href="/Contact" className={path === "/Contact" ? "text-green-500 font-bold" : "text-gray-700 hover:text-green-500"} onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

