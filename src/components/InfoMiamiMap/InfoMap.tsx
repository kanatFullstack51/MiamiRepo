import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cls from './Info.module.scss'

export const InfoMap = () => {
    const center: LatLngExpression = [25.761681, -80.191788]; // Miami coordinates

  return (
    <div className={cls['wrapper']}>
        <h4 className={cls['miami']}>MIAMI на карте</h4>
      <MapContainer center={center} zoom={11} className={cls['map']}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>
            Miami
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
