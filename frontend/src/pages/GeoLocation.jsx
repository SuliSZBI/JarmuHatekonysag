import { useEffect, useState } from "react";
import "./Geolocation.css";
import kocsik from "../../public/kocsik";

const GeoLocation = () => {
  const [longitude, setLongitude] = useState("");
  const [altitude, setAltitude] = useState(0);
  const [latitude, setLatitude] = useState("");
  const [kocsi, setKocsi] = useState("");
  const [kapKoordinata, setKapKoordinata] = useState(1);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function success(position) {
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
      console.log(position.coords.altitude);
      
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
      setAltitude(position.coords.altitude);
    }

    function error() {
      setKapKoordinata(0);
    }

    getLocation();

  }, []);

  const bekuldes = (e) => {
    e.preventDefault(); 
  }
  
  return (
    <div className="geolocation-container">
      <h1>Geolocation</h1>
      <p>Egy űrlap, ami bekéri a koordinátákat ...</p>
      <form>
        <select id="kocsik" onChange={e => setKocsi(e.target.value)}>
          {kocsik.map((elem, index) => (
            <option key={index} value={elem.tipus}>{elem.tipus}</option>
          ))}
        </select>
        {kapKoordinata ?
          <div>
            <p>Vízszintes koordináta: {longitude}</p>
            <p>Függőleges koordináta: {latitude}</p>
            <p>Kiindulási magasság: {altitude}</p>
          </div>
        :
          <>
            <label>Add meg a függőleges koordinát.</label>
            <input onChange={e => setLatitude(e.target.value)} id="latitudeKoord" type="text" />
            <label>Add meg a vízszintes koordinát.</label>
            <input onChange={e => setLongitude(e.target.value)} id="longitudeKoord" type="text" />
          </>
        }
        <button onClick={e => bekuldes(e)}>Beküldés</button>
      </form>
    </div>
  );
};

export default GeoLocation;
