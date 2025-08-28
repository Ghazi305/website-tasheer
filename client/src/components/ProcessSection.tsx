// components/ProcessSection.tsx
import Image from 'next/image';

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 md:mb-20">
          عمليتنا
        </h2>

        {/* Timeline & Steps Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12 relative">

          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          {/* Vertical Line for Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[20px] w-0.5 bg-gray-300"></div>

          {/* Step 1: Free consultations */}
          <div className="flex flex-col items-center text-center lg:w-1/4 relative">
            <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-lg mb-4 z-10">
              1
            </div>
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/path-to-image/consultation-icon.svg" // استبدل بمسار أيقونتك
                alt="أيقونة استشارات مجانية"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">استشارات مجانية</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              يقدم مستشارو YourUni استشارات مجانية حول كيفية اختيار الدورات والجامعات المثالية في ماليزيا بما يتناسب مع اهتماماتك، مؤهلاتك، وميزانيتك.
            </p>
          </div>

          {/* Step 2: University admission & visa */}
          <div className="flex flex-col items-center text-center lg:w-1/4 relative">
            <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-lg mb-4 z-10">
              2
            </div>
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/path-to-image/admission-icon.svg" // استبدل بمسار أيقونتك
                alt="أيقونة القبول الجامعي والتأشيرة"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">القبول الجامعي والتأشيرة</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              بعد أن تقرر الجامعة والدورة، سيقوم مستشارو YourUni بتقديم جميع المستندات اللازمة لإتمام إجراءات القبول الجامعي، بالإضافة إلى طلب التأشيرة.
            </p>
          </div>

          {/* Step 3: Preparing accommodation */}
          <div className="flex flex-col items-center text-center lg:w-1/4 relative">
            <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-lg mb-4 z-10">
              3
            </div>
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/path-to-image/accommodation-icon.svg" // استبدل بمسار أيقونتك
                alt="أيقونة تجهيز الإقامة"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">تجهيز الإقامة</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              من الأفضل للطلاب ترتيب إقامتهم قبل الوصول إلى ماليزيا. لهذا السبب، سيقوم مستشارو YourUni بإرسال مجموعة متنوعة من خيارات الإقامة لتختار منها.
            </p>
          </div>

          {/* Step 4: Airport pickup */}
          <div className="flex flex-col items-center text-center lg:w-1/4 relative">
            <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-lg mb-4 z-10">
              4
            </div>
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/path-to-image/pickup-icon.svg" // استبدل بمسار أيقونتك
                alt="أيقونة الاستقبال من المطار"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">الاستقبال من المطار</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              نحن نضمن وصولًا سلسًا وخاليًا من التوتر. لدينا فريق سيقوم باصطحابك من المطار وتوصيلك إلى السكن الذي اخترته.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;