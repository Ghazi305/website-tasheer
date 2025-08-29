'use client';


import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import SearchOverlay from './ui/SearchOverlay';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchOverlayOpen(false);
  };
  const closeMenu = () => setMenuOpen(false);

  const toggleSearchOverlay = () => {
    setSearchOverlayOpen(!searchOverlayOpen);
    setMenuOpen(false);
  };
  const closeSearchOverlay = () => setSearchOverlayOpen(false);

  return (
    <header className="sticky top-0 w-full h-24 flex justify-between items-center px-6 shadow-sm md:px-12 bg-white border-b border-gray-200 z-50">
      {/* Logo */}
      <Link href="/" className="font-extrabold text-2xl">
        <span className="text-purple-600">وكالة تاشير</span>
      </Link>

      {/* Desktop Navigation & Icons */}
      <div className="flex items-center space-x-8">
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link href="/universities" className="text-gray-700 hover:text-blue-500 transition-colors">الجامعات</Link>
          <Link href="/courses" className="text-gray-700 hover:text-blue-500 transition-colors">الدورات</Link>
          <Link href="/language-centers" className="text-gray-700 hover:text-blue-500 transition-colors">مراكز اللغة</Link>
          <Link href="/blog" className="text-gray-800 hover:text-blue-500 transition-colors">المدونة</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition-colors">اتصل بنا</Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-6">
          {/* Search Button */}
          <button aria-label="بحث" className="text-gray-800 hover:text-blue-500" onClick={toggleSearchOverlay}>
            <FaSearch size={18} />
          </button>
          
          {/* Mobile Menu Button */}
          <button
            aria-label="القائمة"
            className="md:hidden text-gray-800 hover:text-blue-500"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
    
      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOverlayOpen} onClose={closeSearchOverlay} />
    </header>
  );
};

export default Header;