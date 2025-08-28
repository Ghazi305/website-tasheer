// components/HelpSection.tsx
import Link from 'next/link';

const HelpSection = () => {
  return (
    <section className="bg-blue-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-blue-100 opacity-20 transform -skew-y-3 scale-110"></div>
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-blue-200 opacity-10 transform skew-y-6"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Need Help? Let Us Know!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          YourUni helped more than 1,500 students
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-500 text-gray-800 font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Contact Us Now
          <span className="ml-2 inline-block">→</span>
        </Link>
      </div>
    </section>
  );
};

export default HelpSection;