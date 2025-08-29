// components/WhatsAppButton.tsx
"use client"

import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout: ReturnType<typeof setTimeout>;

  const handleScroll = () => {
    
    setIsVisible(false);
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 left-4 z-50 flex items-center transition-opacity duration-500">
          <div className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg mr-2">
            <p>هل تحتاج مساعدة؟ تحدث معنا</p>
          </div>
          <a
            href="https://wa.me/201234567890"
            aria-label="Chat on WhatsApp"
            className="bg-green-500 text-white p-3 mr-2 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;