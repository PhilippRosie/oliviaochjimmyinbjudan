'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import leafBorder from '../../assets/images/header/header-leaf-border.png';
import { fredericka } from '../../fonts';

// Importera ikonerna
import inbjudanIcon from '../../assets/images/header/inbjudan-icon.jpg';
import infoIcon from '../../assets/images/header/info-icon.jpg';
import talIcon from '../../assets/images/header/tal-icon.jpg';
import osaIcon from '../../assets/images/header/osa-icon.jpg';
import hittaIcon from '../../assets/images/header/hitta-icon.jpg';

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.borderImage}>
        <Image 
          src={leafBorder}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'contain', objectPosition: 'left center' }}
          priority
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/#" className={`${styles.navLink} ${fredericka.className}`}>
          <span className={styles.navText}>Inbjudan</span>
          <Image 
            src={inbjudanIcon} 
            alt="Inbjudan" 
            width={45} 
            height={45} 
            className={styles.navIcon}
          />
        </Link>
        <Link href="/information" className={`${styles.navLink} ${fredericka.className}`}>
          <span className={styles.navText}>Information</span>
          <Image 
            src={infoIcon} 
            alt="Information" 
              width={45} 
            height={45} 
            className={styles.navIcon}
          />
        </Link>
        <Link href="/hallatal" className={`${styles.navLink} ${fredericka.className}`}>
          <span className={styles.navText}>Hålla Tal?</span>
          <Image 
            src={talIcon} 
            alt="Hålla Tal" 
            width={45} 
            height={45} 
            className={styles.navIcon}
          />
        </Link>
        <Link href="/osa" className={`${styles.navLink} ${fredericka.className}`}>
          <span className={styles.navText}>OSA</span>
          <Image 
            src={osaIcon} 
            alt="OSA" 
            width={45} 
            height={45} 
            className={styles.navIcon}
          />
        </Link>
        <Link href="/hitta" className={`${styles.navLink} ${fredericka.className}`}>
          <span className={styles.navText}>Hitta Rätt</span>
          <Image 
            src={hittaIcon} 
            alt="Hitta Rätt" 
            width={45} 
            height={45} 
            className={styles.navIcon}
          />
        </Link>
      </nav>
    </header>
  );
}