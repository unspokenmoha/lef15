'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">الرئيسية</Link>
          <Link href="/products" className="hover:text-blue-600 transition">المنتجات</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">اتصل بنا</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">الرئيسية</Link>
          <Link href="/products" className="block text-gray-700 hover:text-blue-600">المنتجات</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">اتصل بنا</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
