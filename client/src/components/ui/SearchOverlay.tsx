'use client';

import { useEffect } from 'react';
import { FaSearch, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center pt-24"
      onClick={onClose}
    >
      <div
        className="relative w-full p-8 bg-white bg-opacity-80 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center bg-white bg-opacity-80 border border-gray-300 rounded-xl p-4 shadow-sm mb-6">
          <FaSearch className="text-gray-400 mr-4 ml-4" />
          <input
            type="text"
            placeholder="البحث في تاشير"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 text-lg mb-2">روابط سريعة</h4>
          <ul>
            <li className="text-gray-600 mb-1">
              <Link href="/universities" onClick={onClose} className="flex items-center hover:text-blue-500 transition-colors">
                <FaChevronRight className="text-sm mr-2" />
                الجامعات
              </Link>
            </li>
            <li className="text-gray-600 mb-1">
              <Link href="/courses" onClick={onClose} className="flex items-center hover:text-blue-500 transition-colors">
                <FaChevronRight className="text-sm mr-2" />
                الدورات
              </Link>
            </li>
            <li className="text-gray-600">
              <Link href="/language-centers" onClick={onClose} className="flex items-center hover:text-blue-500 transition-colors">
                <FaChevronRight className="text-sm mr-2" />
                مراكز اللغة
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;