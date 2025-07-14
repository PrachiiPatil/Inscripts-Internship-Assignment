// src/components/ui/Input.tsx
import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'block w-full rounded-md border-gray-300 px-3 py-2 text-sm focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue disabled:bg-gray-100 disabled:cursor-not-allowed';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    />
  );
};

export default Input;