import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CarOwnerNav() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div style={{ display: mystate.loggedIn ? "block" : "none" }}>
      <div className="navigation" style={{ position: "relative" }}>
      <div className="navigation_item">
          <Link to="/CMain">Home</Link>
        </div>
        <div className="navigation_item">
          <Link to="/addVehicle">Add Vehicle</Link>
        </div>
        <div className="navigation_item">
          <Link to="/addRide">Add Ride</Link>
        </div>
        <div className="navigation_item">
          <Link to="/C_rides">View Rides</Link>
        </div>
        <div className="navigation_item">
          <Link to="/about">About</Link>
        </div>
        <div className="navigation_item">
          <Link to="/contact">Contact</Link>
        </div>
        <div
          className="navigation_item"
          style={{ position: "absolute", right: "0" }}
        >
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </div>
  );
}
