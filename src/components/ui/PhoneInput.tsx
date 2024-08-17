"use client";

import React, { useState, ChangeEvent, useRef } from 'react';

interface PhoneInputProps {
  value?: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ 
  value = '',
  onChange,
}) => {
  const [formattedValue, setFormattedValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  // Hàm định dạng số điện thoại
  const formatPhoneNumber = (number: string): string => {
    const numericValue = number.replace(/\D/g, ''); // Xóa các ký tự không phải số
    const match = numericValue.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const [, p1, p2, p3] = match;
      return `${p1 ? `(${p1}` : ''}${p2 ? `) ${p2}` : ''}${p3 ? `-${p3}` : ''}`;
    }
    return numericValue;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const caretPosition = e.target.selectionStart;
    const formattedPhoneNumber = formatPhoneNumber(rawValue);

    setFormattedValue(formattedPhoneNumber);
    onChange(formattedPhoneNumber);

    // Adjust the caret position
    setTimeout(() => {
      if (inputRef.current) {
        const newCaretPosition = calculateCaretPosition(caretPosition || 0, rawValue, formattedPhoneNumber);
        inputRef.current.setSelectionRange(newCaretPosition, newCaretPosition);
      }
    }, 0);
  };

  const calculateCaretPosition = (caretPosition: number, rawValue: string, formattedValue: string) => {
    const rawDigitsBeforeCaret = rawValue.slice(0, caretPosition).replace(/\D/g, '').length;
    let formattedDigitsBeforeCaret = 0;
    let i = 0;

    // Count the digits in the formatted value until reaching rawDigitsBeforeCaret
    while (formattedDigitsBeforeCaret < rawDigitsBeforeCaret && i < formattedValue.length) {
      if (/\d/.test(formattedValue[i])) {
        formattedDigitsBeforeCaret++;
      }
      i++;
    }

    return i;
  };

  return (
    <>
      <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700"
        ref={inputRef}
        type="text" 
        value={formattedValue}
        onChange={handleInputChange}
        maxLength={14}
        placeholder="(123) 456-7890"
      />
    </>
  );
};

export default PhoneInput;
