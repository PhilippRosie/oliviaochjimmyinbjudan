import styles from './page.module.css';
import { fredericka, bitter } from '../fonts';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import Ludwig from '../assets/images/map/ludwig.jpg';
import type { LatLngTuple } from 'leaflet';
import MapWrapper from '../components/maps/MapWrapper';
import SwishButton from '../components/SwishButton';

const center: LatLngTuple = [55.9659, 12.8393];
const locations = [
  {
    name: "Kvistofta Kyrka",
    position: [55.9692, 12.829] as LatLngTuple,
    address: "Ryavägen 200, 260 30, Vallåkra"
  },
  {
    name: "Grönadal",
    position: [55.9626787, 12.8496768] as LatLngTuple,
    address: "Ryavägen 38, 253 41, Vallåkra"
  }
];

export default function Hitta() {
  return (
    <div className={styles.hittaPage}>
      <div className={styles.borderTop}>
        <Image src={borderTop} alt="" fill priority />
      </div>
      <div className={styles.borderBottom}>
        <Image src={borderBottom} alt="" fill priority />
      </div>

      <main className={styles.hittaMain}>
        <h1 className={`${styles.hittaTitle} ${fredericka.className}`}>Olivia & Jimmy</h1>
        <p className={`${styles.hittaSubtitle} ${bitter.className}`}>Lördag 6/9 2025 | Kvistofta k:a | Kl: 14:30</p>
        <p className={`${styles.hittaSubtitle1} ${bitter.className}`}>Middag & Fest på Grönadal</p>

        <div className={styles.hittaContent}> 
          <h2 className={`${styles.hittaContentTitle} ${fredericka.className}`}>Transport</h2>
          <p className={`${styles.hittaContentText} ${bitter.className}`}>
            Informationen här gäller er som önskat hjälp med transport: (har ni som inte önskat hjälp ändrat er? Hör av er snarast! Så går det att lösa)
            <br/>
            För enbart adresser! Kolla längst ner på sidan (länk?)
            <br/>
            <br/>
<b>Klockan 13.30</b> är bussen på plats och senast <b>13.40</b> avgår den från <b>Stortorget</b> (Magnus Stenbock-statyn)
<br/>
<br/>
För att alla ska komma med har vi <b>Ludwig</b> (Olivia’s bror) på plats för att vara er reseledare .
          </p>
          <Image src={Ludwig} alt="Ludwig" width={300} height={300} className={styles.hittaContentImage} />
          <p className={`${styles.hittaContentText} ${bitter.className}`}>Blir ni sena/tidiga eller något annat sker som påverkar er möjlighet att resa med bussen, hör av er till honom :<br/><br/>
            <a href="tel:+46706537344" className={`${fredericka.className} ${styles.callBtn}`}>070-653 73 44</a>
          </p>
<br/>
<br/>
<p className={`${styles.hittaContentText} ${bitter.className}`}>🚍 Ni anländer till Kvistofta kyrka ca 15 minuter innan vigseln startar, vilket innebär att det är av stor vikt att bussen avgår i tid. 
<br/>
<br/>
Efter vigsel, kör bussen er vidare till Grönadal. 🥂 </p><br/>

<p className={`${styles.hittaContentText} ${bitter.className}`}>ca.<b>02.30</b> avgår bussen från Grönadal och lämnar oss åter på Stortorget ca. <b>03.00</b>. </p><br/>

<p className={`${styles.hittaContentText} ${bitter.className}`}>Swisha 100kr per näsa till:<br/><br/> 
  <SwishButton phone="0730626367" amount={100} message="Åga buss 2025" className={styles.swishBtn1}>
    0730626367
  </SwishButton> <br/><br/> <b>innan 6/9</b> märk med <b>&quot;ågabuss2025&quot;</b></p><br/>
  <small style={{fontSize: '12px', color: '#666'}}>
    Om knappen inte fungerar: <a href={`swish://paymentrequest?phone=${encodeURIComponent('0730626367')}&amount=100&message=${encodeURIComponent('Åga buss 2025')}`} target="_blank" rel="noopener noreferrer">Klicka här för att öppna Swish</a> eller <a href={`swish://paymentrequest?phone=0730626367&amount=100&message=Åga%20buss%202025`} target="_blank" rel="noopener noreferrer">alternativ länk</a>
  </small><br/><br/>
  <p style={{fontSize: '14px', color: '#333', marginTop: '10px'}}>
    📞 <strong>Telefonnummer för Swish:</strong> 0730626367<br/>
    💰 <strong>Belopp:</strong> 100 kr<br/>
    💬 <strong>Meddelande:</strong> Åga buss 2025
  </p><br/><br/>
          <h2 className={`${styles.hittaContentTitle1} ${fredericka.className}`}>Komma Rätt!</h2>
          <div className={styles.hittaContentMap}>
            <MapWrapper center={center} locations={locations} />
          </div>
         
        </div>
      </main>
    </div>
  );
}