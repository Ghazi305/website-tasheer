// components/UniversityLogos.tsx
import React from 'react';

// Replace with your actual image paths or use placeholders
const logos = [
  'https://placehold.co/150x80/281a5c/ffffff?text=UM',
  'https://placehold.co/150x80/003882/ffffff?text=UKM',
  'https://placehold.co/150x80/00366a/ffffff?text=APU',
  'https://placehold.co/150x80/ff0000/ffffff?text=MMU',
  'https://placehold.co/150x80/000000/ffffff?text=TAYLOR',
  'https://placehold.co/150x80/7e1f26/ffffff?text=UTM',
  'https://placehold.co/150x80/002b65/ffffff?text=UUM',
  'https://placehold.co/150x80/004c44/ffffff?text=UNIMAS',
];

const UniversityLogos = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/*
          Using flexbox with `flex-wrap` and `justify-center` to create a responsive, centered layout.
          `gap-10` provides spacing between the logo items.
          The images are set to a fixed height to maintain uniformity.
        */}
        <div className="flex flex-wrap rounded-full justify-center items-center gap-10">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo}
                alt={`University Logo ${index + 1}`}
                className="h-20 max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityLogos;