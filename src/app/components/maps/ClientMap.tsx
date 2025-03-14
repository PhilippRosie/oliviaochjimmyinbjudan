'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';
import type { LatLngTuple } from 'leaflet';
import markerIcon2x from '../../assets/images/map/marker-icon-2x.png';
import markerIcon from '../../assets/images/map/marker-icon.png';
import markerShadow from '../../assets/images/map/marker-shadow.png';
import styles from './maps.module.css';
import { bitter, fredericka } from '../../fonts';

interface Location {
  name: string;
  position: LatLngTuple;
  address: string;
}

interface MapProps {
  center: LatLngTuple;
  locations: Location[];
}

export default function ClientMap({ center, locations }: MapProps) {
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src,
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });
  }, []);

  const getDirectionsUrl = (location: Location) => {
    const encodedAddress = encodeURIComponent(location.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  };

  return (
    <MapContainer 
      center={center} 
      zoom={13} 
      className={styles.googleMap}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>
            <div className={`${styles.popupContent} ${bitter.className}`}>
              <strong>{location.name}</strong>
              <p>{location.address}</p>
              <a 
                href={getDirectionsUrl(location)} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.directionsLink} ${fredericka.className}`}
              >
                Få vägbeskrivning
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 