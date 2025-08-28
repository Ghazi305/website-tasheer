// components/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  isLarge?: boolean;
  linkHref: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isLarge = false,
  linkHref,
}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${isLarge ? 'p-6 flex flex-col md:flex-row' : 'p-6 flex flex-col'}`}>
      {/* Blog Post Image (for large card) */}
      {isLarge && imageSrc && (
        <div className="relative w-full md:w-1/2 aspect-w-16 aspect-h-9 md:aspect-h-10 rounded-xl overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      )}

      {/* Text Content */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className={`font-bold text-gray-800 ${isLarge ? 'text-xl md:text-2xl mb-2' : 'text-lg md:text-xl mb-1'}`}>
            {title}
          </h3>
          <p className={`text-gray-600 ${isLarge ? 'text-base leading-relaxed' : 'text-sm leading-snug'}`}>
            {description}
          </p>
        </div>
        
        {/* 'Read More' link - you can show it here if needed */}
      </div>
    </div>
  );
};

export default BlogCard;