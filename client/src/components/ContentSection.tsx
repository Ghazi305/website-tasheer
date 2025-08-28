// components/ContentSection.tsx
import Image from 'next/image';

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isImageLeft?: boolean; // خاصية لتبديل ترتيب الصورة والنص
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isImageLeft = false,
}) => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className={`container mx-auto px-4 md:px-12 flex flex-col items-center ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12`}>
        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9 md:aspect-h-10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;