// components/CustomSelect.tsx
'use client';

import React from 'react';
import Select, { StylesConfig, GroupBase } from 'react-select';

// تعريف الواجهة للخيارات
interface OptionType {
  value: string;
  label: string;
}

// تعريف الواجهة للمكون
interface CustomSelectProps {
  label: string;
  placeholder?: string;
  options: OptionType[];
  onChange?: (selectedOption: OptionType | null) => void;
  name: string;
}

// التخصيصات البصرية للمكون باستخدام Tailwind CSS
const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '2px solid #F59E0B' : '1px solid #D1D5DB',
    boxShadow: state.isFocused ? '0 0 0 1px #F59E0B' : 'none',
    borderRadius: '0.5rem',
    padding: '0.25rem 0',
    '&:hover': {
      borderColor: state.isFocused ? '#F59E0B' : '#D1D5DB',
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#FDE68A' : state.isSelected ? '#F59E0B' : undefined,
    color: state.isFocused ? '#1F2937' : state.isSelected ? 'white' : '#1F2937',
    '&:hover': {
      backgroundColor: '#FDE68A',
      color: '#1F2937',
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: '#9CA3AF',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#1F2937',
  }),
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  placeholder = 'Select an option',
  options,
  onChange,
  name,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <Select<OptionType, false, GroupBase<OptionType>>
        id={name}
        name={name}
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomSelect;