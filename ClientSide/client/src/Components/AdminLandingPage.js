import{Link} from 'react-router-dom'
import { useEffect, useState } from "react";
export default function AdminLandingPage(){
 
  const [data,setData]=useState([]);
  const handleClick = () => {
    
    fetch("http://localhost:8080/getalllog", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({}),
    })
    .then(response => response.json())
    
     .then(data => setData (data)) //{
    
    .catch(error => {
      console.error('Error:', error);
    });
  }

return(
    <div>
          <div className="App">
        
      <div className="navigation" style={{ position: "relative" }}>

      
        <div className="navigation_item">
          <Link to="/ViewUser">View User</Link>
        </div> 
       

        <div className="navigation_item">
          <Link to="/viewRides">View Rides</Link>
        </div> 
        {/* <div className="App"> */}

        <div className="navigation_item">
          <Link to="/payment">Payments</Link>
        </div> 
        <div className="navigation_item">
          <Link to="/PassengersReviews">Reviews</Link>
        </div> 
        {/* <div className="App"> */}
 
    <div className="navigation" >
    <div className="navigation_item">
          <Link to="/logout">Logout</Link>
        </div> 
        </div>
        {/* </div> */}
                         

</div>
</div>
<div> <h3>Welcome {data&&data.fname}</h3></div> 

      </div>

            
)

}