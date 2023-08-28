import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AdminNav() {
    const mystate = useSelector((state) => state.logged);
    return (
        <div style={{ display: mystate.loggedIn ? "block" : "none" }}>
            <div className="navigation" style={{ position: "relative" }}>


                <div className="navigation_item">
                    <Link to="/ViewUser">view user</Link>
                </div>


                <div className="navigation_item">
                    <Link to="/viewRides">view rides</Link>
                </div>
                <div className="navigation_item">
                    <Link to="/ViewAllBooking">view Booking</Link>
                </div>

                <div className="navigation_item">
                    <Link to="/ViewPayment">view payments</Link>
                </div>

                <div className="navigation_item">
                    <Link to="/PassengersReviews">view reviews</Link>
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