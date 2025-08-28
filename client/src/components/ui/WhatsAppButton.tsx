// components/WhatsAppButton.js

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center">
      <div className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg mr-2">
        <p>هل تحتاج مساعدة؟ تحدث معنا</p>
      </div>
      <a href="https://wa.me/" aria-label="Chat on WhatsApp" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
};

export default WhatsAppButton;