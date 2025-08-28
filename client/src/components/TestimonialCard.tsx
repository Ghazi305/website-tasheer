// components/TestimonialCard.tsx
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  course: string;
  testimonial: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, course, testimonial, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full flex-shrink-0 md:w-1/2 lg:w-1/3">
      {/* User Image */}
      <div className="flex justify-center mb-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${name}'s photo`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="text-center mb-4">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{course}</p>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;