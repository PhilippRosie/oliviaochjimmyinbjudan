import styles from './page.module.css';
import { fredericka, bitter } from '../fonts';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import Körschema from '../assets/images/information/korschema.jpg';
import SwishButton from '../components/SwishButton';

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
            <b>Presenter:</b> Önskar vi oss inga, däremot gärna ett bidrag till vår framtida bröllopsresa. <br /><br />
            Vi vet inte riktigt vart vi ska än – men vi lovar att göra något minnesvärt (och kanske soligt) <br/><br/>
          </p>
          <SwishButton phone="0730626367" message="Bröllopsgåva" className={styles.swishBtn}>
            Swisha Här!
          </SwishButton><br/><br/>
          <p style={{fontSize: '14px', color: '#333', marginTop: '10px'}} className={bitter.className}>
            📞 <strong>Telefonnummer för Swish:</strong> 0730626367<br/>
            💬 <strong>Meddelande:</strong> Bröllopsgåva
          </p><br/><br/>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Klädkod:</b> Viktigast för oss är att folk är bekväma.

Kom i något du känner dig &quot;uppklädd&quot; & fin i! (Vi undanber dock blåjeans, mjukisbyxor och Klubbmärken)
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Transport:</b> För er som önskat hjälp med transport finner ni info <a href="/hitta" className={styles.underline}>HÄR!</a>
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Musik:</b> DJ kommer förgylla festen, men kasta gärna in ett par önskelåtar här i <a href="/osa" className={styles.underline}>LÅTÖNSKINGAR</a>, så har han ledtrådar på vad ni vill höra.
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>OSA:</b> 
 <b className={styles.infoTextImportant}>(Vid ev. förhinder EFTER 31/7, ber vi er istället kontakta vår <a href="/hallatal" className={styles.underline}>Toastmadame</a>)</b>
          </p>
        </section>
        <section className={styles.informationSection1}>
          <p className={`${styles.informationSectionText} ${bitter.className}`}>
            <b>Boende:</b> För er som önskat hjälp med transport finner ni info här. Och länk till den nya sidan
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