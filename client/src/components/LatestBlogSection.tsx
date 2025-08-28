// components/LatestBlogSection.tsx
import BlogCard from './BlogCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const blogPosts = {
  main: {
    title: "تكلفة المعيشة للطلاب الدوليين في ماليزيا 2025",
    description: "اكتشف كم تبلغ تكلفة المعيشة كطالب في ماليزيا لعام 2025.",
    imageSrc: "/images/blog-cost-of-living.jpg", // استبدل بمسار الصورة الحقيقية
    linkHref: "/blog/cost-of-living",
  },
  sidePosts: [
    {
      title: "إجابة على سؤال: هل يمكن للطلاب الدوليين العمل في ماليزيا أثناء الدراسة؟",
      description: "سيساعدك هذا المقال في استكشاف القوانين، اللوائح، القيود والفرص المتاحة للطلاب الدوليين.",
      linkHref: "/blog/work-while-studying",
    },
    {
      title: "أفضل 10 جامعات في ماليزيا لا يمكنك تفويتها",
      description: "اكتشف أفضل الجامعات في ماليزيا من خلال دليلنا الشامل. من البرامج الأكاديمية إلى...",
      linkHref: "/blog/top-10-universities",
    },
  ]
};

const LatestBlogSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-xl transform -rotate-12"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            أحدث المدونات
          </h2>
          <Link href="/blog" className="flex items-center space-x-2 text-gray-600 font-semibold hover:text-blue-500 transition-colors">
            <span>اقرأ المزيد</span>
            <FaArrowRight />
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Blog Post */}
          <div className="w-full lg:w-3/5">
            <BlogCard
              title={blogPosts.main.title}
              description={blogPosts.main.description}
              imageSrc={blogPosts.main.imageSrc}
              imageAlt={blogPosts.main.title}
              linkHref={blogPosts.main.linkHref}
              isLarge={true}
            />
          </div>

          {/* Side Blog Posts */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            {blogPosts.sidePosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                description={post.description}
                linkHref={post.linkHref}
                isLarge={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;