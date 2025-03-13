import styles from './page.module.css';
import { fredericka, bitter } from '../fonts';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';


export default function Tackosa() {


  return (
    <div className={styles.tackOsaPage}>
      <div className={styles.borderTop}>
        <Image src={borderTop} alt="" fill priority />
      </div>
      <div className={styles.borderBottom}>
        <Image src={borderBottom} alt="" fill priority />
      </div>

      <main className={styles.tackOsaMain}>
        <h1 className={`${styles.tackOsaTitle} ${fredericka.className}`}>Woohoo!</h1>
        <p className={`${styles.tackOsaSubtitle} ${bitter.className}`}>Nu är det bara att börja leta fram dansskorna och öva på att hålla tal...</p>
        <p className={`${styles.tackOsaSubtitle1} ${fredericka.className}`}>Ses Snart!</p>    
      </main>
    </div>
  );
}