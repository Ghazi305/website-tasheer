import Link from 'next/link';
import { FaLinkedin, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-start p-6">
      <button onClick={onClose} className="self-end mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-6 text-xl text-white font-medium">
        <Link href="/universities" className="text-gray-700 hover:text-blue-500">الجامعات</Link>
        <Link href="/courses" className="text-gray-700 hover:text-blue-500">الدورات</Link>
        <Link href="/language-centers" className="text-gray-700 hover:text-blue-500">مراكز اللغة</Link>
        <Link href="/blog" className="text-gray-700 hover:text-blue-500">المدونة</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500">اتصل بنا</Link>
      </nav>

      {/* Currency Selector */}
      <div className="mt-8 w-full max-w-xs">
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500">
          <option>اختر العملة</option>
        </select>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex space-x-6 text-2xl">
        <a href="#" aria-label="لينكدإن" className="text-gray-700 hover:text-blue-500"><FaLinkedin /></a>
        <a href="#" aria-label="تيك توك" className="text-gray-700 hover:text-blue-500"><FaTiktok /></a>
        <a href="#" aria-label="انستغرام" className="text-gray-700 hover:text-blue-500"><FaInstagram /></a>
        <a href="#" aria-label="يوتيوب" className="text-gray-700 hover:text-blue-500"><FaYoutube /></a>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-sm text-center text-gray-500">
        <p>© حقوق النشر 2024 YourUni. جميع الحقوق محفوظة.</p>
        <p>خدماتنا | الشروط والأحكام | سياسة الخصوصية</p>
      </div>
    </div>
  );
};

export default MobileMenu;