import styles from './page.module.css';
import { fredericka, bitter } from '../layout';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';


export default function Tacklatval() {


  return (
    <div className={styles.tackLatvalPage}>
      <div className={styles.borderTop}>
        <Image src={borderTop} alt="" fill priority />
      </div>
      <div className={styles.borderBottom}>
        <Image src={borderBottom} alt="" fill priority />
      </div>

      <main className={styles.tackLatvalMain}>
        <h1 className={`${styles.tackLatvalTitle} ${fredericka.className}`}>YEEEEAH! 🎵</h1>
        <p className={`${styles.tackLatvalSubtitle} ${bitter.className}`}>Din låt är nu med i vår episka spellista!<br />Tack för att du bidrar till att göra dansgolvet HELT BANAZA!</p>
        <p className={`${styles.tackLatvalSubtitle1} ${fredericka.className}`}>🕺Let&apos;s Dance!💃</p>
      </main>
    </div>
  );
}