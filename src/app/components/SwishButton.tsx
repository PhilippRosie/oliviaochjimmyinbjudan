'use client';

import { useState } from 'react';
import { fredericka } from '../fonts';
import styles from './SwishButton.module.css';

interface SwishButtonProps {
  phone: string;
  amount?: number;
  message: string;
  children: React.ReactNode;
  className?: string;
}

export default function SwishButton({ phone, amount, message, children, className }: SwishButtonProps) {
  const [showFallback, setShowFallback] = useState(false);

  const handleSwishClick = () => {
    // Create the Swish URL
    let swishUrl = `swish://paymentrequest?phone=${phone}&message=${encodeURIComponent(message)}`;
    if (amount) {
      swishUrl += `&amount=${amount}`;
    }

    // Try to open Swish app
    const link = document.createElement('a');
    link.href = swishUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Add a timeout to detect if Swish app opened
    const timeout = setTimeout(() => {
      setShowFallback(true);
    }, 2000);

    // Listen for page visibility change (indicates app switch)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeout);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    link.click();
  };

  const handleFallbackClick = () => {
    // Copy phone number to clipboard
    navigator.clipboard.writeText(phone).then(() => {
      alert(`Telefonnummer ${phone} har kopierats till urklipp. Öppna Swish-appen och klistra in numret.`);
    }).catch(() => {
      alert(`Öppna Swish-appen och använd telefonnummer: ${phone}`);
    });
  };

  if (showFallback) {
    return (
      <button 
        onClick={handleFallbackClick}
        className={`${styles.swishButton} ${styles.fallbackButton} ${fredericka.className} ${className || ''}`}
      >
        Kopiera telefonnummer
      </button>
    );
  }

  return (
    <button 
      onClick={handleSwishClick}
      className={`${styles.swishButton} ${fredericka.className} ${className || ''}`}
    >
      {children}
    </button>
  );
}
