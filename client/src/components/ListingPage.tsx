// components/ListingPage.tsx
'use client';

import { FaSearch, FaUniversity, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface ListItemCardProps {
  logoSrc: string;
  logoAlt: string;
  name: string;
  location?: string;
  courseDetails?: string;
  offer?: string;
  duration?: string;
  intake?: string;
  linkHref: string;
  isCourse?: boolean;
}

const ListItemCard: React.FC<ListItemCardProps> = ({
  logoSrc,
  logoAlt,
  name,
  location,
  courseDetails,
  offer,
  duration,
  intake,
  linkHref,
  isCourse = false
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-start gap-6 mb-6">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <Image
          src={logoSrc}
          alt={logoAlt}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-xl text-white mb-1">{name}</h3>
        {location && (
          <p className="text-gray-600 flex items-center mb-2">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            {location}
          </p>
        )}
        {courseDetails && (
          <p className="text-sm text-gray-600 mb-2">{courseDetails}</p>
        )}
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
          {offer && <span>{offer}</span>}
          {duration && <span>• {duration}</span>}
          {intake && <span>• {intake}</span>}
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
        <button className="w-full bg-blue-500 text-white font-semibold p-2 text-center rounded-lg hover:bg-blue-600 transition-colors">
          قدم الآن
        </button>
        <Link href={linkHref} className="w-full bg-white border border-gray-400 text-white font-semibold py-2 rounded-lg text-center hover:bg-gray-100 transition-colors">
          اسألنا
        </Link>
      </div>
    </div>
  );
};

// هذا هو المكون الرئيسي للصفحة
interface ListingPageProps {
  pageTitle: string;
  totalItems: number;
  items: any[]; // يمكنك تعريف نوع أكثر تحديداً هنا
  isCoursePage?: boolean;
}

const ListingPage: React.FC<ListingPageProps> = ({ pageTitle, totalItems, items, isCoursePage = false }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Title & Stats */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{pageTitle}</h1>
        <p className="text-gray-600 text-lg mb-6">إجمالي {pageTitle}: {totalItems}</p>

        {/* Search & Sort Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="relative w-full sm:w-1/2">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="بحث / تصفية"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative w-full sm:w-1/4">
            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <select className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>الأفضل مطابقة (افتراضي)</option>
              {/* Add more sorting options */}
            </select>
          </div>
        </div>

        {/* List of Items */}
        <div>
          {items.map((item, index) => (
            <ListItemCard
              key={index}
              logoSrc={item.logoSrc}
              logoAlt={item.name}
              name={item.name}
              location={item.location}
              courseDetails={item.courseDetails}
              offer={item.offer}
              duration={item.duration}
              intake={item.intake}
              linkHref={item.linkHref}
              isCourse={isCoursePage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;