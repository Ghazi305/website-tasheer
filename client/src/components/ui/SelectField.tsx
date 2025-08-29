'use client';
import React from 'react';
import Select from 'react-select';

interface SelectFieldProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, value, onChange }) => {
  // تحويل الخيارات لشكل React Select
  const selectOptions = options.map(opt => ({ value: opt, label: opt }));

  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <Select
        options={selectOptions}
        value={value ? { value, label: value } : null}
        onChange={(selected) => onChange && onChange((selected as any)?.value)}
        placeholder={`اختر ${label.toLowerCase()}`}
        isSearchable
        classNames={{
          control: () => 'border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          placeholder: () => 'text-gray-400',
        }}
      />
    </div>
  );
};

export default SelectField;