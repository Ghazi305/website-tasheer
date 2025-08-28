// components/StatCard.tsx
import { FaBuilding } from 'react-icons/fa';
import Link from 'next/link';

interface StatCardProps {
  count: number | string;
  label: string;
  buttonText: string;
  linkHref: string;
}

const StatCard: React.FC<StatCardProps> = ({ count, label, buttonText, linkHref }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center w-full max-w-xs flex flex-col items-center">
      {/* Icon */}
      <div className="bg-blue-100 p-6 rounded-full mb-4">
        <FaBuilding size={48} className="text-blue-600" />
      </div>

      {/* Count */}
      <p className="text-4xl font-bold text-gray-800 mb-1">{count}</p>

      {/* Label */}
      <p className="text-xl font-medium text-gray-700 mb-6">{label}</p>

      {/* Button */}
      <Link href={linkHref} className="bg-white border border-gray-400 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
        {buttonText}
      </Link>
    </div>
  );
};

export default StatCard;