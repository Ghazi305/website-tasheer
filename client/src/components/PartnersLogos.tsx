// components/PartnersLogos.tsx
import Image from 'next/image';

const partners = [
  { name: 'Universiti Malaya', logo: '/logos/um-logo.png' },
  { name: 'Universiti Kebangsaan Malaysia', logo: '/logos/ukm-logo.png' },
  { name: 'APU', logo: '/logos/apu-logo.png' },
  { name: 'MMU', logo: '/logos/mmu-logo.png' },
  { name: 'Taylor\'s University', logo: '/logos/taylors-logo.png' },
  { name: 'UiTM', logo: '/logos/uitm-logo.png' },
];

const PartnersLogos = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="relative w-full h-16 md:h-20 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                layout="fill"
                objectFit="contain"
                className="opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersLogos;