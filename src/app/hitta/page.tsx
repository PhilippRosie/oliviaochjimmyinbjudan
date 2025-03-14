import styles from './page.module.css';
import { fredericka, bitter } from '../fonts';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import type { LatLngTuple } from 'leaflet';
import MapWrapper from '../components/maps/MapWrapper';

const center: LatLngTuple = [55.9659, 12.8393];
const locations = [
  {
    name: "Kvistofta Kyrka",
    position: [55.9692, 12.829] as LatLngTuple,
    address: "Rååvägen 298, 257 30 Rydebäck"
  },
  {
    name: "Grönadal",
    position: [55.9626787, 12.8496768] as LatLngTuple,
    address: "Grönadalsgården 1, 257 30 Rydebäck"
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
          <h2 className={`${styles.hittaContentTitle} ${fredericka.className}`}>Hitta Rätt</h2>
          <div className={styles.hittaContentMap}>
            <MapWrapper center={center} locations={locations} />
          </div>
        </div>
      </main>
    </div>
  );
}