// components/Footer.js

import Link from 'next/link';
import { FaLinkedin, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white p-6 md:p-12 text-center border-t border-gray-200">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-2xl text-blue-500 mb-6">
          وكالة تاشير
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-gray-800 font-medium">
          <Link href="/universities" className="hover:text-blue-500">الجامعات</Link>
          <Link href="/language-centers" className="hover:text-blue-500">مراكز اللغة</Link>
          <Link href="/courses" className="hover:text-blue-500">الدورات</Link>
          <Link href="/blog" className="hover:text-blue-500">المدونة</Link>
          <Link href="/contact" className="hover:text-blue-500">اتصل بنا</Link>
        </nav>

        {/* Currency Selector */}
        <div className="mb-6 w-full max-w-xs">
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500">
            <option>اختر العملة</option>
            {/* Add more currency options here */}
          </select>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl mb-6 text-gray-800">
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="#" aria-label="TikTok" className="hover:text-blue-500"><FaTiktok /></a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-500"><FaInstagram /></a>
          <a href="#" aria-label="YouTube" className="hover:text-blue-500"><FaYoutube /></a>
        </div>

        {/* Copyright and Legal Links */}
        <div className="text-xs text-gray-500 leading-relaxed text-center">
          <p className="mb-1">© حقوق الطبع والنشر 2024 YourUni. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center space-x-2">
            <Link href="#" className="hover:underline">خدماتنا</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">الشروط والأحكام</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;