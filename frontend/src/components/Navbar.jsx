import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/geolocation">Geolocation</Link>
    </div>
  );
};

export default Navbar;
