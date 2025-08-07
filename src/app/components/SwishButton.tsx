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
  const [isLoading, setIsLoading] = useState(false);

  const isSwishInstalled = () => {
    // Check if we're on iOS or Android
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    console.log('Device detection:', { isIOS, isAndroid, userAgent: navigator.userAgent });
    
    return isIOS || isAndroid;
  };

  const handleSwishClick = () => {
    setIsLoading(true);
    
    // Check if Swish is likely installed
    if (!isSwishInstalled()) {
      console.log('Not on mobile device, showing fallback immediately');
      setIsLoading(false);
      setShowFallback(true);
      return;
    }
    
    // Create the Swish URL with proper encoding for iOS
    let swishUrl = `swish://paymentrequest?phone=${encodeURIComponent(phone)}&message=${encodeURIComponent(message)}`;
    if (amount) {
      swishUrl += `&amount=${amount}`;
    }

    console.log('Attempting to open Swish with URL:', swishUrl);
    console.log('User agent:', navigator.userAgent);

    // For iOS, try a different approach
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      console.log('iOS detected, using alternative approach');
      // Try window.location.href first for iOS
      try {
        window.location.href = swishUrl;
      } catch (error) {
        console.error('iOS direct link failed:', error);
        // Fallback to clipboard immediately for iOS
        setIsLoading(false);
        setShowFallback(true);
        return;
      }
    } else {
      // For Android, use the original approach
      const link = document.createElement('a');
      link.href = swishUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
    
    // Add a timeout to detect if Swish app opened
    const timeout = setTimeout(() => {
      console.log('Swish app did not open, showing fallback');
      setIsLoading(false);
      setShowFallback(true);
    }, isIOS ? 1000 : 1500); // Shorter timeout for iOS

    // Listen for page visibility change (indicates app switch)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('Page hidden, Swish app likely opened');
        clearTimeout(timeout);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        setIsLoading(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
  };

  const handleFallbackClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    // Copy phone number to clipboard
    navigator.clipboard.writeText(phone).then(() => {
      if (isIOS) {
        alert(`✅ Telefonnummer ${phone} har kopierats till urklipp!\n\n📱 Instruktioner för iPhone:\n1. Öppna Swish-appen\n2. Klicka på "Skicka"\n3. Klistra in telefonnumret (${phone})\n4. Fyll i meddelande: ${message}${amount ? `\n5. Belopp: ${amount} kr` : ''}\n\n💡 Tips: På iPhone kan du långtrycka på telefonnummer-fältet för att klistra in.`);
      } else {
        alert(`✅ Telefonnummer ${phone} har kopierats till urklipp!\n\n📱 Instruktioner:\n1. Öppna Swish-appen\n2. Klicka på "Skicka"\n3. Klistra in telefonnumret (${phone})\n4. Fyll i meddelande: ${message}${amount ? `\n5. Belopp: ${amount} kr` : ''}\n\n💡 Tips: Om numret inte fylls i automatiskt, klistra in det manuellt från urklipp.`);
      }
    }).catch(() => {
      if (isIOS) {
        alert(`📱 Öppna Swish-appen och använd:\n\n📞 Telefonnummer: ${phone}\n💬 Meddelande: ${message}${amount ? `\n💰 Belopp: ${amount} kr` : ''}\n\n⚠️ På iPhone:\n1. Långtryck på telefonnummer-fältet\n2. Välj "Klistra in"\n3. Fyll i resten av informationen manuellt.`);
      } else {
        alert(`📱 Öppna Swish-appen och använd:\n\n📞 Telefonnummer: ${phone}\n💬 Meddelande: ${message}${amount ? `\n💰 Belopp: ${amount} kr` : ''}\n\n⚠️ Om telefonnumret inte fylls i automatiskt:\n1. Klicka på telefonnummer-fältet\n2. Klistra in: ${phone}\n3. Fyll i resten av informationen manuellt.`);
      }
    });
  };

  const handleDirectLinkClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    // Try direct link approach with better URL encoding
    let swishUrl = `swish://paymentrequest?phone=${encodeURIComponent(phone)}&message=${encodeURIComponent(message)}`;
    if (amount) {
      swishUrl += `&amount=${amount}`;
    }
    
    // For iOS, try alternative URL format
    if (isIOS) {
      swishUrl = `swish://paymentrequest?phone=${phone}&message=${message}`;
      if (amount) {
        swishUrl += `&amount=${amount}`;
      }
    }
    
    console.log('Trying direct link approach with URL:', swishUrl);
    
    // Try window.location.href approach
    try {
      window.location.href = swishUrl;
    } catch (error) {
      console.error('Direct link failed:', error);
      // Fallback to clipboard
      handleFallbackClick();
    }
  };

  if (isLoading) {
    return (
      <button 
        disabled
        className={`${styles.swishButton} ${styles.loadingButton} ${fredericka.className} ${className || ''}`}
      >
        Öppnar Swish...
      </button>
    );
  }

  if (showFallback) {
    return (
      <div className={styles.fallbackContainer}>
        <button 
          onClick={handleDirectLinkClick}
          className={`${styles.swishButton} ${styles.directButton} ${fredericka.className} ${className || ''}`}
        >
          🔗 Öppna Swish direkt
        </button>
        <button 
          onClick={handleFallbackClick}
          className={`${styles.swishButton} ${styles.fallbackButton} ${fredericka.className} ${className || ''}`}
        >
          📋 Kopiera telefonnummer
        </button>
      </div>
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
