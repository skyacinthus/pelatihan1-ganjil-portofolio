"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}