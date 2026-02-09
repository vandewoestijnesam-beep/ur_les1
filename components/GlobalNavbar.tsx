"use client"

import Link from "next/link"

export default function GlobalNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-semibold">
          MyApp
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/home" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/project1" className="text-gray-700 hover:text-blue-600 transition">
            Project 1
          </Link>
          <Link href="/project2" className="text-gray-700 hover:text-blue-600 transition">
            Project 2
          </Link><Link href="/project3" className="text-gray-700 hover:text-blue-600 transition">
            Project 3
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
