// components/StatsCardsSection.tsx
import StatCard from './StatCard';

const statsData = [
  {
    count: 39,
    label: "جامعة",
    buttonText: "عرض كل الجامعات",
    linkHref: "/universities"
  },
  {
    count: 3032,
    label: "دورة",
    buttonText: "عرض كل الدورات",
    linkHref: "/courses"
  },
  {
    count: 17,
    label: "مركز لغة",
    buttonText: "عرض كل مراكز اللغة",
    linkHref: "/language-centers"
  }
];

const StatsCardsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-xl transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-xl transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              count={stat.count}
              label={stat.label}
              buttonText={stat.buttonText}
              linkHref={stat.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardsSection;