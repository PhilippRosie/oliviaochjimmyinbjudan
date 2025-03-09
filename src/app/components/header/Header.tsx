import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import leafBorder from '../../assets/images/header/header-leaf-border.png';
import {fredericka } from '../../layout';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.borderImage}>
        <Image 
          src={leafBorder}
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'left center' }}
          priority
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/#" className={`${styles.navLink} ${fredericka.className}`}>
          Inbjudan
        </Link>
        <Link href="/information" className={`${styles.navLink} ${fredericka.className}`}>
          Information
        </Link>
        <Link href="/hallatal" className={`${styles.navLink} ${fredericka.className}`}>
          Hålla Tal?
        </Link>
        <Link href="/osa" className={`${styles.navLink} ${fredericka.className}`}>
          OSA
        </Link>
        <Link href="/hitta-ratt" className={`${styles.navLink} ${fredericka.className}`}>
          Hitta Rätt
        </Link>
      </nav>
    </header>
  );
}