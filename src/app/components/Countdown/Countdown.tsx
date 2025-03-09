'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';
import { bitter } from '../../layout';

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    const weddingDate = new Date('2025-09-06T14:30:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${styles.countdown} ${bitter.className}`}>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>Dagar</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>Timmar</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>Minuter</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>Sekunder</span>
      </div>
    </div>
  );
} 