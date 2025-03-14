'use client';

import dynamic from 'next/dynamic';
import styles from './maps.module.css';
import type { LatLngTuple } from 'leaflet';

const ClientMap = dynamic(() => import('./ClientMap'), {
  loading: () => <div className={styles.mapLoading}>Laddar karta...</div>,
  ssr: false
});

interface MapWrapperProps {
  center: LatLngTuple;
  locations: Array<{
    name: string;
    position: LatLngTuple;
    address: string;
  }>;
}

export default function MapWrapper({ center, locations }: MapWrapperProps) {
  return <ClientMap center={center} locations={locations} />;
} 