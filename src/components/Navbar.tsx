"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "Inquiry", href: "/inquiry" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold sm:text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-orange-500">Shivam</span>{" "}
          <span className="text-gray-900">Balloon</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/inquiry"
          className="hidden bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 lg:block"
        >
          BOOK AN EVENT
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-gray-100 py-3 text-sm font-semibold text-gray-700 transition hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/inquiry"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              BOOK AN EVENT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}