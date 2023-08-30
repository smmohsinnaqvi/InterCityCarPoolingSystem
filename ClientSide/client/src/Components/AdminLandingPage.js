import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import AdminNav from './AdminFuncCompo/AdminNav';
export default function AdminLandingPage() {

  const [data, setData] = useState([]);
  const handleClick = () => {

    fetch("http://localhost:8080/getalllog", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then(response => response.json())

      .then(data => setData(data)) //{

      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <div className="Admin">
        <AdminNav/>
        {/* <div className="navigation" style={{ position: "relative" }}>


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

          <div className="App">

            <div className="navigation" >
              <div className="navigation_item">
                <Link to="/logout">Logout</Link>
              </div>
            </div>
          </div>


        </div> */}
      <div> <h3>Welcome {data && data.fname}</h3></div>
      </div>

    </div>


  )

}