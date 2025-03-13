import styles from './page.module.css';
import { fredericka, bitter } from '../layout';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import Körschema from '../assets/images/information/korschema.jpg';

export default function Information() {
  return (
    <div className={styles.informationPage}>
      <div className={styles.borderTop}>
        <Image src={borderTop} alt="" fill priority />
      </div>
      <div className={styles.borderBottom}>
        <Image src={borderBottom} alt="" fill priority />
      </div>

      <main className={styles.informationMain}>
      <h1 className={`${styles.informationTitle} ${fredericka.className}`}>Olivia & Jimmy</h1>
      <p className={`${styles.informationSubtitle} ${bitter.className}`}>Lördag 6/9 2025 | Kvistofta k:a | Kl: 14:30</p>
      <p className={`${styles.informationSubtitle1} ${bitter.className}`}>Middag & Fest på Grönadal</p>

      <div className={styles.informationContent}>
        <section className={styles.informationSection}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
          Över 15 år senare är det alltså dags. <br />

Lördagen den 6 September 2025, kl. 14.30 gifter vi oss i Kvistofta Kyrka <br /> <br />
Därefter rör vi oss direkt 1600 meter österut till Grönadal för mingel följt av sittande middag & därefter dansar vi på borden.
          </p>
        </section>
        <section className={styles.informationSection1}>
            <p className={`${styles.informationSectionText} ${bitter.className}`}><b>Avsluta:</b> Har vi tänkt göra tidigt Söndag morgon.​</p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Barn:</b> Älskar vi, (särskilt våra egna) MEN. Denna kvällen önskar vi fira tillsammans med vuxna, och önskar därför en barnfri tillställning.(dvs. Barn är hjärtligt välkomna i kyrkan, men inte till Grönadal efteråt)​
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Presenter:</b> Önskar vi oss inga, däremot gärna ett bidrag till kommande resa.
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Klädkod:</b> Viktigast för oss är att folk är bekväma.

Kom i något du känner dig &quot;uppklädd&quot; & fin i! (Vi undanber dock blåjeans, mjukisbyxor och Klubbmärken)
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Transport:</b> För den som önskar och vill slippa ta bilen.

Så kommer vi att ordna skjuts från centrala Helsingborg som tar er till kyrkan. Från kyrkan till Grönadal. Sedan tillbaka till Helsingborg när festen är över. Detta till en kostnad på 100kr/person.
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Musik:</b> DJ kommer förgylla festen, men kasta gärna in ett par önskelåtar när ni OSA&apos;ar, så har han ledtrådar på vad ni vill höra.
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>OSA</b> (senast 31/7): Använd formuläret på OSA-sidan för att meddela ifall ni kan komma eller ej.

Där ber vi er även meddela Ev. Specialkost samt ifall ni vill ha hjälp med transport eller ej.​
<br />
 <b className={styles.infoTextImportant}>(Vid ev. förhinder EFTER 31/7, ber vi er istället kontakta vår Toastmadame)</b>
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Boende:</b> För er som reser långt ifrån och vill boka hotell, rekommenderar vi The Vault (där vi själva kommer att bo). 

(boka.thevaulthotel.se och skriv in rabattkoden K-Gränd för 20% rabatt.)
          </p>
        </section>
      </div>
      <div className={styles.informationContent}>
        <Image className={styles.informationImage} src={Körschema} alt="Körschema" />
      </div>
      </main>
      
   
    </div>
  );
}