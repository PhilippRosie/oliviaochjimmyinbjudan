'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import introImage from '../../assets/images/intro/intro-image.png';

export default function IntroPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [startFadeOut, setStartFadeOut] = useState(false);

  useEffect(() => {
    // Starta bildanimationen när komponenten laddas
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    // Starta fade-out efter att bilden har visats
    setTimeout(() => {
      setStartFadeOut(true);
    }, 2500);
  }, []);

  return (
    <div className={`${styles.introContainer} ${startFadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.imageContainer}>
        <Image
          src={introImage}
          alt="Intro bild"
          width={300}
          height={300}
          className={`${styles.introImage} ${imageLoaded ? styles.visible : ''}`}
          priority
        />
      </div>
    </div>
  );
} 