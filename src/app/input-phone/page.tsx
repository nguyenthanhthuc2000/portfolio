"use client";

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import PhoneInput from '@/components/ui/PhoneInput';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(prev => value);
  };
  
  return (
    <Container>
      <form className="flex justify-center">
        <div>
          <PhoneInput value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
      </form>
    </Container>
  );
}
