"use client";

import React, { useState, ChangeEvent, FocusEvent, useRef } from 'react';

interface PhoneInputProps {
  value?: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ 
  value = '',
  onChange,
}) => {
  const [test, setTest] = useState<string>(value);

  // Hàm định dạng số điện thoại
  const formatPhoneNumber = (number: string): string => {
    const numericValue = number.replace(/\D/g, ''); // Xóa các ký tự không phải số
    const match = numericValue.match(/^(\d{0,3})(\d{0,3})(\d{0,4})(.*)$/);
    if (match) {
      const [, p1, p2, p3, extra] = match;
      return `${p1 ? `(${p1}` : ''}${p2 ? `) ${p2}` : ''}${p3 ? `-${p3}` : ''}${extra ? extra : ''}`;
    }
    return numericValue;
  };

  const handleKeyDown = (event:any, id:any) => {
    const elm: any = document.getElementById(id);
    const start = elm?.selectionStart;
    if (event.code == 'ArrowLeft' && start > 0) {
      elm.selectionEnd = start - 1;
    } else if (event.code == 'ArrowRight') {
      elm.selectionStart = start + 1;
    }
  }

  return (
    <>
      <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700"
        type="text" 
        name="phone"
        defaultValue={test}
        id="phone"
        onKeyDown={(e) => handleKeyDown(e, "phone")}
        maxLength={14}
        placeholder="(123) 456-7890"
      />
    </>
  );
};

export default PhoneInput;
