import styles from './page.module.css';

import { fredericka, bitter } from './layout';
import Image from 'next/image';
import borderTop from './assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from './assets/images/inbjudan/header-leaf-border-bottom.png';
import Countdown from './components/Countdown/Countdown';
import IntroPage from './components/intro/page';

export default function Home() {
  return (
    <div className={styles.home}>
      <IntroPage />
      <div className={styles.borderTop}>
        <Image src={borderTop} alt="" fill priority />
      </div>
      <div className={styles.borderBottom}>
        <Image src={borderBottom} alt="" fill priority />
      </div>
     
    
      <main className={styles.homeMain}>
        <h1 className={`${styles.homeTitle} ${fredericka.className}`}>Olivia & Jimmy</h1>
        <p className={`${styles.homeSubtitle} ${bitter.className}`}>Lördag 6/9 2025 | Kvistofta k:a | Kl: 14:30</p>
        <p className={`${styles.homeSubtitle1} ${bitter.className}`}>
          Middag & Fest på Grönadal
        </p>

        <div className={styles.homeContent}>
          <h2 className={`${styles.homeContentTitle} ${fredericka.className}`}>Inbjudan</h2>
          <p className={`${styles.homeContentText} ${bitter.className}`}>
          Vi skulle bli väldigt glada ifall ni vill göra oss sällskap när vi gifter oss,

om exakt :
          </p>
          <Countdown />
        </div>
        <div className={`${styles.osaReminder} ${bitter.className}`}>
        <p className={`${styles.osaReminderText} ${fredericka.className}`}>Kommer ni?</p>
        <p className={`${styles.osaReminderText} ${fredericka.className}`}>Glöm inte att OSA!</p>
      </div>
        
      </main>
    
    </div>
  );
}
