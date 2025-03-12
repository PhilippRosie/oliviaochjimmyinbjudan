import styles from './page.module.css';
import { fredericka, bitter } from '../layout';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import Image from 'next/image';

export default function HallaTal() {
    return (
        <div className={styles.hållaTalPage}>
            <div className={styles.borderTop}>
                <Image src={borderTop} alt="" fill priority />
            </div>
            <div className={styles.borderBottom}>
                <Image src={borderBottom} alt="" fill priority />
            </div>
        <main className={styles.hållaTalMain}>
        <h1 className={`${styles.hållaTalTitle} ${fredericka.className}`}>Olivia & Jimmy</h1>
      <p className={`${styles.hållaTalSubtitle} ${bitter.className}`}>Lördag 6/9 2025 | Kvistofta k:a | Kl: 14:30</p>
      <p className={`${styles.hållaTalSubtitle1} ${bitter.className}`}>Middag & Fest på Grönadal</p>
            <div className={styles.hållaTalContent}>
                <h2 className={`${styles.hållaTalTitle1} ${fredericka.className}`}>Hålla tal?!</h2>
                <section className={styles.hållaTalSection}>
                    <p className={`${styles.hållaTalSectionText} ${bitter.className}`}>
                    Har du/ni tänkt hålla tal, eller finns där några andra frågor?
                    </p>
                </section>
                <section className={styles.hållaTalSection}>
                    <p className={`${styles.hållaTalSectionText} ${bitter.className}`}>
                        Kontakta vår Toastmadame:<br />
                        <div className={styles.hållaTalSection}>
                            <br />
                            <p className={styles.hållaTalSectionText1}>
                                Anna Neidenström
                            </p>
                            <p className={`${styles.hållaTalSectionText2} ${fredericka.className}`}>     
                                <a href="tel:+46707506142">0707-506142</a>
                            </p>
                            <p className={`${styles.hållaTalSectionText3} ${fredericka.className}`}>
                                <a href="mailto:toastmadame250906@hotmail.com">Toastmadame250906@hotmail.com</a>
                            </p>
                        </div>
                    </p>
                </section>
                <section className={styles.hållaTalSection}>
                    <p className={`${styles.hållaTalSectionText} ${bitter.className}`}>
                    Anna önskar att detta är anmält absolut senast den 20/8.
                    </p>
                </section>
            </div>
        </main>
        </div>
    );
}