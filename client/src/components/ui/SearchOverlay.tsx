// components/SearchOverlay.tsx
'use client';

import { FaSearch, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-24 left-0 w-full bg-gray-50 p-8 border-b border-gray-200 z-40 shadow-lg">
      <div className="max-w-4xl mx-auto">
        {/* Search Input */}
        <div className="flex items-center bg-white border border-gray-300 rounded-xl p-4 shadow-sm mb-6">
          <FaSearch className="text-gray-400 mr-4" />
          <input
            type="text"
            placeholder="البحث في Youruni"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 text-lg mb-2">روابط سريعة</h4>
          <ul>
            <li className="text-gray-600 mb-1">
              <Link href="/universities" onClick={onClose} className="flex items-center hover:text-yellow-500 transition-colors">
                <FaChevronRight className="text-sm mr-2" />
                الجامعات
              </Link>
            </li>
            <li className="text-gray-600 mb-1">
              <Link href="/courses" onClick={onClose} className="flex items-center hover:text-yellow-500 transition-colors">
                <FaChevronRight className="text-sm mr-2" />
                الدورات
              </Link>
            </li>
            <li className="text-gray-600">
              <Link href="/language-centers" onClick={onClose} className="flex items-center hover:text-yellow-500 transition-colors">
                <FaChevronRight className="text-sm mr-2" />
                مراكز اللغة
              </Link>
            </li>
            {/* Add more quick links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;