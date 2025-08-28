// components/CounselorCard.tsx
import Image from 'next/image';

interface CounselorCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const CounselorCard: React.FC<CounselorCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Photo Container with Background */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden mb-4">
        {/* Yellow-ish background to match the design */}
        <div className="absolute inset-0 bg-yellow-400 opacity-80 rounded-lg"></div>
        <Image
          src={imageSrc}
          alt={`Photo of ${name}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg absolute inset-0 z-10"
        />
      </div>

      {/* Name and Title */}
      <h3 className="font-bold text-lg md:text-xl text-gray-800">{name}</h3>
      <p className="text-sm md:text-base text-gray-600">{title}</p>
    </div>
  );
};

export default CounselorCard;