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
      <div className="flex gap-10">
        <div>
          <label htmlFor="phone" className="font-bold">Phone</label>
          <PhoneInput value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
      </div>
      <div className="block">
        <h3 className="font-bold">1. Simple list</h3>
        <ol className="custom-list">
          <li>BFE.dev</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>System Design</li>
        </ol>
      </div>
      <div className="block">
        <h3 className="font-bold">2. Nested</h3>
        <ol className="custom-list">
          <li>BFE.dev</li>
          <li>
              JavaScript
              <ol className="custom-list">
                  <li>TypeScript</li>
                  <li>Quiz</li>
                  <li>
                      Framework
                      <ol className="custom-list">
                          <li>React</li>
                          <li>Vue.js</li>
                      </ol>
                  </li>
              </ol>
          </li>
          <li>CSS</li>
          <li>System Design</li>
        </ol>
      </div>
    </Container>
  );
}
