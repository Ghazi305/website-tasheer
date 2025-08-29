'use client';

import React from 'react';
import Select, { SingleValue } from 'react-select';

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}



const SelectField: React.FC<SelectFieldProps> = ({ label, options, value, onChange }) => {
  // تحويل مصفوفة string إلى شكل react-select { label, value }
  const formattedOptions = options.map(opt => ({ label: opt, value: opt }));

  // إيجاد العنصر المحدد بناءً على القيمة
  const selectedOption = formattedOptions.find(opt => opt.value === value) || null;

  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <Select
        options={formattedOptions}
        value={selectedOption}
        onChange={(option: SingleValue<{ label: string; value: string }>) => {
          onChange(option?.value || '');
        }}
        placeholder={`اختر ${label.toLowerCase()}`}
        isSearchable={true}
        classNames={{
          control: (state) => 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500',
        }}
      />
    </div>
  );
};

export default SelectField;