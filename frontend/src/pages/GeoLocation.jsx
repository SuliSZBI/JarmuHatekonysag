import { useState } from "react";
import "./Geolocation.css";

const GeoLocation = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  return (
    <div className="geolocation-container">
      <h1>Geolocation</h1>
      <p>Egy űrlap, ami bekéri a koordinátákat ...</p>
    </div>
  );
};

export default GeoLocation;
