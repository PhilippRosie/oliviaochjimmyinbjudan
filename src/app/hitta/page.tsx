'use client';

import styles from './page.module.css';
import { fredericka, bitter } from '../fonts';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const center = {
  lat: 55.97507,
  lng: 12.82170
};

const locations = [
  {
    name: "Kvistofta Kyrka",
    position: { lat: 55.9692, lng: 12.829 }
  },
  {
    name: "Grönadal",
    position: { lat: 55.9626787, lng: 12.8496768 }
  }
];

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

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
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap
                mapContainerClassName={styles.googleMap}
                center={center}
                zoom={14}
              >
                {locations.map((location, index) => (
                  <MarkerF
                    key={index}
                    position={location.position}
                    title={location.name}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </main>
    </div>
  );
}