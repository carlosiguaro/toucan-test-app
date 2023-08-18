import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  const coordinates = {
    lat: 10.480197226704519,
    lng: -66.90238638763897,
  };

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          Edificio ..., Oficina ..., Distrito Capital, Venezuela
        </Popup>
      </Marker>
    </MapContainer>
  );
}