import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  useMap,
} from "react-leaflet";
import LocationForm from "../location-form/LacationForm";

type Coordinates = {
  lat: number;
  lng: number;
};

type LocationFnParams = {
  coordinates: Coordinates;
  callback: Function;
};

function LocationMarker({ coordinates, callback }: LocationFnParams) {
  const [position, setPosition] = useState<Coordinates>(coordinates);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    move() {
      callback(map.getCenter());
      setPosition(map.getCenter());
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        Your coordinates: Lat. {position.lat}, Long. {position.lng}{" "}
      </Popup>
    </Marker>
  );
}
function Map() {
  const mapRef = useRef();
  const [coordinates, setCoordindates] = useState<Coordinates>({
    lat: 10.480197226704519,
    lng: -66.90238638763897,
  });
  const setCenterPosition = (pos: any) => {
    const { lat, lng } = pos;
    setCoordindates({
      lat,
      lng,
    });
  };

  const setCenterPositionForm = (pos: any) => {
    const { lat, lng } = pos;
    setCoordindates({lat,lng});
    
    if (mapRef.current) {
      const map = mapRef.current;
      map.flyTo(pos);
    }
  };
  return (
    <div className="map-container">
      <div>
        <div>
          <Typography variant="h6">Location on the map</Typography>
          <div>
            <label>
              <strong>Latitude</strong> {coordinates.lat}
            </label>
            <label>
              <strong>Longitude</strong> {coordinates.lng}
            </label>
          </div>
        </div>
        <div>
          <Typography variant="h6">Location form</Typography>
          <LocationForm callback={setCenterPositionForm} />
        </div>
      </div>

      <div>
        <MapContainer
          ref={mapRef}
          center={[coordinates.lat, coordinates.lng]}
          zoom={12}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker
            coordinates={coordinates}
            callback={setCenterPosition}
          />
        </MapContainer>
      </div>
      <div>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          <strong>Click</strong> on the map to see your current location
        </Alert>
      </div>
    </div>
  );
}

const DynamicComponent = () => <Map />;
export default DynamicComponent;
